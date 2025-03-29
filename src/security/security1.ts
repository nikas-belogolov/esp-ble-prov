import Security from "./security";

import { security1, session } from "../proto"
import { Counter, ModeOfOperation } from "aes-js";

import {ProvisionerError } from "../index"

const { SessionData, SecSchemeVersion } = session;

const {
    Sec1Payload,
    Sec1MsgType,
    SessionCmd0,
    SessionResp0,
    SessionCmd1,
    SessionResp1,
} = security1;

interface Security1Options {
    pop?: string;
}

export default class Security1 extends Security {
    
    private privateKey: CryptoKey | undefined;
    private publicKeyBuffer: Uint8Array = new Uint8Array(32);
    private devicePublicKeyBuffer: Uint8Array = new Uint8Array(32);

    private pop: Uint8Array | undefined;
    private cipher: ModeOfOperation.ModeOfOperationCTR | undefined;

    constructor(options?: Security1Options) {
        super();

        this.pop = options?.pop ? new TextEncoder().encode(options.pop) : undefined;
    }

    private async generateX25519Key() {
        const { privateKey, publicKey } = await crypto.subtle.generateKey(
            { name: "X25519" },
            true,
            ["deriveKey", "deriveBits"]
        ) as CryptoKeyPair;
    
        this.privateKey = privateKey;
        this.publicKeyBuffer = new Uint8Array(await window.crypto.subtle.exportKey("raw", publicKey))
    }

    private async deriveSharedKey(publicKey: CryptoKey) {
        if (!this.privateKey) throw new ProvisionerError("Generate X25519 key pair before deriving shared key.");

        const sharedKey = new Uint8Array(32);

        sharedKey.set(
            await crypto.subtle.deriveBits({ name: "X25519", public: publicKey }, this.privateKey, 256)
                                .then(v => new Uint8Array(v))
        )

        if (this.pop) {
            const popHashBuffer = 
                await crypto.subtle.digest("SHA-256", this.pop)
                                    .then(digest => new Uint8Array(digest));

            for (let i = 0; i < sharedKey.length; i++) {
                sharedKey[i] = sharedKey[i] ^ popHashBuffer[i];
            }
        }

        return sharedKey
    }

    async setup0Request() {
        await this.generateX25519Key();
        
        let request = SessionData.create({
            secVer: SecSchemeVersion.SecScheme1,
            sec1: Sec1Payload.create({
                msg: Sec1MsgType.Session_Command0,
                sc0: SessionCmd0.create({
                    clientPubkey: this.publicKeyBuffer
                })
            })
        })

        return SessionData.encode(request).finish()
    }

    async setup0Response(response: Uint8Array) {

        let sessionData = SessionData.decode(response);
        let { devicePubkey, deviceRandom} = sessionData.sec1?.sr0!

        let devicePublicKey = await crypto.subtle.importKey("raw", devicePubkey!, { name: "X25519" }, true, [])

        let sharedSecret = await this.deriveSharedKey(devicePublicKey);

        this.cipher = new ModeOfOperation.ctr(
            new Uint8Array(sharedSecret),
            new Counter(deviceRandom!)
        );

        this.devicePublicKeyBuffer = devicePubkey!;
    }

    setup1Request(): Uint8Array {
        if (!this.cipher) throw new ProvisionerError("Cipher not found.");

        let encryptedDevicePublicKey = this.cipher?.encrypt(this.devicePublicKeyBuffer)

        let sessionData = SessionData.create({
            secVer: SecSchemeVersion.SecScheme1,
            sec1: Sec1Payload.create({
                msg: Sec1MsgType.Session_Command1,
                sc1: SessionCmd1.create({
                    clientVerifyData: encryptedDevicePublicKey
                })
            })
        })

        return SessionData.encode(sessionData).finish()
    }

    setup1Response(response: Uint8Array): void {
        if (!this.cipher) throw new ProvisionerError("Cipher is not initialized.");

        let sessionData = SessionData.decode(response);
        let deviceVerifyDataDecrypted = this.cipher?.decrypt(sessionData.sec1?.sr1?.deviceVerifyData!);

        if (indexedDB.cmp(deviceVerifyDataDecrypted, this.publicKeyBuffer) != 0) {
            throw new ProvisionerError("Failed to establish session.");
        }
    }

    encrypt(data: Uint8Array): Uint8Array {
        if (!this.cipher) throw new ProvisionerError("Cipher is not initialized.");
        return this.cipher.encrypt(data);
    }

    decrypt(data: Uint8Array): Uint8Array {
        if (!this.cipher) throw new ProvisionerError("Cipher is not initialized.");
        return this.cipher.decrypt(data);
    }
}