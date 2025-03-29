
import { ProvisionerError } from "..";
import { scan, constants } from "../proto"

const { Status } = constants;

const {
    WiFiScanPayload, WiFiScanMsgType,
    CmdScanStart, RespScanStart,
    CmdScanStatus, RespScanStatus,
    CmdScanResult, RespScanResult,
    WiFiScanResult,
} = scan;

export type ICmdScanStart = scan.ICmdScanStart;
export type ICmdScanResult = scan.ICmdScanResult;
export type IWiFiScanResult = scan.IWiFiScanResult;

export function scanStartRequest(options: ICmdScanStart) {
    let message = WiFiScanPayload.create({
        msg: WiFiScanMsgType.TypeCmdScanStart,
        status: Status.Success,
        cmdScanStart: CmdScanStart.create({
            blocking: options.blocking,
            passive: options.passive,
            groupChannels: options.groupChannels,
            periodMs: options.periodMs
        }) 
    })

    return WiFiScanPayload.encode(message).finish()
}

export function scanStartResponse(response: Uint8Array) {
    let resp = WiFiScanPayload.decode(response)
    
    if (resp.status != Status.Success)
        throw new ProvisionerError(Status[resp.status])
}

export function scanStatusRequest() {
    let message = WiFiScanPayload.create({
        msg: WiFiScanMsgType.TypeCmdScanStatus,
        status: Status.Success,
        cmdScanStatus: CmdScanStatus.create()
    })

    return WiFiScanPayload.encode(message).finish()
}

export function scanStatusResponse(response: Uint8Array) {
    let resp = WiFiScanPayload.decode(response)

    if (resp.status != Status.Success)
        throw new ProvisionerError(Status[resp.status])

    return resp?.respScanStatus?.resultCount || 0;
}

export function scanResultRequest(options: ICmdScanResult) {
    let message = WiFiScanPayload.create({
        msg: WiFiScanMsgType.TypeCmdScanResult,
        status: Status.Success,
        cmdScanResult: CmdScanResult.create({
            startIndex: options.startIndex,
            count: options.count
        })
    })

    return WiFiScanPayload.encode(message).finish()
}

export function scanResultResponse(response: Uint8Array) {
    let resp = WiFiScanPayload.decode(response)
        
    if (resp.status != Status.Success)
        throw new ProvisionerError(Status[resp.status])

    return Object.values(resp?.respScanResult?.entries || {}) as IWiFiScanResult[];
}