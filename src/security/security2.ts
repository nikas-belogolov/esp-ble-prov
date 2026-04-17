import { ProvisionerError } from "..";
import Security from "./security";

import { security2, session, constants } from "../proto"

const { Status } = constants;
const { SessionData, SecSchemeVersion } = session;

const {
    Sec2Payload,
    Sec2MsgType,
    S2SessionCmd0,
    S2SessionResp0,
    S2SessionCmd1,
    S2SessionResp1
} = security2;

// ---------------------------------------------------------------------------
// RFC 5054 3072-bit group (g = 5)
// ---------------------------------------------------------------------------

const N_HEX =
    'FFFFFFFFFFFFFFFFC90FDAA22168C234C4C6628B80DC1CD129024E088A67CC74020BBEA63B' +
    '139B22514A08798E3404DDEF9519B3CD3A431B302B0A6DF25F14374FE1356D6D51C245E485' +
    'B576625E7EC6F44C42E9A637ED6B0BFF5CB6F406B7EDEE386BFB5A899FA5AE9F24117C4B1' +
    'FE649286651ECE45B3DC2007CB8A163BF0598DA48361C55D39A69163FA8FD24CF5F83655D2' +
    '3DCA3AD961C62F356208552BB9ED529077096966D670C354E4ABC9804F1746C08CA18217C3' +
    '2905E462E36CE3BE39E772C180E86039B2783A2EC07A28FB5C55DF06F4C52C9DE2BCBF6955' +
    '817183995497CEA956AE515D2261898FA051015728E5A8AAAC42DAD33170D04507A33A855' +
    '21ABDF1CBA64ECFB850458DBEF0A8AEA71575D060C7DB3970F85A6E1E4C7ABF5AE8CDB093' +
    '3D71E8C94E04A25619DCEE3D2261AD2EE6BF12FFA06D98A0864D87602733EC86A64521F2B' +
    '18177B200CBBE117577A615D6C770988C0BAD946E208E24FA074E5AB3143DB5BFCE0FD108E' +
    '4B82D120A93AD2CAFFFFFFFFFFFFFFFF';

const N = BigInt('0x' + N_HEX);
const G = 5n;
const N_BYTES = 384; // 3072 / 8

// ---------------------------------------------------------------------------
// BigInt <-> Uint8Array helpers (big-endian)
// ---------------------------------------------------------------------------

function bigIntToBytes(n: bigint): Uint8Array {
    if (n === 0n) return new Uint8Array([0]);
    let hex = n.toString(16);
    if (hex.length % 2 !== 0) hex = '0' + hex;
    const bytes = new Uint8Array(hex.length / 2);
    for (let i = 0; i < bytes.length; i++) {
        bytes[i] = parseInt(hex.substring(i * 2, i * 2 + 2), 16);
    }
    return bytes;
}

function bigIntToPaddedBytes(n: bigint, length: number): Uint8Array {
    const raw = bigIntToBytes(n);
    if (raw.length >= length) return raw;
    const padded = new Uint8Array(length);
    padded.set(raw, length - raw.length);
    return padded;
}

function bytesToBigInt(buf: Uint8Array): bigint {
    let hex = '';
    for (const b of buf) hex += b.toString(16).padStart(2, '0');
    return BigInt('0x' + (hex || '0'));
}

// ---------------------------------------------------------------------------
// Modular exponentiation (square-and-multiply)
// ---------------------------------------------------------------------------

function modPow(base: bigint, exp: bigint, mod: bigint): bigint {
    let result = 1n;
    base = ((base % mod) + mod) % mod;
    while (exp > 0n) {
        if (exp & 1n) result = (result * base) % mod;
        exp >>= 1n;
        base = (base * base) % mod;
    }
    return result;
}

// ---------------------------------------------------------------------------
// SHA-512 helpers (Web Crypto)
// ---------------------------------------------------------------------------

async function sha512Bytes(...buffers: Uint8Array[]): Promise<Uint8Array> {
    const total = buffers.reduce((n, b) => n + b.length, 0);
    const combined = new Uint8Array(total);
    let offset = 0;
    for (const buf of buffers) {
        combined.set(buf, offset);
        offset += buf.length;
    }
    const digest = await crypto.subtle.digest('SHA-512', combined);
    return new Uint8Array(digest);
}

async function sha512Int(...buffers: Uint8Array[]): Promise<bigint> {
    const hash = await sha512Bytes(...buffers);
    return bytesToBigInt(hash);
}

// ---------------------------------------------------------------------------
// SRP6a helpers (matching ESP-IDF tools/esp_prov/security/srp6a.py)
// ---------------------------------------------------------------------------

type SrpArg = bigint | Uint8Array;

async function srpH(args: SrpArg[], width: number | null = null): Promise<bigint> {
    const parts: Uint8Array[] = [];
    for (const arg of args) {
        if (arg === null || arg === undefined) continue;
        let data: Uint8Array;
        if (typeof arg === 'bigint') {
            data = bigIntToBytes(arg);
        } else {
            data = arg;
        }
        if (width !== null) {
            const pad = new Uint8Array(width - data.length);
            parts.push(pad);
        }
        parts.push(data);
    }
    return sha512Int(...parts);
}

async function hNxorG(): Promise<Uint8Array> {
    const binN = bigIntToBytes(N);
    const binG = bigIntToBytes(G);
    const padding = new Uint8Array(binN.length - binG.length);

    const hN = await sha512Bytes(binN);
    const paddedG = new Uint8Array(padding.length + binG.length);
    paddedG.set(padding, 0);
    paddedG.set(binG, padding.length);
    const hG = await sha512Bytes(paddedG);

    const xorResult = new Uint8Array(hN.length);
    for (let i = 0; i < hN.length; i++) {
        xorResult[i] = hN[i] ^ hG[i];
    }
    return xorResult;
}

async function calculateX(salt: bigint, username: string, password: string): Promise<bigint> {
    const IpBytes = new TextEncoder().encode(username + ':' + password);
    const innerHash = await srpH([IpBytes]);
    return await srpH([salt, innerHash]);
}

async function calculateM(
    username: string, salt: bigint, A: bigint, B: bigint, K: Uint8Array
): Promise<Uint8Array> {
    const hNxG = await hNxorG();
    const hI = await sha512Bytes(new TextEncoder().encode(username));
    return sha512Bytes(hNxG, hI, bigIntToBytes(salt), bigIntToBytes(A), bigIntToBytes(B), K);
}

async function calculateHAMK(A: bigint, M: Uint8Array, K: Uint8Array): Promise<Uint8Array> {
    return sha512Bytes(bigIntToBytes(A), M, K);
}

// ---------------------------------------------------------------------------
// SRP6a client
// ---------------------------------------------------------------------------

class Srp6a {
    private username: string;
    private password: string;
    private a: bigint;
    private A: bigint;
    K: Uint8Array | null = null;
    M: Uint8Array | null = null;
    private H_AMK: Uint8Array | null = null;

    constructor(username: string, password: string) {
        this.username = username;
        this.password = password;

        const aBytes = crypto.getRandomValues(new Uint8Array(32));
        aBytes[0] |= 0x80;
        this.a = bytesToBigInt(aBytes);
        this.A = modPow(G, this.a, N);
    }

    getPublicKey(): Uint8Array {
        return bigIntToPaddedBytes(this.A, N_BYTES);
    }

    async processChallenge(saltBytes: Uint8Array, BBytes: Uint8Array): Promise<Uint8Array> {
        const s = bytesToBigInt(saltBytes);
        const B = bytesToBigInt(BBytes);

        if (B % N === 0n) throw new ProvisionerError('SRP: invalid B (zero mod N)');

        const nLen = bigIntToBytes(N).length;
        const k = await srpH([N, G], nLen);
        const u = await srpH([this.A, B], nLen);
        if (u === 0n) throw new ProvisionerError('SRP: invalid u (zero)');

        const x = await calculateX(s, this.username, this.password);
        const v = modPow(G, x, N);

        const kv = (k * v) % N;
        let diff = B - kv;
        if (diff < 0n) diff += N;
        const exp = this.a + u * x;
        const S = modPow(diff, exp, N);

        this.K = await sha512Bytes(bigIntToBytes(S));
        this.M = await calculateM(this.username, s, this.A, B, this.K);
        this.H_AMK = await calculateHAMK(this.A, this.M, this.K);

        return this.M;
    }

    verifySession(deviceProof: Uint8Array): boolean {
        if (!this.H_AMK) return false;
        if (this.H_AMK.length !== deviceProof.length) return false;
        for (let i = 0; i < this.H_AMK.length; i++) {
            if (this.H_AMK[i] !== deviceProof[i]) return false;
        }
        return true;
    }

    getSessionKeyBytes(): Uint8Array {
        if (!this.K) throw new ProvisionerError('Session key not computed');
        return this.K.slice(0, 32);
    }
}

// ---------------------------------------------------------------------------
// Security2 options
// ---------------------------------------------------------------------------

export interface Security2Options {
    /**
     * SRP6a username (must match the device firmware).
     * @default "wifiprov"
     */
    username?: string;

    /**
     * SRP6a password / proof-of-possession.
     */
    password: string;
}

// ---------------------------------------------------------------------------
// Security2 implementation
// ---------------------------------------------------------------------------

export default class Security2 extends Security {

    private username: string;
    private password: string;
    private srp: Srp6a | null = null;
    private sessionKey: CryptoKey | null = null;
    private nonce: Uint8Array | null = null;
    private staticNonce: boolean = false;

    constructor(options: Security2Options) {
        super();
        this.username = options.username ?? 'wifiprov';
        this.password = options.password;
    }

    // -- Session step 0: send client public key + username --------------------

    async setup0Request(): Promise<Uint8Array> {
        this.srp = new Srp6a(this.username, this.password);
        const A = this.srp.getPublicKey();

        const request = SessionData.create({
            secVer: SecSchemeVersion.SecScheme2,
            sec2: Sec2Payload.create({
                msg: Sec2MsgType.S2Session_Command0,
                sc0: S2SessionCmd0.create({
                    clientUsername: new TextEncoder().encode(this.username),
                    clientPubkey: A
                })
            })
        });

        return SessionData.encode(request).finish();
    }

    // -- Session step 0 response: receive device B + salt, derive key ---------

    async setup0Response(response: Uint8Array): Promise<void> {
        if (!this.srp) throw new ProvisionerError("Call setup0Request first.");

        const sessionData = SessionData.decode(response);
        const resp = sessionData.sec2?.sr0;
        if (!resp) throw new ProvisionerError("Missing sr0 in session response.");

        if (resp.status !== Status.Success) {
            throw new ProvisionerError(
                `Device rejected session command 0: ${Status[resp.status as number]}`
            );
        }

        await this.srp.processChallenge(resp.deviceSalt!, resp.devicePubkey!);

        const keyBytes = this.srp.getSessionKeyBytes();
        this.sessionKey = await crypto.subtle.importKey(
            'raw', keyBytes.buffer as ArrayBuffer, { name: 'AES-GCM' }, false, ['encrypt', 'decrypt']
        );
    }

    // -- Session step 1: send client proof M ----------------------------------

    setup1Request(): Uint8Array {
        if (!this.srp?.M) throw new ProvisionerError("SRP proof not computed.");

        const request = SessionData.create({
            secVer: SecSchemeVersion.SecScheme2,
            sec2: Sec2Payload.create({
                msg: Sec2MsgType.S2Session_Command1,
                sc1: S2SessionCmd1.create({
                    clientProof: this.srp.M
                })
            })
        });

        return SessionData.encode(request).finish();
    }

    // -- Session step 1 response: verify device proof, store nonce -------------

    setup1Response(response: Uint8Array): void {
        const sessionData = SessionData.decode(response);
        const resp = sessionData.sec2?.sr1;
        if (!resp) throw new ProvisionerError("Missing sr1 in session response.");

        if (resp.status !== Status.Success) {
            throw new ProvisionerError(
                `Device rejected session command 1: ${Status[resp.status as number]}`
            );
        }

        if (resp.deviceProof && resp.deviceProof.length > 0) {
            if (!this.srp!.verifySession(resp.deviceProof)) {
                throw new ProvisionerError("Device proof verification failed.");
            }
        }

        this.nonce = new Uint8Array(resp.deviceNonce!);

        // ESP-IDF v5.x uses a static 16-byte IV.
        // ESP-IDF v6.0+ uses a 12-byte IV with an incrementing counter.
        this.staticNonce = this.nonce.length !== 12;
    }

    // -- Encrypt / Decrypt (AES-256-GCM) -------------------------------------

    async encrypt(data: Uint8Array<ArrayBuffer>): Promise<Uint8Array> {
        if (!this.sessionKey || !this.nonce) {
            throw new ProvisionerError("Secure session not established.");
        }

        const cipherBuf = await crypto.subtle.encrypt(
            { name: 'AES-GCM', iv: this.nonce.buffer as ArrayBuffer },
            this.sessionKey,
            data
        );

        if (!this.staticNonce) this.incrementNonce();
        return new Uint8Array(cipherBuf);
    }

    async decrypt(data: Uint8Array<ArrayBuffer>): Promise<Uint8Array> {
        if (!this.sessionKey || !this.nonce) {
            throw new ProvisionerError("Secure session not established.");
        }

        const plainBuf = await crypto.subtle.decrypt(
            { name: 'AES-GCM', iv: this.nonce.buffer as ArrayBuffer },
            this.sessionKey,
            data
        );

        if (!this.staticNonce) this.incrementNonce();
        return new Uint8Array(plainBuf);
    }

    private incrementNonce(): void {
        const view = new DataView(
            this.nonce!.buffer, this.nonce!.byteOffset, this.nonce!.byteLength
        );
        const offset = this.nonce!.length - 4;
        let counter = view.getUint32(offset, false);
        view.setUint32(offset, counter + 1, false);
    }
}