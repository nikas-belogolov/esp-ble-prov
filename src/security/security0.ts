import Security from "./security";

import { ProvisionerError } from "../index"

import { security0, session, constants } from "../proto"

const { Status } = constants;
const { SessionData, SecSchemeVersion } = session;

const {
    Sec0Payload,
    Sec0MsgType,
    S0SessionCmd,
    S0SessionResp,
} = security0;

export default class Security0 extends Security {

    constructor( ) {
        super();
    }

    setup0Request() {
        let sessionData = SessionData.create({
            secVer: SecSchemeVersion.SecScheme0,
            sec0: Sec0Payload.create({
                msg: Sec0MsgType.S0_Session_Command,
            })
        })

        return SessionData.encode(sessionData).finish()
    }

    setup0Response(response: Uint8Array) {
        let sessionData = SessionData.decode(response)
        let status = sessionData.sec0?.sr?.status;

        if (status != Status.Success)
            throw new ProvisionerError(Status[status || Status["InvalidProto"]])
    }

    encrypt(data: Uint8Array) {
        return data;
    }

    decrypt(data: Uint8Array): Uint8Array {
        return data;
    }

}