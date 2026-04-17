export default abstract class Security {
  constructor() {}

  abstract setup0Request(): Promise<Uint8Array> | Uint8Array;
  abstract setup0Response(response: Uint8Array): Promise<void> | void;

  setup1Request?(): Promise<Uint8Array> | Uint8Array;
  setup1Response?(response: Uint8Array): Promise<void> | void;

  abstract encrypt(buffer: Uint8Array): Promise<Uint8Array> | Uint8Array;
  abstract decrypt(buffer: Uint8Array): Promise<Uint8Array> | Uint8Array;
}
