import { ProvisionerError } from "..";
import { ctrl, constants } from "../proto"

const { Status } = constants;

const {
    WiFiCtrlPayload,
    WiFiCtrlMsgType,
    CmdCtrlReprov,
    RespCtrlReprov,
    CmdCtrlReset,
    RespCtrlReset
} = ctrl;

export function ctrlResetRequest() {
    let message = WiFiCtrlPayload.create({
        msg: WiFiCtrlMsgType.TypeCmdCtrlReset,
        cmdCtrlReset: CmdCtrlReset.create()
    })

    return WiFiCtrlPayload.encode(message).finish()
}

export function ctrlResetResponse(response: Uint8Array) {
    let resp = WiFiCtrlPayload.decode(response)
            
    if (resp.status != Status.Success)
        throw new ProvisionerError(Status[resp.status])
}

export function ctrlReprovRequest() {
    let message = WiFiCtrlPayload.create({
        msg: WiFiCtrlMsgType.TypeCmdCtrlReprov,
        cmdCtrlReprov: CmdCtrlReprov.create()
    })

    return WiFiCtrlPayload.encode(message).finish()
}

export function ctrlReprovResponse(response: Uint8Array) {
    let resp = WiFiCtrlPayload.decode(response)
            
    if (resp.status != Status.Success)
        throw new ProvisionerError(Status[resp.status])
}