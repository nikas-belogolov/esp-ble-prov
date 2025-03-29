import { ModeOfOperation } from "aes-js";

export default abstract class Security {

    constructor() {

    }

    abstract setup0Request(): Promise<Uint8Array> | Uint8Array;
    abstract setup0Response(response: Uint8Array): void;

    setup1Request?(): Uint8Array;
    setup1Response?(response: Uint8Array): void;

    abstract encrypt(buffer: Uint8Array): Uint8Array;
    abstract decrypt(buffer: Uint8Array): Uint8Array;
}