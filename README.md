# esp-ble-prov

![NPM version](https://img.shields.io/npm/v/esp-ble-prov.svg?style=flat)

> An ESP32 WiFi provisioning library for the web, using WebBluetoothAPI.

## Features

- All provisioning schemes: Security0, Security1, Security2
- Networks scanning
- Endpoints discovery
- Endpoints read/write operations

## Installation

```bash
$ npm install esp-ble-prov
```

```typescript
const textDecoder = new TextDecoder();
const textEncoder = new TextEncoder();

/* No security (No encryption). */
const security0 = new Security0() 

/* Curve25519-based key exchange, shared key derivation and AES256-CTR mode encryption of the data */
// Authorized - Proof of Possession (PoP) string used to authorize session and derive shared key.
const security1 = new Security1({ pop: 'test' }) 
// Unauthorized - No Proof of Possession (PoP) string used to authorize session and derive shared key.
const security1 = new Security1() 

/* SRP6a-based shared key derivation and AES256-GCM mode encryption of the data. */
const security2 = new Security2({ username: 'test', password: 'test' })

const provisioner = new ESPProvisioner({
  deviceNamePrefix: 'PROV_',
  serviceUUID: 'YOUR_SERVICE_UUID',
  security: security2, // recommended security scheme
});

// Scan for available devices and connect to one
await provisioner.connect();

// Establish Security0 session
await provisioner.establishSession();

// Scan for available WiFi networks
const networks = await provisioner.scan();

// Read value from custom endpoint
let deviceId = await provisioner
  .readValueFromEndpoint('device-id')
  .then((value) => textDecoder.decode(value));

// Write value to custom endpoint
await provisioner.writeValueToEndpoint('device-id', textEncoder.encode('test'));

// Connect to WiFi
await provisioner
  .sendCredentials({
    ssid,
    passphrase: textEncoder.encode(passphrase),
    bssid,
    channel,
  })
  .then(() => {
    console.log('Successfully connected to WiFi!');
  })
  .catch(() => {
    console.log('Failed to connect to WiFi');
  });

// Reset provisiong state
await provisioner.ctrlReset();

// Reprov
await provisioner.ctrlReprov();
```

## Contributing

Feel free to contribute to the project.
Currently not implemented features:

- Testing (Hardware-in-the-Loop, unit tests)

## In the Wild

- [LAN Party Seating](https://github.com/otakulan/lanparty-seating) - Real-time web application for managing gaming station reservations at LAN party events.
