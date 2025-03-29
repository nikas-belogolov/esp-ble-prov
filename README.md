# esp-ble-prov

![NPM version](https://img.shields.io/npm/v/esp-ble-prov.svg?style=flat)

> An ESP32 WiFi provisioning library for the web, using WebBluetoothAPI.

## Features

- Security0 and Security1 sessions
- Automatic discovery of all BLE endpoints
- Network Discovery
- WiFi provisioning
- ESP provisioning reset/reprov commands

## Installation

```bash
$ npm install esp-ble-prov
```

```typescript
const textDecoder = new TextDecoder();
const textEncoder = new TextEncoder();

const provisioner = new ESPProvisioner({
    deviceNamePrefix: "PROV_",
    serviceUUID: "YOUR_SERVICE_UUID",
    security: new Security1({ pop: "test" })
})

// Scan for available devices and connect to one
await provisioner.connect();

// Establish Security0 session
await provisioner.establishSession();

// Scan for available WiFi networks
const networks = await provisioner.scan();

// Read value from custom endpoint
let deviceId = await provisioner.readValueFromEndpoint("device-id")
                                .then(value => textDecoder.decode(value));

// Write value to custom endpoint
await provisioner.writeValueToEndpoint("device-id", textEncoder.encode("test"));

// Connect to WiFi
const status = await provisioner.sendCredentials({
    ssid,
    passphrase: textEncoder.encode(passphrase),
    bssid,
    channel
})

// Reset provisiong state
await provisioner.ctrlReset();

// Reprov
await provisioner.ctrlReprov();
```

## Contributing

Feel free to contribute to the project.
Currently not implemented features:

- Security2 Session
