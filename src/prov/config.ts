import { ProvisionerError } from '../types';
import { config, constants } from '../proto';

const { Status } = constants;

const {
  WiFiConfigPayload,
  WiFiConfigMsgType,
  CmdGetStatus,
  CmdSetConfig,
  CmdApplyConfig,
} = config;

export type ICmdSetConfig = config.ICmdSetConfig;

export function configGetStatusRequest() {
  const message = WiFiConfigPayload.create({
    msg: WiFiConfigMsgType.TypeCmdGetStatus,
    cmdGetStatus: CmdGetStatus.create(),
  });

  return WiFiConfigPayload.encode(message).finish();
}

export function configGetStatusResponse(response: Uint8Array) {
  const resp = WiFiConfigPayload.decode(response).respGetStatus!;

  if (resp.status != Status.Success)
    throw new ProvisionerError(Status[resp.status!]);

  return resp;
}

export function configSetConfigRequest(options: ICmdSetConfig) {
  const message = WiFiConfigPayload.create({
    msg: WiFiConfigMsgType.TypeCmdSetConfig,
    cmdSetConfig: CmdSetConfig.create({
      ssid: options.ssid,
      passphrase: options.passphrase,
      bssid: options.bssid,
      channel: options.channel,
    }),
  });

  return WiFiConfigPayload.encode(message).finish();
}

export function configSetConfigResponse(response: Uint8Array) {
  const resp = WiFiConfigPayload.decode(response).respSetConfig!;

  if (resp.status != Status.Success)
    throw new ProvisionerError(Status[resp.status!]);
}

export function configApplyConfigRequest() {
  const message = WiFiConfigPayload.create({
    msg: WiFiConfigMsgType.TypeCmdApplyConfig,
    cmdApplyConfig: CmdApplyConfig.create(),
  });

  return WiFiConfigPayload.encode(message).finish();
}

export function configApplyConfigResponse(response: Uint8Array) {
  const resp = WiFiConfigPayload.decode(response).respApplyConfig!;

  if (resp.status != Status.Success)
    throw new ProvisionerError(Status[resp.status!]);
}
