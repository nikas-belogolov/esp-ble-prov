import type Security from './security/security';

export class ProvisionerError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'ProvisionerError';
  }
}

export interface ESPProvisionerOptions {
  deviceNamePrefix?: string;
  serviceUUID: string;
  security?: Security;
}
