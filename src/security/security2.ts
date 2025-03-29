import { ProvisionerError } from "..";
import Security from "./security";

import { security2, session } from "../proto"

const { SessionData, SecSchemeVersion } = session;

const {
    Sec2Payload,
    Sec2MsgType,
    S2SessionCmd0,
    S2SessionResp0,
    S2SessionCmd1,
    S2SessionResp1
} = security2;

export default class Security2 extends Security {
    

    constructor() {
        super();
        throw new ProvisionerError("Security2 not implemented.");
    }

    setup0Request(): Promise<Uint8Array> | Uint8Array {
        throw new ProvisionerError("Security2 not implemented.");
    }

    setup0Response(response: Uint8Array): void {
        throw new ProvisionerError("Security2 not implemented.");
    }

    setup1Request(): Uint8Array {
        throw new ProvisionerError("Security2 not implemented.");
    }

    setup1Response(response: Uint8Array): void {
        throw new ProvisionerError("Security2 not implemented.");
    }

    encrypt(buffer: Uint8Array): Uint8Array {
        throw new ProvisionerError("Security2 not implemented.");
    }

    decrypt(buffer: Uint8Array): Uint8Array {
        throw new ProvisionerError("Security2 not implemented.");
    }
}