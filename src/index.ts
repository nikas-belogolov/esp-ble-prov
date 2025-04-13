
import { constants, config, scan } from "./proto"

import Security from "./security/security"
import Security0 from "./security/security0"
import Security1 from "./security/security1"
import Security2 from "./security/security2"

import type {
    ICmdScanResult,
    ICmdScanStart,
} from "./prov/scan"

import * as ctrl from "./prov/ctrl"
// import * as scan from "./prov/scan"

import {
    scanResultRequest,
    scanResultResponse,
    scanStartRequest,
    scanStartResponse,
    scanStatusRequest,
    scanStatusResponse
} from "./prov/scan"

import {
    configApplyConfigRequest,
    configApplyConfigResponse,
    configGetStatusRequest,
    configGetStatusResponse,
    configSetConfigRequest,
    configSetConfigResponse,
    ICmdSetConfig
} from "./prov/config"


const { WifiStationState } = constants

export { Security0, Security1, Security2, WifiStationState };

export interface IWiFiScanResult {

    /** WiFiScanResult ssid */
    ssid?: (Uint8Array|null);

    /** WiFiScanResult channel */
    channel?: (number|null);

    /** WiFiScanResult rssi */
    rssi?: (number|null);

    /** WiFiScanResult bssid */
    bssid?: (Uint8Array|null);

    /** WiFiScanResult auth */
    auth?: (constants.WifiAuthMode|null);
}

export class ProvisionerError extends Error {
    constructor(message: string) {
        super(message);
        this.name = "ProvisionerError";
    }
}

interface ESPProvisionerOptions {
    deviceNamePrefix?: string;
    serviceUUID: string;
    security?: Security;
}

export default class ESPProvisioner  {

    device: BluetoothDevice | null = null;
    server: BluetoothRemoteGATTServer | null = null; 
    service: BluetoothRemoteGATTService | null = null;

    endpoints: Map<string, BluetoothRemoteGATTCharacteristic> = new Map();

    private _isConnected: boolean = false;

    deviceNamePrefix: string;
    serviceUUID: string;
    security: Security;

    constructor(options: ESPProvisionerOptions)
    {
        this.serviceUUID = options.serviceUUID;
        this.deviceNamePrefix = options.deviceNamePrefix || "PROV_";
        this.security = options.security || new Security0();
    }

    /**
     * Checks if the provisioner is currently connected to a device
     */
    get isConnected(): boolean {
        return this._isConnected && !!this.device?.gatt?.connected;
    }

    /**
     * Gets a characteristic by endpoint name
     * @param ep_name Endpoint name
     * @returns Bluetooth characteristic
     */
    getCharacteristic(ep_name: string): BluetoothRemoteGATTCharacteristic {
        const char = this.endpoints.get(ep_name);
        if (!char) throw new ProvisionerError(`Characteristic "${ep_name}" not found.`);
        return char;
    }

    /**
     * Writes a value to a characteristic with timeout and retry logic
     * @param ep_name Endpoint name
     * @param data Data to write
     */
    async writeValue(ep_name: string, data: Uint8Array) {
        return this.getCharacteristic(ep_name).writeValue(data);
    }

    /**
     * Reads a value from a characteristic
     * @param ep_name Endpoint name
     * @returns Read data
     */
    async readValue(ep_name: string) {
        const char = this.getCharacteristic(ep_name);
        const responseBuffer = await char.readValue();
        return new Uint8Array(responseBuffer.buffer);
    }

    /**
     * Discovers and maps all device characteristics
     */
    private async discoverCharacteristics() {
        const characteristics = await this.service?.getCharacteristics();

        if (!characteristics) throw new ProvisionerError("Couldn't get device characteristics.");

        const textDecoder = new TextDecoder();
    
        for (const char of characteristics) {
            try {
                const descriptor = await char.getDescriptor(0x2901);
                const name = await descriptor.readValue().then(v => textDecoder.decode(v));
                this.endpoints.set(name, char);
            } catch (error) {
                console.warn(`Failed to get descriptor for characteristic ${char.uuid}`, error);
            }
        }

        if (this.endpoints.size === 0) {
            throw new ProvisionerError("No valid endpoints discovered on device");
        }
    }

    /**
     * Connects to an ESP device
     * @param options Connection options
     * @returns Connected device
     */
    async connect(options?: {
        filters: BluetoothLEScanFilter[]
    }) {
        if (this.isConnected) {
            console.log("Already connected to device:", this.device?.name);
            return this.device!;
        }

        try {
            const filters = options?.filters || [{ namePrefix: this.deviceNamePrefix  }]

            this.device = await navigator.bluetooth.requestDevice({
                filters,
                optionalServices: [this.serviceUUID]
            });

            this.device.addEventListener( 'gattserverdisconnected', this.disconnect.bind(this) );

            this.server = await this.device.gatt?.connect() || null;
            this.service = await this.server?.getPrimaryService(this.serviceUUID) || null;
            
            await this.discoverCharacteristics();

            this._isConnected = true;
            console.log('Connected to device:', this.device.name);

            return this.device;

        } catch (error) {
            await this.disconnect();
            
            throw error instanceof Error
                ? new ProvisionerError(`Connection failed: ${error.message}`)
                : new ProvisionerError("Connection failed with unknown error");
        }
    }

    async disconnect() {
        if (this.device && this.device.gatt?.connected) {
            try {
                this.device.gatt.disconnect();
            } catch (error) {
                console.warn("Error during disconnect:", error);
            }
        }

        this._isConnected = false;
        this.device = null;
        this.server = null;
        this.service = null;
        this.endpoints.clear();

        console.log('Disconnected from device');
    }

    /**
     * Checks if the provisioner is connected and throws an error if not
     */
    private ensureConnected(): void {
        if (!this.isConnected || !this.service) {
            throw new ProvisionerError('Not connected to device. Please connect first.');
        }
    }

    /* SESSION */
    async establishSession() {
        this.ensureConnected();

        try {
            const sessionCmd0 = await this.security.setup0Request()
            await this.writeValue("prov-session", sessionCmd0);

            const sessionResp0 = await this.readValue("prov-session");
            await this.security.setup0Response(sessionResp0)
            
            // Security1 or Security2, continue with session establishment
            if (this.security instanceof Security1 || this.security instanceof Security2) {

                const sessionCmd1 = await this.security.setup1Request();
                await this.writeValue("prov-session", sessionCmd1);

                const sessionResp1 = await this.readValue("prov-session");
                this.security.setup1Response(sessionResp1);
            }

            console.log("Successfully established session.");
        } catch (error) {
            console.error(error);
            throw error instanceof Error
                ? new ProvisionerError(`Failed to establish session: ${error.message}`)
                : new ProvisionerError("Failed to establish session with unknown error");
        }
    }

    /* CONTROL */
    /**
     * Resets the provisioning state of the device
     */
    async ctrlReset() {
        this.ensureConnected();

        try {
            const message = ctrl.ctrlResetRequest();
            const encryptedMessage = this.security.encrypt(message);
            await this.writeValue("prov-ctrl", encryptedMessage);

            const encryptedResponse = await this.readValue("prov-ctrl");
            const response = this.security.decrypt(encryptedResponse);
            ctrl.ctrlResetResponse(response);

        } catch (error) {
            throw error instanceof Error
                ? new ProvisionerError(`Failed to reset provisioning state: ${error.message}`)
                : new ProvisionerError("Failed to reset provisioning state with unknown error");
        }
    }

    /**
     * Re-provisions the device
     */
    async ctrlReprov() {
        this.ensureConnected();

        try {

            const message = ctrl.ctrlReprovRequest();
            const encryptedMessage = this.security.encrypt(message);
            await this.writeValue("prov-ctrl", encryptedMessage);

            const encryptedResponse = await this.readValue("prov-ctrl");
            const response = this.security.decrypt(encryptedResponse);
            ctrl.ctrlReprovResponse(response);
            
        } catch (error) {
            throw error instanceof Error
                ? new ProvisionerError(`Failed to reprovision: ${error.message}`)
                : new ProvisionerError("Failed to reprovision with unknown error");
        }
        
    }

    /* WIFI SCAN */
    /**
     * Starts a Wi-Fi scan on the device
     * @param options Scan options
     */
    async startScan(options: ICmdScanStart) {
        this.ensureConnected();

        try {
            const message = scanStartRequest(options)
            const encryptedMessage = this.security.encrypt(message);
            await this.writeValue("prov-scan", encryptedMessage);

            const encryptedResponse = await this.readValue("prov-scan");
            const response = this.security.decrypt(encryptedResponse);
            scanStartResponse(response);

            console.log("Starting WiFi scan...");

        } catch (error) {
            throw error instanceof Error
                ? new ProvisionerError(`Failed to start scan: ${error.message}`)
                : new ProvisionerError("Failed to start scan with unknown error");
        }
    }
    
    /**
     * Gets the current scan status
     * @returns Number of networks found
     */
    async getScanStatus(): Promise<number> {
        this.ensureConnected();

        try {
            const message = scanStatusRequest();
            const encryptedMessage = this.security?.encrypt(message);
            await this.writeValue("prov-scan", encryptedMessage);

            const encryptedResponse = await this.readValue("prov-scan");
            const response = this.security?.decrypt(encryptedResponse);
            return scanStatusResponse(response); 

        } catch (error) {
            throw error instanceof Error
                ? new ProvisionerError(`Failed to get scan status: ${error.message}`)
                : new ProvisionerError("Failed to get scan status with unknown error");
        }
    }

    /**
     * Gets scan results from the device
     * @param options Result options
     * @returns Array of Wi-Fi networks
     */
    async getScanResults(options: ICmdScanResult): Promise<IWiFiScanResult[]> {
        this.ensureConnected();

        try {
            const message = scanResultRequest(options)
            const encryptedMessage = this.security?.encrypt(message);
            await this.writeValue("prov-scan", encryptedMessage);

            const encryptedResponse = await this.readValue("prov-scan");
            const response = this.security?.decrypt(encryptedResponse);
            return scanResultResponse(response);

        } catch (error) {
            throw error instanceof Error
                ? new ProvisionerError(`Failed to get scan results: ${error.message}`)
                : new ProvisionerError("Failed to get scan results with unknown error");
        }
    }

    /**
     * Performs a complete Wi-Fi scan operation
     * @param options Scan options
     * @param timeout Maximum time to wait for scan completion (ms)
     * @returns Array of Wi-Fi networks
     */
    async scan(
        options: ICmdScanStart = {
            blocking: true,
            passive: false,
            groupChannels: 0,
            periodMs: 120
        }
    ): Promise<IWiFiScanResult[]> {
        this.ensureConnected();
       
        try {
            await this.startScan(options);
            
            let count;

            if (!options.blocking) {
                throw new ProvisionerError("Non-blocking scan is not implemented yet.");
            } else {
                count = await this.getScanStatus();
            }

            const results = await this.getScanResults({ count: count, startIndex: 0 });
            return results;
        } catch (error) {
            throw error instanceof Error
                ? new ProvisionerError(`Failed to scan for WiFi networks: ${error.message}`)
                : new ProvisionerError("Failed to scan for WiFi networks with unknown error");
        }
    }

    /* WIFI CONFIG */
    /**
     * Gets the current Wi-Fi status
     * @returns Wi-Fi status
     */
    async getWiFiStatus() {
        this.ensureConnected();
        
        try {
            console.log("Getting WiFi status.");

            const message = configGetStatusRequest();
            const encryptedMessage = this.security.encrypt(message);
            await this.writeValue("prov-config", encryptedMessage);

            const encryptedResponse = await this.readValue("prov-config");
            const response = this.security.decrypt(encryptedResponse);
            return configGetStatusResponse(response);

        } catch (error) {
            throw error instanceof Error
                ? new ProvisionerError(`Failed to get WiFi STA status: ${error.message}`)
                : new ProvisionerError("Failed to get WiFi STA status with unknown error");
        }
    }

    /**
     * Sets Wi-Fi configuration on the device
     * @param options Wi-Fi configuration
     */
    async setWiFiConfig(
        options: ICmdSetConfig
    ) {
        this.ensureConnected();

        try {
            console.log("Setting WiFi config.");

            const message = configSetConfigRequest(options);
            const encryptedMessage = this.security.encrypt(message);
            await this.writeValue("prov-config", encryptedMessage);

            const encryptedResponse = await this.readValue("prov-config");
            const response = this.security.decrypt(encryptedResponse);
            configSetConfigResponse(response);
        
        } catch (error) {
            throw error instanceof Error
                ? new ProvisionerError(`Failed to set WiFi credentials: ${error.message}`)
                : new ProvisionerError("Failed to set WiFi credentials with unknown error");
        }
    }

    /**
     * Applies the Wi-Fi configuration
     */
    async applyWiFiConfig() {
        this.ensureConnected();

        try {
            console.log("Applying WiFi config.");

            const message = configApplyConfigRequest();
            const encryptedMessage = this.security.encrypt(message);
            await this.writeValue("prov-config", encryptedMessage);

            const encryptedResponse = await this.readValue("prov-config");
            const response = this.security.decrypt(encryptedResponse);
            configApplyConfigResponse(response);

        } catch (error) {
            throw error instanceof Error
                ? new ProvisionerError(`Failed to apply WiFi credentials: ${error.message}`)
                : new ProvisionerError("Failed to apply WiFi credentials with unknown error");
        }
    }

    /**
     * Waits for Wi-Fi connection status to change
     * @param timeout Maximum time to wait (ms)
     * @returns Wi-Fi status
     */
    async waitForWiFiStatus(timeout: number = 60000) {
        this.ensureConnected();

        const sleep = async (ms: number) => new Promise(resolve => setTimeout(resolve, ms));
        const startTime = Date.now();
        let status;

        try {
            do {
                status = await this.getWiFiStatus();

                if (status.staState === WifiStationState.Connected) {
                    break;
                }

                if (status.staState === WifiStationState.ConnectionFailed || 
                    (status.attemptFailed && status.attemptFailed.attemptsRemaining === 0)) {
                     throw new ProvisionerError("WiFi connection failed: No attempts remaining");
                }
                 
                if (Date.now() - startTime > timeout) {
                    throw new ProvisionerError(`WiFi connection timed out after ${timeout}ms`);
                }

                await sleep(1000);

            } while (this.isConnected)

	    if (!this.isConnected) {    
            throw new ProvisionerError("Device disconnected while waiting for WiFi status");
	    }
	} catch (error) {
            if (error instanceof ProvisionerError) {
                throw error;
            }
            
            throw error instanceof Error
                ? new ProvisionerError(`Error while waiting for WiFi status: ${error.message}`)
                : new ProvisionerError("Error while waiting for WiFi status");
        }
    }

    /**
     * Complete process to send Wi-Fi credentials and connect
     * @param config Wi-Fi configuration
     * @param timeout Maximum time to wait for connection (ms)
     * @returns Wi-Fi status
     */
    async sendCredentials(
        { ssid, passphrase, bssid, channel }: ICmdSetConfig,
        timeout: number = 60_000
    ) {
        this.ensureConnected();

        try {

            await this.setWiFiConfig({ ssid, passphrase, bssid, channel });
            await this.applyWiFiConfig();
            await this.waitForWiFiStatus(timeout);

        } catch (error) {
            throw error instanceof Error
                ? new ProvisionerError(`Error while waiting for WiFi status: ${error.message}`)
                : new ProvisionerError("Error while waiting for WiFi status");
        }
    }

    /* CUSTOM ENDPOINTS */
    /**
     * Writes a value to a custom endpoint
     * @param ep_name Endpoint name
     * @param value Value to write
     */
    async writeValueToEndpoint(ep_name: string, value: Uint8Array) {
        this.ensureConnected();

        try {
            value = this.security?.encrypt(value);
            await this.writeValue(ep_name, value);
        } catch (error) {
            throw error instanceof Error
                ? new ProvisionerError(`Failed to write to endpoint ${ep_name}: ${error.message}`)
                : new ProvisionerError(`Failed to write to endpoint ${ep_name}`);
        }
    }

    /**
     * Reads a value from a custom endpoint
     * @param ep_name Endpoint name
     * @returns Decrypted value
     */
    async readValueFromEndpoint(ep_name: string) {
        this.ensureConnected();

        try {
            let value = await this.readValue(ep_name);
            return this.security.decrypt(value);
        } catch (error) {
            throw error instanceof Error
                ? new ProvisionerError(`Failed to write to endpoint ${ep_name}: ${error.message}`)
                : new ProvisionerError(`Failed to write to endpoint ${ep_name}`);
        }
    }
}
