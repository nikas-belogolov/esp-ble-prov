import * as $protobuf from "protobufjs";
import Long = require("long");
/** Namespace constants. */
export namespace constants {

    /** Status enum. */
    enum Status {
        Success = 0,
        InvalidSecScheme = 1,
        InvalidProto = 2,
        TooManySessions = 3,
        InvalidArgument = 4,
        InternalError = 5,
        CryptoError = 6,
        InvalidSession = 7
    }

    /** WifiStationState enum. */
    enum WifiStationState {
        Connected = 0,
        Connecting = 1,
        Disconnected = 2,
        ConnectionFailed = 3
    }

    /** WifiConnectFailedReason enum. */
    enum WifiConnectFailedReason {
        AuthError = 0,
        NetworkNotFound = 1
    }

    /** Properties of a WifiAttemptFailed. */
    interface IWifiAttemptFailed {

        /** WifiAttemptFailed attemptsRemaining */
        attemptsRemaining?: (number|null);
    }

    /** Represents a WifiAttemptFailed. */
    class WifiAttemptFailed implements IWifiAttemptFailed {

        /**
         * Constructs a new WifiAttemptFailed.
         * @param [properties] Properties to set
         */
        constructor(properties?: constants.IWifiAttemptFailed);

        /** WifiAttemptFailed attemptsRemaining. */
        public attemptsRemaining: number;

        /**
         * Creates a new WifiAttemptFailed instance using the specified properties.
         * @param [properties] Properties to set
         * @returns WifiAttemptFailed instance
         */
        public static create(properties?: constants.IWifiAttemptFailed): constants.WifiAttemptFailed;

        /**
         * Encodes the specified WifiAttemptFailed message. Does not implicitly {@link constants.WifiAttemptFailed.verify|verify} messages.
         * @param message WifiAttemptFailed message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: constants.IWifiAttemptFailed, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified WifiAttemptFailed message, length delimited. Does not implicitly {@link constants.WifiAttemptFailed.verify|verify} messages.
         * @param message WifiAttemptFailed message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: constants.IWifiAttemptFailed, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a WifiAttemptFailed message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns WifiAttemptFailed
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): constants.WifiAttemptFailed;

        /**
         * Decodes a WifiAttemptFailed message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns WifiAttemptFailed
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): constants.WifiAttemptFailed;

        /**
         * Verifies a WifiAttemptFailed message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a WifiAttemptFailed message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns WifiAttemptFailed
         */
        public static fromObject(object: { [k: string]: any }): constants.WifiAttemptFailed;

        /**
         * Creates a plain object from a WifiAttemptFailed message. Also converts values to other types if specified.
         * @param message WifiAttemptFailed
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: constants.WifiAttemptFailed, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this WifiAttemptFailed to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for WifiAttemptFailed
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** WifiAuthMode enum. */
    enum WifiAuthMode {
        Open = 0,
        WEP = 1,
        WPA_PSK = 2,
        WPA2_PSK = 3,
        WPA_WPA2_PSK = 4,
        WPA2_ENTERPRISE = 5,
        WPA3_PSK = 6,
        WPA2_WPA3_PSK = 7
    }

    /** Properties of a WifiConnectedState. */
    interface IWifiConnectedState {

        /** WifiConnectedState ip4Addr */
        ip4Addr?: (string|null);

        /** WifiConnectedState authMode */
        authMode?: (constants.WifiAuthMode|null);

        /** WifiConnectedState ssid */
        ssid?: (Uint8Array|null);

        /** WifiConnectedState bssid */
        bssid?: (Uint8Array|null);

        /** WifiConnectedState channel */
        channel?: (number|null);
    }

    /** Represents a WifiConnectedState. */
    class WifiConnectedState implements IWifiConnectedState {

        /**
         * Constructs a new WifiConnectedState.
         * @param [properties] Properties to set
         */
        constructor(properties?: constants.IWifiConnectedState);

        /** WifiConnectedState ip4Addr. */
        public ip4Addr: string;

        /** WifiConnectedState authMode. */
        public authMode: constants.WifiAuthMode;

        /** WifiConnectedState ssid. */
        public ssid: Uint8Array;

        /** WifiConnectedState bssid. */
        public bssid: Uint8Array;

        /** WifiConnectedState channel. */
        public channel: number;

        /**
         * Creates a new WifiConnectedState instance using the specified properties.
         * @param [properties] Properties to set
         * @returns WifiConnectedState instance
         */
        public static create(properties?: constants.IWifiConnectedState): constants.WifiConnectedState;

        /**
         * Encodes the specified WifiConnectedState message. Does not implicitly {@link constants.WifiConnectedState.verify|verify} messages.
         * @param message WifiConnectedState message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: constants.IWifiConnectedState, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified WifiConnectedState message, length delimited. Does not implicitly {@link constants.WifiConnectedState.verify|verify} messages.
         * @param message WifiConnectedState message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: constants.IWifiConnectedState, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a WifiConnectedState message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns WifiConnectedState
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): constants.WifiConnectedState;

        /**
         * Decodes a WifiConnectedState message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns WifiConnectedState
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): constants.WifiConnectedState;

        /**
         * Verifies a WifiConnectedState message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a WifiConnectedState message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns WifiConnectedState
         */
        public static fromObject(object: { [k: string]: any }): constants.WifiConnectedState;

        /**
         * Creates a plain object from a WifiConnectedState message. Also converts values to other types if specified.
         * @param message WifiConnectedState
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: constants.WifiConnectedState, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this WifiConnectedState to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for WifiConnectedState
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }
}

/** Namespace security0. */
export namespace security0 {

    /** Properties of a S0SessionCmd. */
    interface IS0SessionCmd {
    }

    /** Represents a S0SessionCmd. */
    class S0SessionCmd implements IS0SessionCmd {

        /**
         * Constructs a new S0SessionCmd.
         * @param [properties] Properties to set
         */
        constructor(properties?: security0.IS0SessionCmd);

        /**
         * Creates a new S0SessionCmd instance using the specified properties.
         * @param [properties] Properties to set
         * @returns S0SessionCmd instance
         */
        public static create(properties?: security0.IS0SessionCmd): security0.S0SessionCmd;

        /**
         * Encodes the specified S0SessionCmd message. Does not implicitly {@link security0.S0SessionCmd.verify|verify} messages.
         * @param message S0SessionCmd message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: security0.IS0SessionCmd, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified S0SessionCmd message, length delimited. Does not implicitly {@link security0.S0SessionCmd.verify|verify} messages.
         * @param message S0SessionCmd message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: security0.IS0SessionCmd, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a S0SessionCmd message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns S0SessionCmd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): security0.S0SessionCmd;

        /**
         * Decodes a S0SessionCmd message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns S0SessionCmd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): security0.S0SessionCmd;

        /**
         * Verifies a S0SessionCmd message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a S0SessionCmd message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns S0SessionCmd
         */
        public static fromObject(object: { [k: string]: any }): security0.S0SessionCmd;

        /**
         * Creates a plain object from a S0SessionCmd message. Also converts values to other types if specified.
         * @param message S0SessionCmd
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: security0.S0SessionCmd, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this S0SessionCmd to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for S0SessionCmd
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a S0SessionResp. */
    interface IS0SessionResp {

        /** S0SessionResp status */
        status?: (constants.Status|null);
    }

    /** Represents a S0SessionResp. */
    class S0SessionResp implements IS0SessionResp {

        /**
         * Constructs a new S0SessionResp.
         * @param [properties] Properties to set
         */
        constructor(properties?: security0.IS0SessionResp);

        /** S0SessionResp status. */
        public status: constants.Status;

        /**
         * Creates a new S0SessionResp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns S0SessionResp instance
         */
        public static create(properties?: security0.IS0SessionResp): security0.S0SessionResp;

        /**
         * Encodes the specified S0SessionResp message. Does not implicitly {@link security0.S0SessionResp.verify|verify} messages.
         * @param message S0SessionResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: security0.IS0SessionResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified S0SessionResp message, length delimited. Does not implicitly {@link security0.S0SessionResp.verify|verify} messages.
         * @param message S0SessionResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: security0.IS0SessionResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a S0SessionResp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns S0SessionResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): security0.S0SessionResp;

        /**
         * Decodes a S0SessionResp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns S0SessionResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): security0.S0SessionResp;

        /**
         * Verifies a S0SessionResp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a S0SessionResp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns S0SessionResp
         */
        public static fromObject(object: { [k: string]: any }): security0.S0SessionResp;

        /**
         * Creates a plain object from a S0SessionResp message. Also converts values to other types if specified.
         * @param message S0SessionResp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: security0.S0SessionResp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this S0SessionResp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for S0SessionResp
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Sec0MsgType enum. */
    enum Sec0MsgType {
        S0_Session_Command = 0,
        S0_Session_Response = 1
    }

    /** Properties of a Sec0Payload. */
    interface ISec0Payload {

        /** Sec0Payload msg */
        msg?: (security0.Sec0MsgType|null);

        /** Sec0Payload sc */
        sc?: (security0.IS0SessionCmd|null);

        /** Sec0Payload sr */
        sr?: (security0.IS0SessionResp|null);
    }

    /** Represents a Sec0Payload. */
    class Sec0Payload implements ISec0Payload {

        /**
         * Constructs a new Sec0Payload.
         * @param [properties] Properties to set
         */
        constructor(properties?: security0.ISec0Payload);

        /** Sec0Payload msg. */
        public msg: security0.Sec0MsgType;

        /** Sec0Payload sc. */
        public sc?: (security0.IS0SessionCmd|null);

        /** Sec0Payload sr. */
        public sr?: (security0.IS0SessionResp|null);

        /** Sec0Payload payload. */
        public payload?: ("sc"|"sr");

        /**
         * Creates a new Sec0Payload instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Sec0Payload instance
         */
        public static create(properties?: security0.ISec0Payload): security0.Sec0Payload;

        /**
         * Encodes the specified Sec0Payload message. Does not implicitly {@link security0.Sec0Payload.verify|verify} messages.
         * @param message Sec0Payload message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: security0.ISec0Payload, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Sec0Payload message, length delimited. Does not implicitly {@link security0.Sec0Payload.verify|verify} messages.
         * @param message Sec0Payload message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: security0.ISec0Payload, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Sec0Payload message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Sec0Payload
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): security0.Sec0Payload;

        /**
         * Decodes a Sec0Payload message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Sec0Payload
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): security0.Sec0Payload;

        /**
         * Verifies a Sec0Payload message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Sec0Payload message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Sec0Payload
         */
        public static fromObject(object: { [k: string]: any }): security0.Sec0Payload;

        /**
         * Creates a plain object from a Sec0Payload message. Also converts values to other types if specified.
         * @param message Sec0Payload
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: security0.Sec0Payload, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Sec0Payload to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for Sec0Payload
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }
}

/** Namespace security1. */
export namespace security1 {

    /** Properties of a SessionCmd1. */
    interface ISessionCmd1 {

        /** SessionCmd1 clientVerifyData */
        clientVerifyData?: (Uint8Array|null);
    }

    /** Represents a SessionCmd1. */
    class SessionCmd1 implements ISessionCmd1 {

        /**
         * Constructs a new SessionCmd1.
         * @param [properties] Properties to set
         */
        constructor(properties?: security1.ISessionCmd1);

        /** SessionCmd1 clientVerifyData. */
        public clientVerifyData: Uint8Array;

        /**
         * Creates a new SessionCmd1 instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SessionCmd1 instance
         */
        public static create(properties?: security1.ISessionCmd1): security1.SessionCmd1;

        /**
         * Encodes the specified SessionCmd1 message. Does not implicitly {@link security1.SessionCmd1.verify|verify} messages.
         * @param message SessionCmd1 message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: security1.ISessionCmd1, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SessionCmd1 message, length delimited. Does not implicitly {@link security1.SessionCmd1.verify|verify} messages.
         * @param message SessionCmd1 message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: security1.ISessionCmd1, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SessionCmd1 message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SessionCmd1
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): security1.SessionCmd1;

        /**
         * Decodes a SessionCmd1 message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SessionCmd1
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): security1.SessionCmd1;

        /**
         * Verifies a SessionCmd1 message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SessionCmd1 message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SessionCmd1
         */
        public static fromObject(object: { [k: string]: any }): security1.SessionCmd1;

        /**
         * Creates a plain object from a SessionCmd1 message. Also converts values to other types if specified.
         * @param message SessionCmd1
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: security1.SessionCmd1, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SessionCmd1 to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for SessionCmd1
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a SessionResp1. */
    interface ISessionResp1 {

        /** SessionResp1 status */
        status?: (constants.Status|null);

        /** SessionResp1 deviceVerifyData */
        deviceVerifyData?: (Uint8Array|null);
    }

    /** Represents a SessionResp1. */
    class SessionResp1 implements ISessionResp1 {

        /**
         * Constructs a new SessionResp1.
         * @param [properties] Properties to set
         */
        constructor(properties?: security1.ISessionResp1);

        /** SessionResp1 status. */
        public status: constants.Status;

        /** SessionResp1 deviceVerifyData. */
        public deviceVerifyData: Uint8Array;

        /**
         * Creates a new SessionResp1 instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SessionResp1 instance
         */
        public static create(properties?: security1.ISessionResp1): security1.SessionResp1;

        /**
         * Encodes the specified SessionResp1 message. Does not implicitly {@link security1.SessionResp1.verify|verify} messages.
         * @param message SessionResp1 message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: security1.ISessionResp1, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SessionResp1 message, length delimited. Does not implicitly {@link security1.SessionResp1.verify|verify} messages.
         * @param message SessionResp1 message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: security1.ISessionResp1, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SessionResp1 message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SessionResp1
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): security1.SessionResp1;

        /**
         * Decodes a SessionResp1 message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SessionResp1
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): security1.SessionResp1;

        /**
         * Verifies a SessionResp1 message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SessionResp1 message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SessionResp1
         */
        public static fromObject(object: { [k: string]: any }): security1.SessionResp1;

        /**
         * Creates a plain object from a SessionResp1 message. Also converts values to other types if specified.
         * @param message SessionResp1
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: security1.SessionResp1, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SessionResp1 to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for SessionResp1
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a SessionCmd0. */
    interface ISessionCmd0 {

        /** SessionCmd0 clientPubkey */
        clientPubkey?: (Uint8Array|null);
    }

    /** Represents a SessionCmd0. */
    class SessionCmd0 implements ISessionCmd0 {

        /**
         * Constructs a new SessionCmd0.
         * @param [properties] Properties to set
         */
        constructor(properties?: security1.ISessionCmd0);

        /** SessionCmd0 clientPubkey. */
        public clientPubkey: Uint8Array;

        /**
         * Creates a new SessionCmd0 instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SessionCmd0 instance
         */
        public static create(properties?: security1.ISessionCmd0): security1.SessionCmd0;

        /**
         * Encodes the specified SessionCmd0 message. Does not implicitly {@link security1.SessionCmd0.verify|verify} messages.
         * @param message SessionCmd0 message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: security1.ISessionCmd0, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SessionCmd0 message, length delimited. Does not implicitly {@link security1.SessionCmd0.verify|verify} messages.
         * @param message SessionCmd0 message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: security1.ISessionCmd0, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SessionCmd0 message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SessionCmd0
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): security1.SessionCmd0;

        /**
         * Decodes a SessionCmd0 message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SessionCmd0
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): security1.SessionCmd0;

        /**
         * Verifies a SessionCmd0 message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SessionCmd0 message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SessionCmd0
         */
        public static fromObject(object: { [k: string]: any }): security1.SessionCmd0;

        /**
         * Creates a plain object from a SessionCmd0 message. Also converts values to other types if specified.
         * @param message SessionCmd0
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: security1.SessionCmd0, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SessionCmd0 to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for SessionCmd0
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a SessionResp0. */
    interface ISessionResp0 {

        /** SessionResp0 status */
        status?: (constants.Status|null);

        /** SessionResp0 devicePubkey */
        devicePubkey?: (Uint8Array|null);

        /** SessionResp0 deviceRandom */
        deviceRandom?: (Uint8Array|null);
    }

    /** Represents a SessionResp0. */
    class SessionResp0 implements ISessionResp0 {

        /**
         * Constructs a new SessionResp0.
         * @param [properties] Properties to set
         */
        constructor(properties?: security1.ISessionResp0);

        /** SessionResp0 status. */
        public status: constants.Status;

        /** SessionResp0 devicePubkey. */
        public devicePubkey: Uint8Array;

        /** SessionResp0 deviceRandom. */
        public deviceRandom: Uint8Array;

        /**
         * Creates a new SessionResp0 instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SessionResp0 instance
         */
        public static create(properties?: security1.ISessionResp0): security1.SessionResp0;

        /**
         * Encodes the specified SessionResp0 message. Does not implicitly {@link security1.SessionResp0.verify|verify} messages.
         * @param message SessionResp0 message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: security1.ISessionResp0, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SessionResp0 message, length delimited. Does not implicitly {@link security1.SessionResp0.verify|verify} messages.
         * @param message SessionResp0 message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: security1.ISessionResp0, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SessionResp0 message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SessionResp0
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): security1.SessionResp0;

        /**
         * Decodes a SessionResp0 message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SessionResp0
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): security1.SessionResp0;

        /**
         * Verifies a SessionResp0 message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SessionResp0 message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SessionResp0
         */
        public static fromObject(object: { [k: string]: any }): security1.SessionResp0;

        /**
         * Creates a plain object from a SessionResp0 message. Also converts values to other types if specified.
         * @param message SessionResp0
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: security1.SessionResp0, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SessionResp0 to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for SessionResp0
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Sec1MsgType enum. */
    enum Sec1MsgType {
        Session_Command0 = 0,
        Session_Response0 = 1,
        Session_Command1 = 2,
        Session_Response1 = 3
    }

    /** Properties of a Sec1Payload. */
    interface ISec1Payload {

        /** Sec1Payload msg */
        msg?: (security1.Sec1MsgType|null);

        /** Sec1Payload sc0 */
        sc0?: (security1.ISessionCmd0|null);

        /** Sec1Payload sr0 */
        sr0?: (security1.ISessionResp0|null);

        /** Sec1Payload sc1 */
        sc1?: (security1.ISessionCmd1|null);

        /** Sec1Payload sr1 */
        sr1?: (security1.ISessionResp1|null);
    }

    /** Represents a Sec1Payload. */
    class Sec1Payload implements ISec1Payload {

        /**
         * Constructs a new Sec1Payload.
         * @param [properties] Properties to set
         */
        constructor(properties?: security1.ISec1Payload);

        /** Sec1Payload msg. */
        public msg: security1.Sec1MsgType;

        /** Sec1Payload sc0. */
        public sc0?: (security1.ISessionCmd0|null);

        /** Sec1Payload sr0. */
        public sr0?: (security1.ISessionResp0|null);

        /** Sec1Payload sc1. */
        public sc1?: (security1.ISessionCmd1|null);

        /** Sec1Payload sr1. */
        public sr1?: (security1.ISessionResp1|null);

        /** Sec1Payload payload. */
        public payload?: ("sc0"|"sr0"|"sc1"|"sr1");

        /**
         * Creates a new Sec1Payload instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Sec1Payload instance
         */
        public static create(properties?: security1.ISec1Payload): security1.Sec1Payload;

        /**
         * Encodes the specified Sec1Payload message. Does not implicitly {@link security1.Sec1Payload.verify|verify} messages.
         * @param message Sec1Payload message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: security1.ISec1Payload, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Sec1Payload message, length delimited. Does not implicitly {@link security1.Sec1Payload.verify|verify} messages.
         * @param message Sec1Payload message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: security1.ISec1Payload, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Sec1Payload message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Sec1Payload
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): security1.Sec1Payload;

        /**
         * Decodes a Sec1Payload message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Sec1Payload
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): security1.Sec1Payload;

        /**
         * Verifies a Sec1Payload message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Sec1Payload message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Sec1Payload
         */
        public static fromObject(object: { [k: string]: any }): security1.Sec1Payload;

        /**
         * Creates a plain object from a Sec1Payload message. Also converts values to other types if specified.
         * @param message Sec1Payload
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: security1.Sec1Payload, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Sec1Payload to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for Sec1Payload
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }
}

/** Namespace security2. */
export namespace security2 {

    /** Sec2MsgType enum. */
    enum Sec2MsgType {
        S2Session_Command0 = 0,
        S2Session_Response0 = 1,
        S2Session_Command1 = 2,
        S2Session_Response1 = 3
    }

    /** Properties of a S2SessionCmd0. */
    interface IS2SessionCmd0 {

        /** S2SessionCmd0 clientUsername */
        clientUsername?: (Uint8Array|null);

        /** S2SessionCmd0 clientPubkey */
        clientPubkey?: (Uint8Array|null);
    }

    /** Represents a S2SessionCmd0. */
    class S2SessionCmd0 implements IS2SessionCmd0 {

        /**
         * Constructs a new S2SessionCmd0.
         * @param [properties] Properties to set
         */
        constructor(properties?: security2.IS2SessionCmd0);

        /** S2SessionCmd0 clientUsername. */
        public clientUsername: Uint8Array;

        /** S2SessionCmd0 clientPubkey. */
        public clientPubkey: Uint8Array;

        /**
         * Creates a new S2SessionCmd0 instance using the specified properties.
         * @param [properties] Properties to set
         * @returns S2SessionCmd0 instance
         */
        public static create(properties?: security2.IS2SessionCmd0): security2.S2SessionCmd0;

        /**
         * Encodes the specified S2SessionCmd0 message. Does not implicitly {@link security2.S2SessionCmd0.verify|verify} messages.
         * @param message S2SessionCmd0 message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: security2.IS2SessionCmd0, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified S2SessionCmd0 message, length delimited. Does not implicitly {@link security2.S2SessionCmd0.verify|verify} messages.
         * @param message S2SessionCmd0 message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: security2.IS2SessionCmd0, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a S2SessionCmd0 message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns S2SessionCmd0
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): security2.S2SessionCmd0;

        /**
         * Decodes a S2SessionCmd0 message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns S2SessionCmd0
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): security2.S2SessionCmd0;

        /**
         * Verifies a S2SessionCmd0 message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a S2SessionCmd0 message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns S2SessionCmd0
         */
        public static fromObject(object: { [k: string]: any }): security2.S2SessionCmd0;

        /**
         * Creates a plain object from a S2SessionCmd0 message. Also converts values to other types if specified.
         * @param message S2SessionCmd0
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: security2.S2SessionCmd0, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this S2SessionCmd0 to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for S2SessionCmd0
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a S2SessionResp0. */
    interface IS2SessionResp0 {

        /** S2SessionResp0 status */
        status?: (constants.Status|null);

        /** S2SessionResp0 devicePubkey */
        devicePubkey?: (Uint8Array|null);

        /** S2SessionResp0 deviceSalt */
        deviceSalt?: (Uint8Array|null);
    }

    /** Represents a S2SessionResp0. */
    class S2SessionResp0 implements IS2SessionResp0 {

        /**
         * Constructs a new S2SessionResp0.
         * @param [properties] Properties to set
         */
        constructor(properties?: security2.IS2SessionResp0);

        /** S2SessionResp0 status. */
        public status: constants.Status;

        /** S2SessionResp0 devicePubkey. */
        public devicePubkey: Uint8Array;

        /** S2SessionResp0 deviceSalt. */
        public deviceSalt: Uint8Array;

        /**
         * Creates a new S2SessionResp0 instance using the specified properties.
         * @param [properties] Properties to set
         * @returns S2SessionResp0 instance
         */
        public static create(properties?: security2.IS2SessionResp0): security2.S2SessionResp0;

        /**
         * Encodes the specified S2SessionResp0 message. Does not implicitly {@link security2.S2SessionResp0.verify|verify} messages.
         * @param message S2SessionResp0 message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: security2.IS2SessionResp0, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified S2SessionResp0 message, length delimited. Does not implicitly {@link security2.S2SessionResp0.verify|verify} messages.
         * @param message S2SessionResp0 message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: security2.IS2SessionResp0, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a S2SessionResp0 message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns S2SessionResp0
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): security2.S2SessionResp0;

        /**
         * Decodes a S2SessionResp0 message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns S2SessionResp0
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): security2.S2SessionResp0;

        /**
         * Verifies a S2SessionResp0 message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a S2SessionResp0 message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns S2SessionResp0
         */
        public static fromObject(object: { [k: string]: any }): security2.S2SessionResp0;

        /**
         * Creates a plain object from a S2SessionResp0 message. Also converts values to other types if specified.
         * @param message S2SessionResp0
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: security2.S2SessionResp0, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this S2SessionResp0 to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for S2SessionResp0
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a S2SessionCmd1. */
    interface IS2SessionCmd1 {

        /** S2SessionCmd1 clientProof */
        clientProof?: (Uint8Array|null);
    }

    /** Represents a S2SessionCmd1. */
    class S2SessionCmd1 implements IS2SessionCmd1 {

        /**
         * Constructs a new S2SessionCmd1.
         * @param [properties] Properties to set
         */
        constructor(properties?: security2.IS2SessionCmd1);

        /** S2SessionCmd1 clientProof. */
        public clientProof: Uint8Array;

        /**
         * Creates a new S2SessionCmd1 instance using the specified properties.
         * @param [properties] Properties to set
         * @returns S2SessionCmd1 instance
         */
        public static create(properties?: security2.IS2SessionCmd1): security2.S2SessionCmd1;

        /**
         * Encodes the specified S2SessionCmd1 message. Does not implicitly {@link security2.S2SessionCmd1.verify|verify} messages.
         * @param message S2SessionCmd1 message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: security2.IS2SessionCmd1, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified S2SessionCmd1 message, length delimited. Does not implicitly {@link security2.S2SessionCmd1.verify|verify} messages.
         * @param message S2SessionCmd1 message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: security2.IS2SessionCmd1, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a S2SessionCmd1 message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns S2SessionCmd1
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): security2.S2SessionCmd1;

        /**
         * Decodes a S2SessionCmd1 message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns S2SessionCmd1
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): security2.S2SessionCmd1;

        /**
         * Verifies a S2SessionCmd1 message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a S2SessionCmd1 message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns S2SessionCmd1
         */
        public static fromObject(object: { [k: string]: any }): security2.S2SessionCmd1;

        /**
         * Creates a plain object from a S2SessionCmd1 message. Also converts values to other types if specified.
         * @param message S2SessionCmd1
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: security2.S2SessionCmd1, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this S2SessionCmd1 to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for S2SessionCmd1
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a S2SessionResp1. */
    interface IS2SessionResp1 {

        /** S2SessionResp1 status */
        status?: (constants.Status|null);

        /** S2SessionResp1 deviceProof */
        deviceProof?: (Uint8Array|null);

        /** S2SessionResp1 deviceNonce */
        deviceNonce?: (Uint8Array|null);
    }

    /** Represents a S2SessionResp1. */
    class S2SessionResp1 implements IS2SessionResp1 {

        /**
         * Constructs a new S2SessionResp1.
         * @param [properties] Properties to set
         */
        constructor(properties?: security2.IS2SessionResp1);

        /** S2SessionResp1 status. */
        public status: constants.Status;

        /** S2SessionResp1 deviceProof. */
        public deviceProof: Uint8Array;

        /** S2SessionResp1 deviceNonce. */
        public deviceNonce: Uint8Array;

        /**
         * Creates a new S2SessionResp1 instance using the specified properties.
         * @param [properties] Properties to set
         * @returns S2SessionResp1 instance
         */
        public static create(properties?: security2.IS2SessionResp1): security2.S2SessionResp1;

        /**
         * Encodes the specified S2SessionResp1 message. Does not implicitly {@link security2.S2SessionResp1.verify|verify} messages.
         * @param message S2SessionResp1 message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: security2.IS2SessionResp1, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified S2SessionResp1 message, length delimited. Does not implicitly {@link security2.S2SessionResp1.verify|verify} messages.
         * @param message S2SessionResp1 message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: security2.IS2SessionResp1, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a S2SessionResp1 message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns S2SessionResp1
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): security2.S2SessionResp1;

        /**
         * Decodes a S2SessionResp1 message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns S2SessionResp1
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): security2.S2SessionResp1;

        /**
         * Verifies a S2SessionResp1 message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a S2SessionResp1 message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns S2SessionResp1
         */
        public static fromObject(object: { [k: string]: any }): security2.S2SessionResp1;

        /**
         * Creates a plain object from a S2SessionResp1 message. Also converts values to other types if specified.
         * @param message S2SessionResp1
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: security2.S2SessionResp1, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this S2SessionResp1 to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for S2SessionResp1
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a Sec2Payload. */
    interface ISec2Payload {

        /** Sec2Payload msg */
        msg?: (security2.Sec2MsgType|null);

        /** Sec2Payload sc0 */
        sc0?: (security2.IS2SessionCmd0|null);

        /** Sec2Payload sr0 */
        sr0?: (security2.IS2SessionResp0|null);

        /** Sec2Payload sc1 */
        sc1?: (security2.IS2SessionCmd1|null);

        /** Sec2Payload sr1 */
        sr1?: (security2.IS2SessionResp1|null);
    }

    /** Represents a Sec2Payload. */
    class Sec2Payload implements ISec2Payload {

        /**
         * Constructs a new Sec2Payload.
         * @param [properties] Properties to set
         */
        constructor(properties?: security2.ISec2Payload);

        /** Sec2Payload msg. */
        public msg: security2.Sec2MsgType;

        /** Sec2Payload sc0. */
        public sc0?: (security2.IS2SessionCmd0|null);

        /** Sec2Payload sr0. */
        public sr0?: (security2.IS2SessionResp0|null);

        /** Sec2Payload sc1. */
        public sc1?: (security2.IS2SessionCmd1|null);

        /** Sec2Payload sr1. */
        public sr1?: (security2.IS2SessionResp1|null);

        /** Sec2Payload payload. */
        public payload?: ("sc0"|"sr0"|"sc1"|"sr1");

        /**
         * Creates a new Sec2Payload instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Sec2Payload instance
         */
        public static create(properties?: security2.ISec2Payload): security2.Sec2Payload;

        /**
         * Encodes the specified Sec2Payload message. Does not implicitly {@link security2.Sec2Payload.verify|verify} messages.
         * @param message Sec2Payload message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: security2.ISec2Payload, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Sec2Payload message, length delimited. Does not implicitly {@link security2.Sec2Payload.verify|verify} messages.
         * @param message Sec2Payload message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: security2.ISec2Payload, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Sec2Payload message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Sec2Payload
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): security2.Sec2Payload;

        /**
         * Decodes a Sec2Payload message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Sec2Payload
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): security2.Sec2Payload;

        /**
         * Verifies a Sec2Payload message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Sec2Payload message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Sec2Payload
         */
        public static fromObject(object: { [k: string]: any }): security2.Sec2Payload;

        /**
         * Creates a plain object from a Sec2Payload message. Also converts values to other types if specified.
         * @param message Sec2Payload
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: security2.Sec2Payload, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Sec2Payload to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for Sec2Payload
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }
}

/** Namespace session. */
export namespace session {

    /** SecSchemeVersion enum. */
    enum SecSchemeVersion {
        SecScheme0 = 0,
        SecScheme1 = 1,
        SecScheme2 = 2
    }

    /** Properties of a SessionData. */
    interface ISessionData {

        /** SessionData secVer */
        secVer?: (session.SecSchemeVersion|null);

        /** SessionData sec0 */
        sec0?: (security0.ISec0Payload|null);

        /** SessionData sec1 */
        sec1?: (security1.ISec1Payload|null);

        /** SessionData sec2 */
        sec2?: (security2.ISec2Payload|null);
    }

    /** Represents a SessionData. */
    class SessionData implements ISessionData {

        /**
         * Constructs a new SessionData.
         * @param [properties] Properties to set
         */
        constructor(properties?: session.ISessionData);

        /** SessionData secVer. */
        public secVer: session.SecSchemeVersion;

        /** SessionData sec0. */
        public sec0?: (security0.ISec0Payload|null);

        /** SessionData sec1. */
        public sec1?: (security1.ISec1Payload|null);

        /** SessionData sec2. */
        public sec2?: (security2.ISec2Payload|null);

        /** SessionData proto. */
        public proto?: ("sec0"|"sec1"|"sec2");

        /**
         * Creates a new SessionData instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SessionData instance
         */
        public static create(properties?: session.ISessionData): session.SessionData;

        /**
         * Encodes the specified SessionData message. Does not implicitly {@link session.SessionData.verify|verify} messages.
         * @param message SessionData message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: session.ISessionData, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SessionData message, length delimited. Does not implicitly {@link session.SessionData.verify|verify} messages.
         * @param message SessionData message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: session.ISessionData, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SessionData message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SessionData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): session.SessionData;

        /**
         * Decodes a SessionData message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SessionData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): session.SessionData;

        /**
         * Verifies a SessionData message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SessionData message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SessionData
         */
        public static fromObject(object: { [k: string]: any }): session.SessionData;

        /**
         * Creates a plain object from a SessionData message. Also converts values to other types if specified.
         * @param message SessionData
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: session.SessionData, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SessionData to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for SessionData
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }
}

/** Namespace config. */
export namespace config {

    /** Properties of a CmdGetStatus. */
    interface ICmdGetStatus {
    }

    /** Represents a CmdGetStatus. */
    class CmdGetStatus implements ICmdGetStatus {

        /**
         * Constructs a new CmdGetStatus.
         * @param [properties] Properties to set
         */
        constructor(properties?: config.ICmdGetStatus);

        /**
         * Creates a new CmdGetStatus instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CmdGetStatus instance
         */
        public static create(properties?: config.ICmdGetStatus): config.CmdGetStatus;

        /**
         * Encodes the specified CmdGetStatus message. Does not implicitly {@link config.CmdGetStatus.verify|verify} messages.
         * @param message CmdGetStatus message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: config.ICmdGetStatus, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CmdGetStatus message, length delimited. Does not implicitly {@link config.CmdGetStatus.verify|verify} messages.
         * @param message CmdGetStatus message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: config.ICmdGetStatus, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CmdGetStatus message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CmdGetStatus
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): config.CmdGetStatus;

        /**
         * Decodes a CmdGetStatus message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CmdGetStatus
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): config.CmdGetStatus;

        /**
         * Verifies a CmdGetStatus message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CmdGetStatus message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CmdGetStatus
         */
        public static fromObject(object: { [k: string]: any }): config.CmdGetStatus;

        /**
         * Creates a plain object from a CmdGetStatus message. Also converts values to other types if specified.
         * @param message CmdGetStatus
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: config.CmdGetStatus, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CmdGetStatus to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for CmdGetStatus
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a RespGetStatus. */
    interface IRespGetStatus {

        /** RespGetStatus status */
        status?: (constants.Status|null);

        /** RespGetStatus staState */
        staState?: (constants.WifiStationState|null);

        /** RespGetStatus failReason */
        failReason?: (constants.WifiConnectFailedReason|null);

        /** RespGetStatus connected */
        connected?: (constants.IWifiConnectedState|null);

        /** RespGetStatus attemptFailed */
        attemptFailed?: (constants.IWifiAttemptFailed|null);
    }

    /** Represents a RespGetStatus. */
    class RespGetStatus implements IRespGetStatus {

        /**
         * Constructs a new RespGetStatus.
         * @param [properties] Properties to set
         */
        constructor(properties?: config.IRespGetStatus);

        /** RespGetStatus status. */
        public status: constants.Status;

        /** RespGetStatus staState. */
        public staState: constants.WifiStationState;

        /** RespGetStatus failReason. */
        public failReason?: (constants.WifiConnectFailedReason|null);

        /** RespGetStatus connected. */
        public connected?: (constants.IWifiConnectedState|null);

        /** RespGetStatus attemptFailed. */
        public attemptFailed?: (constants.IWifiAttemptFailed|null);

        /** RespGetStatus state. */
        public state?: ("failReason"|"connected"|"attemptFailed");

        /**
         * Creates a new RespGetStatus instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RespGetStatus instance
         */
        public static create(properties?: config.IRespGetStatus): config.RespGetStatus;

        /**
         * Encodes the specified RespGetStatus message. Does not implicitly {@link config.RespGetStatus.verify|verify} messages.
         * @param message RespGetStatus message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: config.IRespGetStatus, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RespGetStatus message, length delimited. Does not implicitly {@link config.RespGetStatus.verify|verify} messages.
         * @param message RespGetStatus message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: config.IRespGetStatus, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RespGetStatus message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RespGetStatus
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): config.RespGetStatus;

        /**
         * Decodes a RespGetStatus message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RespGetStatus
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): config.RespGetStatus;

        /**
         * Verifies a RespGetStatus message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RespGetStatus message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RespGetStatus
         */
        public static fromObject(object: { [k: string]: any }): config.RespGetStatus;

        /**
         * Creates a plain object from a RespGetStatus message. Also converts values to other types if specified.
         * @param message RespGetStatus
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: config.RespGetStatus, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RespGetStatus to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for RespGetStatus
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a CmdSetConfig. */
    interface ICmdSetConfig {

        /** CmdSetConfig ssid */
        ssid?: (Uint8Array|null);

        /** CmdSetConfig passphrase */
        passphrase?: (Uint8Array|null);

        /** CmdSetConfig bssid */
        bssid?: (Uint8Array|null);

        /** CmdSetConfig channel */
        channel?: (number|null);
    }

    /** Represents a CmdSetConfig. */
    class CmdSetConfig implements ICmdSetConfig {

        /**
         * Constructs a new CmdSetConfig.
         * @param [properties] Properties to set
         */
        constructor(properties?: config.ICmdSetConfig);

        /** CmdSetConfig ssid. */
        public ssid: Uint8Array;

        /** CmdSetConfig passphrase. */
        public passphrase: Uint8Array;

        /** CmdSetConfig bssid. */
        public bssid: Uint8Array;

        /** CmdSetConfig channel. */
        public channel: number;

        /**
         * Creates a new CmdSetConfig instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CmdSetConfig instance
         */
        public static create(properties?: config.ICmdSetConfig): config.CmdSetConfig;

        /**
         * Encodes the specified CmdSetConfig message. Does not implicitly {@link config.CmdSetConfig.verify|verify} messages.
         * @param message CmdSetConfig message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: config.ICmdSetConfig, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CmdSetConfig message, length delimited. Does not implicitly {@link config.CmdSetConfig.verify|verify} messages.
         * @param message CmdSetConfig message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: config.ICmdSetConfig, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CmdSetConfig message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CmdSetConfig
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): config.CmdSetConfig;

        /**
         * Decodes a CmdSetConfig message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CmdSetConfig
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): config.CmdSetConfig;

        /**
         * Verifies a CmdSetConfig message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CmdSetConfig message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CmdSetConfig
         */
        public static fromObject(object: { [k: string]: any }): config.CmdSetConfig;

        /**
         * Creates a plain object from a CmdSetConfig message. Also converts values to other types if specified.
         * @param message CmdSetConfig
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: config.CmdSetConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CmdSetConfig to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for CmdSetConfig
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a RespSetConfig. */
    interface IRespSetConfig {

        /** RespSetConfig status */
        status?: (constants.Status|null);
    }

    /** Represents a RespSetConfig. */
    class RespSetConfig implements IRespSetConfig {

        /**
         * Constructs a new RespSetConfig.
         * @param [properties] Properties to set
         */
        constructor(properties?: config.IRespSetConfig);

        /** RespSetConfig status. */
        public status: constants.Status;

        /**
         * Creates a new RespSetConfig instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RespSetConfig instance
         */
        public static create(properties?: config.IRespSetConfig): config.RespSetConfig;

        /**
         * Encodes the specified RespSetConfig message. Does not implicitly {@link config.RespSetConfig.verify|verify} messages.
         * @param message RespSetConfig message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: config.IRespSetConfig, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RespSetConfig message, length delimited. Does not implicitly {@link config.RespSetConfig.verify|verify} messages.
         * @param message RespSetConfig message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: config.IRespSetConfig, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RespSetConfig message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RespSetConfig
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): config.RespSetConfig;

        /**
         * Decodes a RespSetConfig message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RespSetConfig
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): config.RespSetConfig;

        /**
         * Verifies a RespSetConfig message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RespSetConfig message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RespSetConfig
         */
        public static fromObject(object: { [k: string]: any }): config.RespSetConfig;

        /**
         * Creates a plain object from a RespSetConfig message. Also converts values to other types if specified.
         * @param message RespSetConfig
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: config.RespSetConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RespSetConfig to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for RespSetConfig
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a CmdApplyConfig. */
    interface ICmdApplyConfig {
    }

    /** Represents a CmdApplyConfig. */
    class CmdApplyConfig implements ICmdApplyConfig {

        /**
         * Constructs a new CmdApplyConfig.
         * @param [properties] Properties to set
         */
        constructor(properties?: config.ICmdApplyConfig);

        /**
         * Creates a new CmdApplyConfig instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CmdApplyConfig instance
         */
        public static create(properties?: config.ICmdApplyConfig): config.CmdApplyConfig;

        /**
         * Encodes the specified CmdApplyConfig message. Does not implicitly {@link config.CmdApplyConfig.verify|verify} messages.
         * @param message CmdApplyConfig message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: config.ICmdApplyConfig, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CmdApplyConfig message, length delimited. Does not implicitly {@link config.CmdApplyConfig.verify|verify} messages.
         * @param message CmdApplyConfig message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: config.ICmdApplyConfig, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CmdApplyConfig message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CmdApplyConfig
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): config.CmdApplyConfig;

        /**
         * Decodes a CmdApplyConfig message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CmdApplyConfig
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): config.CmdApplyConfig;

        /**
         * Verifies a CmdApplyConfig message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CmdApplyConfig message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CmdApplyConfig
         */
        public static fromObject(object: { [k: string]: any }): config.CmdApplyConfig;

        /**
         * Creates a plain object from a CmdApplyConfig message. Also converts values to other types if specified.
         * @param message CmdApplyConfig
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: config.CmdApplyConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CmdApplyConfig to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for CmdApplyConfig
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a RespApplyConfig. */
    interface IRespApplyConfig {

        /** RespApplyConfig status */
        status?: (constants.Status|null);
    }

    /** Represents a RespApplyConfig. */
    class RespApplyConfig implements IRespApplyConfig {

        /**
         * Constructs a new RespApplyConfig.
         * @param [properties] Properties to set
         */
        constructor(properties?: config.IRespApplyConfig);

        /** RespApplyConfig status. */
        public status: constants.Status;

        /**
         * Creates a new RespApplyConfig instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RespApplyConfig instance
         */
        public static create(properties?: config.IRespApplyConfig): config.RespApplyConfig;

        /**
         * Encodes the specified RespApplyConfig message. Does not implicitly {@link config.RespApplyConfig.verify|verify} messages.
         * @param message RespApplyConfig message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: config.IRespApplyConfig, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RespApplyConfig message, length delimited. Does not implicitly {@link config.RespApplyConfig.verify|verify} messages.
         * @param message RespApplyConfig message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: config.IRespApplyConfig, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RespApplyConfig message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RespApplyConfig
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): config.RespApplyConfig;

        /**
         * Decodes a RespApplyConfig message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RespApplyConfig
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): config.RespApplyConfig;

        /**
         * Verifies a RespApplyConfig message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RespApplyConfig message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RespApplyConfig
         */
        public static fromObject(object: { [k: string]: any }): config.RespApplyConfig;

        /**
         * Creates a plain object from a RespApplyConfig message. Also converts values to other types if specified.
         * @param message RespApplyConfig
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: config.RespApplyConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RespApplyConfig to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for RespApplyConfig
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** WiFiConfigMsgType enum. */
    enum WiFiConfigMsgType {
        TypeCmdGetStatus = 0,
        TypeRespGetStatus = 1,
        TypeCmdSetConfig = 2,
        TypeRespSetConfig = 3,
        TypeCmdApplyConfig = 4,
        TypeRespApplyConfig = 5
    }

    /** Properties of a WiFiConfigPayload. */
    interface IWiFiConfigPayload {

        /** WiFiConfigPayload msg */
        msg?: (config.WiFiConfigMsgType|null);

        /** WiFiConfigPayload cmdGetStatus */
        cmdGetStatus?: (config.ICmdGetStatus|null);

        /** WiFiConfigPayload respGetStatus */
        respGetStatus?: (config.IRespGetStatus|null);

        /** WiFiConfigPayload cmdSetConfig */
        cmdSetConfig?: (config.ICmdSetConfig|null);

        /** WiFiConfigPayload respSetConfig */
        respSetConfig?: (config.IRespSetConfig|null);

        /** WiFiConfigPayload cmdApplyConfig */
        cmdApplyConfig?: (config.ICmdApplyConfig|null);

        /** WiFiConfigPayload respApplyConfig */
        respApplyConfig?: (config.IRespApplyConfig|null);
    }

    /** Represents a WiFiConfigPayload. */
    class WiFiConfigPayload implements IWiFiConfigPayload {

        /**
         * Constructs a new WiFiConfigPayload.
         * @param [properties] Properties to set
         */
        constructor(properties?: config.IWiFiConfigPayload);

        /** WiFiConfigPayload msg. */
        public msg: config.WiFiConfigMsgType;

        /** WiFiConfigPayload cmdGetStatus. */
        public cmdGetStatus?: (config.ICmdGetStatus|null);

        /** WiFiConfigPayload respGetStatus. */
        public respGetStatus?: (config.IRespGetStatus|null);

        /** WiFiConfigPayload cmdSetConfig. */
        public cmdSetConfig?: (config.ICmdSetConfig|null);

        /** WiFiConfigPayload respSetConfig. */
        public respSetConfig?: (config.IRespSetConfig|null);

        /** WiFiConfigPayload cmdApplyConfig. */
        public cmdApplyConfig?: (config.ICmdApplyConfig|null);

        /** WiFiConfigPayload respApplyConfig. */
        public respApplyConfig?: (config.IRespApplyConfig|null);

        /** WiFiConfigPayload payload. */
        public payload?: ("cmdGetStatus"|"respGetStatus"|"cmdSetConfig"|"respSetConfig"|"cmdApplyConfig"|"respApplyConfig");

        /**
         * Creates a new WiFiConfigPayload instance using the specified properties.
         * @param [properties] Properties to set
         * @returns WiFiConfigPayload instance
         */
        public static create(properties?: config.IWiFiConfigPayload): config.WiFiConfigPayload;

        /**
         * Encodes the specified WiFiConfigPayload message. Does not implicitly {@link config.WiFiConfigPayload.verify|verify} messages.
         * @param message WiFiConfigPayload message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: config.IWiFiConfigPayload, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified WiFiConfigPayload message, length delimited. Does not implicitly {@link config.WiFiConfigPayload.verify|verify} messages.
         * @param message WiFiConfigPayload message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: config.IWiFiConfigPayload, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a WiFiConfigPayload message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns WiFiConfigPayload
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): config.WiFiConfigPayload;

        /**
         * Decodes a WiFiConfigPayload message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns WiFiConfigPayload
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): config.WiFiConfigPayload;

        /**
         * Verifies a WiFiConfigPayload message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a WiFiConfigPayload message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns WiFiConfigPayload
         */
        public static fromObject(object: { [k: string]: any }): config.WiFiConfigPayload;

        /**
         * Creates a plain object from a WiFiConfigPayload message. Also converts values to other types if specified.
         * @param message WiFiConfigPayload
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: config.WiFiConfigPayload, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this WiFiConfigPayload to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for WiFiConfigPayload
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }
}

/** Namespace ctrl. */
export namespace ctrl {

    /** Properties of a CmdCtrlReset. */
    interface ICmdCtrlReset {
    }

    /** Represents a CmdCtrlReset. */
    class CmdCtrlReset implements ICmdCtrlReset {

        /**
         * Constructs a new CmdCtrlReset.
         * @param [properties] Properties to set
         */
        constructor(properties?: ctrl.ICmdCtrlReset);

        /**
         * Creates a new CmdCtrlReset instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CmdCtrlReset instance
         */
        public static create(properties?: ctrl.ICmdCtrlReset): ctrl.CmdCtrlReset;

        /**
         * Encodes the specified CmdCtrlReset message. Does not implicitly {@link ctrl.CmdCtrlReset.verify|verify} messages.
         * @param message CmdCtrlReset message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ctrl.ICmdCtrlReset, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CmdCtrlReset message, length delimited. Does not implicitly {@link ctrl.CmdCtrlReset.verify|verify} messages.
         * @param message CmdCtrlReset message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ctrl.ICmdCtrlReset, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CmdCtrlReset message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CmdCtrlReset
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ctrl.CmdCtrlReset;

        /**
         * Decodes a CmdCtrlReset message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CmdCtrlReset
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ctrl.CmdCtrlReset;

        /**
         * Verifies a CmdCtrlReset message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CmdCtrlReset message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CmdCtrlReset
         */
        public static fromObject(object: { [k: string]: any }): ctrl.CmdCtrlReset;

        /**
         * Creates a plain object from a CmdCtrlReset message. Also converts values to other types if specified.
         * @param message CmdCtrlReset
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: ctrl.CmdCtrlReset, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CmdCtrlReset to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for CmdCtrlReset
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a RespCtrlReset. */
    interface IRespCtrlReset {
    }

    /** Represents a RespCtrlReset. */
    class RespCtrlReset implements IRespCtrlReset {

        /**
         * Constructs a new RespCtrlReset.
         * @param [properties] Properties to set
         */
        constructor(properties?: ctrl.IRespCtrlReset);

        /**
         * Creates a new RespCtrlReset instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RespCtrlReset instance
         */
        public static create(properties?: ctrl.IRespCtrlReset): ctrl.RespCtrlReset;

        /**
         * Encodes the specified RespCtrlReset message. Does not implicitly {@link ctrl.RespCtrlReset.verify|verify} messages.
         * @param message RespCtrlReset message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ctrl.IRespCtrlReset, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RespCtrlReset message, length delimited. Does not implicitly {@link ctrl.RespCtrlReset.verify|verify} messages.
         * @param message RespCtrlReset message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ctrl.IRespCtrlReset, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RespCtrlReset message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RespCtrlReset
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ctrl.RespCtrlReset;

        /**
         * Decodes a RespCtrlReset message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RespCtrlReset
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ctrl.RespCtrlReset;

        /**
         * Verifies a RespCtrlReset message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RespCtrlReset message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RespCtrlReset
         */
        public static fromObject(object: { [k: string]: any }): ctrl.RespCtrlReset;

        /**
         * Creates a plain object from a RespCtrlReset message. Also converts values to other types if specified.
         * @param message RespCtrlReset
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: ctrl.RespCtrlReset, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RespCtrlReset to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for RespCtrlReset
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a CmdCtrlReprov. */
    interface ICmdCtrlReprov {
    }

    /** Represents a CmdCtrlReprov. */
    class CmdCtrlReprov implements ICmdCtrlReprov {

        /**
         * Constructs a new CmdCtrlReprov.
         * @param [properties] Properties to set
         */
        constructor(properties?: ctrl.ICmdCtrlReprov);

        /**
         * Creates a new CmdCtrlReprov instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CmdCtrlReprov instance
         */
        public static create(properties?: ctrl.ICmdCtrlReprov): ctrl.CmdCtrlReprov;

        /**
         * Encodes the specified CmdCtrlReprov message. Does not implicitly {@link ctrl.CmdCtrlReprov.verify|verify} messages.
         * @param message CmdCtrlReprov message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ctrl.ICmdCtrlReprov, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CmdCtrlReprov message, length delimited. Does not implicitly {@link ctrl.CmdCtrlReprov.verify|verify} messages.
         * @param message CmdCtrlReprov message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ctrl.ICmdCtrlReprov, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CmdCtrlReprov message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CmdCtrlReprov
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ctrl.CmdCtrlReprov;

        /**
         * Decodes a CmdCtrlReprov message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CmdCtrlReprov
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ctrl.CmdCtrlReprov;

        /**
         * Verifies a CmdCtrlReprov message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CmdCtrlReprov message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CmdCtrlReprov
         */
        public static fromObject(object: { [k: string]: any }): ctrl.CmdCtrlReprov;

        /**
         * Creates a plain object from a CmdCtrlReprov message. Also converts values to other types if specified.
         * @param message CmdCtrlReprov
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: ctrl.CmdCtrlReprov, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CmdCtrlReprov to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for CmdCtrlReprov
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a RespCtrlReprov. */
    interface IRespCtrlReprov {
    }

    /** Represents a RespCtrlReprov. */
    class RespCtrlReprov implements IRespCtrlReprov {

        /**
         * Constructs a new RespCtrlReprov.
         * @param [properties] Properties to set
         */
        constructor(properties?: ctrl.IRespCtrlReprov);

        /**
         * Creates a new RespCtrlReprov instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RespCtrlReprov instance
         */
        public static create(properties?: ctrl.IRespCtrlReprov): ctrl.RespCtrlReprov;

        /**
         * Encodes the specified RespCtrlReprov message. Does not implicitly {@link ctrl.RespCtrlReprov.verify|verify} messages.
         * @param message RespCtrlReprov message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ctrl.IRespCtrlReprov, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RespCtrlReprov message, length delimited. Does not implicitly {@link ctrl.RespCtrlReprov.verify|verify} messages.
         * @param message RespCtrlReprov message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ctrl.IRespCtrlReprov, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RespCtrlReprov message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RespCtrlReprov
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ctrl.RespCtrlReprov;

        /**
         * Decodes a RespCtrlReprov message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RespCtrlReprov
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ctrl.RespCtrlReprov;

        /**
         * Verifies a RespCtrlReprov message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RespCtrlReprov message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RespCtrlReprov
         */
        public static fromObject(object: { [k: string]: any }): ctrl.RespCtrlReprov;

        /**
         * Creates a plain object from a RespCtrlReprov message. Also converts values to other types if specified.
         * @param message RespCtrlReprov
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: ctrl.RespCtrlReprov, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RespCtrlReprov to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for RespCtrlReprov
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** WiFiCtrlMsgType enum. */
    enum WiFiCtrlMsgType {
        TypeCtrlReserved = 0,
        TypeCmdCtrlReset = 1,
        TypeRespCtrlReset = 2,
        TypeCmdCtrlReprov = 3,
        TypeRespCtrlReprov = 4
    }

    /** Properties of a WiFiCtrlPayload. */
    interface IWiFiCtrlPayload {

        /** WiFiCtrlPayload msg */
        msg?: (ctrl.WiFiCtrlMsgType|null);

        /** WiFiCtrlPayload status */
        status?: (constants.Status|null);

        /** WiFiCtrlPayload cmdCtrlReset */
        cmdCtrlReset?: (ctrl.ICmdCtrlReset|null);

        /** WiFiCtrlPayload respCtrlReset */
        respCtrlReset?: (ctrl.IRespCtrlReset|null);

        /** WiFiCtrlPayload cmdCtrlReprov */
        cmdCtrlReprov?: (ctrl.ICmdCtrlReprov|null);

        /** WiFiCtrlPayload respCtrlReprov */
        respCtrlReprov?: (ctrl.IRespCtrlReprov|null);
    }

    /** Represents a WiFiCtrlPayload. */
    class WiFiCtrlPayload implements IWiFiCtrlPayload {

        /**
         * Constructs a new WiFiCtrlPayload.
         * @param [properties] Properties to set
         */
        constructor(properties?: ctrl.IWiFiCtrlPayload);

        /** WiFiCtrlPayload msg. */
        public msg: ctrl.WiFiCtrlMsgType;

        /** WiFiCtrlPayload status. */
        public status: constants.Status;

        /** WiFiCtrlPayload cmdCtrlReset. */
        public cmdCtrlReset?: (ctrl.ICmdCtrlReset|null);

        /** WiFiCtrlPayload respCtrlReset. */
        public respCtrlReset?: (ctrl.IRespCtrlReset|null);

        /** WiFiCtrlPayload cmdCtrlReprov. */
        public cmdCtrlReprov?: (ctrl.ICmdCtrlReprov|null);

        /** WiFiCtrlPayload respCtrlReprov. */
        public respCtrlReprov?: (ctrl.IRespCtrlReprov|null);

        /** WiFiCtrlPayload payload. */
        public payload?: ("cmdCtrlReset"|"respCtrlReset"|"cmdCtrlReprov"|"respCtrlReprov");

        /**
         * Creates a new WiFiCtrlPayload instance using the specified properties.
         * @param [properties] Properties to set
         * @returns WiFiCtrlPayload instance
         */
        public static create(properties?: ctrl.IWiFiCtrlPayload): ctrl.WiFiCtrlPayload;

        /**
         * Encodes the specified WiFiCtrlPayload message. Does not implicitly {@link ctrl.WiFiCtrlPayload.verify|verify} messages.
         * @param message WiFiCtrlPayload message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ctrl.IWiFiCtrlPayload, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified WiFiCtrlPayload message, length delimited. Does not implicitly {@link ctrl.WiFiCtrlPayload.verify|verify} messages.
         * @param message WiFiCtrlPayload message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ctrl.IWiFiCtrlPayload, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a WiFiCtrlPayload message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns WiFiCtrlPayload
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ctrl.WiFiCtrlPayload;

        /**
         * Decodes a WiFiCtrlPayload message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns WiFiCtrlPayload
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ctrl.WiFiCtrlPayload;

        /**
         * Verifies a WiFiCtrlPayload message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a WiFiCtrlPayload message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns WiFiCtrlPayload
         */
        public static fromObject(object: { [k: string]: any }): ctrl.WiFiCtrlPayload;

        /**
         * Creates a plain object from a WiFiCtrlPayload message. Also converts values to other types if specified.
         * @param message WiFiCtrlPayload
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: ctrl.WiFiCtrlPayload, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this WiFiCtrlPayload to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for WiFiCtrlPayload
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }
}

/** Namespace scan. */
export namespace scan {

    /** Properties of a CmdScanStart. */
    interface ICmdScanStart {

        /** CmdScanStart blocking */
        blocking?: (boolean|null);

        /** CmdScanStart passive */
        passive?: (boolean|null);

        /** CmdScanStart groupChannels */
        groupChannels?: (number|null);

        /** CmdScanStart periodMs */
        periodMs?: (number|null);
    }

    /** Represents a CmdScanStart. */
    class CmdScanStart implements ICmdScanStart {

        /**
         * Constructs a new CmdScanStart.
         * @param [properties] Properties to set
         */
        constructor(properties?: scan.ICmdScanStart);

        /** CmdScanStart blocking. */
        public blocking: boolean;

        /** CmdScanStart passive. */
        public passive: boolean;

        /** CmdScanStart groupChannels. */
        public groupChannels: number;

        /** CmdScanStart periodMs. */
        public periodMs: number;

        /**
         * Creates a new CmdScanStart instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CmdScanStart instance
         */
        public static create(properties?: scan.ICmdScanStart): scan.CmdScanStart;

        /**
         * Encodes the specified CmdScanStart message. Does not implicitly {@link scan.CmdScanStart.verify|verify} messages.
         * @param message CmdScanStart message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: scan.ICmdScanStart, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CmdScanStart message, length delimited. Does not implicitly {@link scan.CmdScanStart.verify|verify} messages.
         * @param message CmdScanStart message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: scan.ICmdScanStart, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CmdScanStart message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CmdScanStart
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): scan.CmdScanStart;

        /**
         * Decodes a CmdScanStart message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CmdScanStart
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): scan.CmdScanStart;

        /**
         * Verifies a CmdScanStart message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CmdScanStart message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CmdScanStart
         */
        public static fromObject(object: { [k: string]: any }): scan.CmdScanStart;

        /**
         * Creates a plain object from a CmdScanStart message. Also converts values to other types if specified.
         * @param message CmdScanStart
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: scan.CmdScanStart, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CmdScanStart to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for CmdScanStart
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a RespScanStart. */
    interface IRespScanStart {
    }

    /** Represents a RespScanStart. */
    class RespScanStart implements IRespScanStart {

        /**
         * Constructs a new RespScanStart.
         * @param [properties] Properties to set
         */
        constructor(properties?: scan.IRespScanStart);

        /**
         * Creates a new RespScanStart instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RespScanStart instance
         */
        public static create(properties?: scan.IRespScanStart): scan.RespScanStart;

        /**
         * Encodes the specified RespScanStart message. Does not implicitly {@link scan.RespScanStart.verify|verify} messages.
         * @param message RespScanStart message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: scan.IRespScanStart, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RespScanStart message, length delimited. Does not implicitly {@link scan.RespScanStart.verify|verify} messages.
         * @param message RespScanStart message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: scan.IRespScanStart, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RespScanStart message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RespScanStart
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): scan.RespScanStart;

        /**
         * Decodes a RespScanStart message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RespScanStart
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): scan.RespScanStart;

        /**
         * Verifies a RespScanStart message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RespScanStart message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RespScanStart
         */
        public static fromObject(object: { [k: string]: any }): scan.RespScanStart;

        /**
         * Creates a plain object from a RespScanStart message. Also converts values to other types if specified.
         * @param message RespScanStart
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: scan.RespScanStart, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RespScanStart to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for RespScanStart
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a CmdScanStatus. */
    interface ICmdScanStatus {
    }

    /** Represents a CmdScanStatus. */
    class CmdScanStatus implements ICmdScanStatus {

        /**
         * Constructs a new CmdScanStatus.
         * @param [properties] Properties to set
         */
        constructor(properties?: scan.ICmdScanStatus);

        /**
         * Creates a new CmdScanStatus instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CmdScanStatus instance
         */
        public static create(properties?: scan.ICmdScanStatus): scan.CmdScanStatus;

        /**
         * Encodes the specified CmdScanStatus message. Does not implicitly {@link scan.CmdScanStatus.verify|verify} messages.
         * @param message CmdScanStatus message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: scan.ICmdScanStatus, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CmdScanStatus message, length delimited. Does not implicitly {@link scan.CmdScanStatus.verify|verify} messages.
         * @param message CmdScanStatus message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: scan.ICmdScanStatus, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CmdScanStatus message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CmdScanStatus
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): scan.CmdScanStatus;

        /**
         * Decodes a CmdScanStatus message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CmdScanStatus
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): scan.CmdScanStatus;

        /**
         * Verifies a CmdScanStatus message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CmdScanStatus message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CmdScanStatus
         */
        public static fromObject(object: { [k: string]: any }): scan.CmdScanStatus;

        /**
         * Creates a plain object from a CmdScanStatus message. Also converts values to other types if specified.
         * @param message CmdScanStatus
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: scan.CmdScanStatus, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CmdScanStatus to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for CmdScanStatus
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a RespScanStatus. */
    interface IRespScanStatus {

        /** RespScanStatus scanFinished */
        scanFinished?: (boolean|null);

        /** RespScanStatus resultCount */
        resultCount?: (number|null);
    }

    /** Represents a RespScanStatus. */
    class RespScanStatus implements IRespScanStatus {

        /**
         * Constructs a new RespScanStatus.
         * @param [properties] Properties to set
         */
        constructor(properties?: scan.IRespScanStatus);

        /** RespScanStatus scanFinished. */
        public scanFinished: boolean;

        /** RespScanStatus resultCount. */
        public resultCount: number;

        /**
         * Creates a new RespScanStatus instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RespScanStatus instance
         */
        public static create(properties?: scan.IRespScanStatus): scan.RespScanStatus;

        /**
         * Encodes the specified RespScanStatus message. Does not implicitly {@link scan.RespScanStatus.verify|verify} messages.
         * @param message RespScanStatus message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: scan.IRespScanStatus, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RespScanStatus message, length delimited. Does not implicitly {@link scan.RespScanStatus.verify|verify} messages.
         * @param message RespScanStatus message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: scan.IRespScanStatus, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RespScanStatus message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RespScanStatus
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): scan.RespScanStatus;

        /**
         * Decodes a RespScanStatus message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RespScanStatus
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): scan.RespScanStatus;

        /**
         * Verifies a RespScanStatus message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RespScanStatus message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RespScanStatus
         */
        public static fromObject(object: { [k: string]: any }): scan.RespScanStatus;

        /**
         * Creates a plain object from a RespScanStatus message. Also converts values to other types if specified.
         * @param message RespScanStatus
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: scan.RespScanStatus, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RespScanStatus to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for RespScanStatus
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a CmdScanResult. */
    interface ICmdScanResult {

        /** CmdScanResult startIndex */
        startIndex?: (number|null);

        /** CmdScanResult count */
        count?: (number|null);
    }

    /** Represents a CmdScanResult. */
    class CmdScanResult implements ICmdScanResult {

        /**
         * Constructs a new CmdScanResult.
         * @param [properties] Properties to set
         */
        constructor(properties?: scan.ICmdScanResult);

        /** CmdScanResult startIndex. */
        public startIndex: number;

        /** CmdScanResult count. */
        public count: number;

        /**
         * Creates a new CmdScanResult instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CmdScanResult instance
         */
        public static create(properties?: scan.ICmdScanResult): scan.CmdScanResult;

        /**
         * Encodes the specified CmdScanResult message. Does not implicitly {@link scan.CmdScanResult.verify|verify} messages.
         * @param message CmdScanResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: scan.ICmdScanResult, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CmdScanResult message, length delimited. Does not implicitly {@link scan.CmdScanResult.verify|verify} messages.
         * @param message CmdScanResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: scan.ICmdScanResult, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CmdScanResult message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CmdScanResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): scan.CmdScanResult;

        /**
         * Decodes a CmdScanResult message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CmdScanResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): scan.CmdScanResult;

        /**
         * Verifies a CmdScanResult message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CmdScanResult message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CmdScanResult
         */
        public static fromObject(object: { [k: string]: any }): scan.CmdScanResult;

        /**
         * Creates a plain object from a CmdScanResult message. Also converts values to other types if specified.
         * @param message CmdScanResult
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: scan.CmdScanResult, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CmdScanResult to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for CmdScanResult
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a WiFiScanResult. */
    interface IWiFiScanResult {

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

    /** Represents a WiFiScanResult. */
    class WiFiScanResult implements IWiFiScanResult {

        /**
         * Constructs a new WiFiScanResult.
         * @param [properties] Properties to set
         */
        constructor(properties?: scan.IWiFiScanResult);

        /** WiFiScanResult ssid. */
        public ssid: Uint8Array;

        /** WiFiScanResult channel. */
        public channel: number;

        /** WiFiScanResult rssi. */
        public rssi: number;

        /** WiFiScanResult bssid. */
        public bssid: Uint8Array;

        /** WiFiScanResult auth. */
        public auth: constants.WifiAuthMode;

        /**
         * Creates a new WiFiScanResult instance using the specified properties.
         * @param [properties] Properties to set
         * @returns WiFiScanResult instance
         */
        public static create(properties?: scan.IWiFiScanResult): scan.WiFiScanResult;

        /**
         * Encodes the specified WiFiScanResult message. Does not implicitly {@link scan.WiFiScanResult.verify|verify} messages.
         * @param message WiFiScanResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: scan.IWiFiScanResult, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified WiFiScanResult message, length delimited. Does not implicitly {@link scan.WiFiScanResult.verify|verify} messages.
         * @param message WiFiScanResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: scan.IWiFiScanResult, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a WiFiScanResult message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns WiFiScanResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): scan.WiFiScanResult;

        /**
         * Decodes a WiFiScanResult message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns WiFiScanResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): scan.WiFiScanResult;

        /**
         * Verifies a WiFiScanResult message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a WiFiScanResult message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns WiFiScanResult
         */
        public static fromObject(object: { [k: string]: any }): scan.WiFiScanResult;

        /**
         * Creates a plain object from a WiFiScanResult message. Also converts values to other types if specified.
         * @param message WiFiScanResult
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: scan.WiFiScanResult, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this WiFiScanResult to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for WiFiScanResult
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a RespScanResult. */
    interface IRespScanResult {

        /** RespScanResult entries */
        entries?: (scan.IWiFiScanResult[]|null);
    }

    /** Represents a RespScanResult. */
    class RespScanResult implements IRespScanResult {

        /**
         * Constructs a new RespScanResult.
         * @param [properties] Properties to set
         */
        constructor(properties?: scan.IRespScanResult);

        /** RespScanResult entries. */
        public entries: scan.IWiFiScanResult[];

        /**
         * Creates a new RespScanResult instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RespScanResult instance
         */
        public static create(properties?: scan.IRespScanResult): scan.RespScanResult;

        /**
         * Encodes the specified RespScanResult message. Does not implicitly {@link scan.RespScanResult.verify|verify} messages.
         * @param message RespScanResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: scan.IRespScanResult, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RespScanResult message, length delimited. Does not implicitly {@link scan.RespScanResult.verify|verify} messages.
         * @param message RespScanResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: scan.IRespScanResult, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RespScanResult message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RespScanResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): scan.RespScanResult;

        /**
         * Decodes a RespScanResult message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RespScanResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): scan.RespScanResult;

        /**
         * Verifies a RespScanResult message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RespScanResult message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RespScanResult
         */
        public static fromObject(object: { [k: string]: any }): scan.RespScanResult;

        /**
         * Creates a plain object from a RespScanResult message. Also converts values to other types if specified.
         * @param message RespScanResult
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: scan.RespScanResult, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RespScanResult to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for RespScanResult
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** WiFiScanMsgType enum. */
    enum WiFiScanMsgType {
        TypeCmdScanStart = 0,
        TypeRespScanStart = 1,
        TypeCmdScanStatus = 2,
        TypeRespScanStatus = 3,
        TypeCmdScanResult = 4,
        TypeRespScanResult = 5
    }

    /** Properties of a WiFiScanPayload. */
    interface IWiFiScanPayload {

        /** WiFiScanPayload msg */
        msg?: (scan.WiFiScanMsgType|null);

        /** WiFiScanPayload status */
        status?: (constants.Status|null);

        /** WiFiScanPayload cmdScanStart */
        cmdScanStart?: (scan.ICmdScanStart|null);

        /** WiFiScanPayload respScanStart */
        respScanStart?: (scan.IRespScanStart|null);

        /** WiFiScanPayload cmdScanStatus */
        cmdScanStatus?: (scan.ICmdScanStatus|null);

        /** WiFiScanPayload respScanStatus */
        respScanStatus?: (scan.IRespScanStatus|null);

        /** WiFiScanPayload cmdScanResult */
        cmdScanResult?: (scan.ICmdScanResult|null);

        /** WiFiScanPayload respScanResult */
        respScanResult?: (scan.IRespScanResult|null);
    }

    /** Represents a WiFiScanPayload. */
    class WiFiScanPayload implements IWiFiScanPayload {

        /**
         * Constructs a new WiFiScanPayload.
         * @param [properties] Properties to set
         */
        constructor(properties?: scan.IWiFiScanPayload);

        /** WiFiScanPayload msg. */
        public msg: scan.WiFiScanMsgType;

        /** WiFiScanPayload status. */
        public status: constants.Status;

        /** WiFiScanPayload cmdScanStart. */
        public cmdScanStart?: (scan.ICmdScanStart|null);

        /** WiFiScanPayload respScanStart. */
        public respScanStart?: (scan.IRespScanStart|null);

        /** WiFiScanPayload cmdScanStatus. */
        public cmdScanStatus?: (scan.ICmdScanStatus|null);

        /** WiFiScanPayload respScanStatus. */
        public respScanStatus?: (scan.IRespScanStatus|null);

        /** WiFiScanPayload cmdScanResult. */
        public cmdScanResult?: (scan.ICmdScanResult|null);

        /** WiFiScanPayload respScanResult. */
        public respScanResult?: (scan.IRespScanResult|null);

        /** WiFiScanPayload payload. */
        public payload?: ("cmdScanStart"|"respScanStart"|"cmdScanStatus"|"respScanStatus"|"cmdScanResult"|"respScanResult");

        /**
         * Creates a new WiFiScanPayload instance using the specified properties.
         * @param [properties] Properties to set
         * @returns WiFiScanPayload instance
         */
        public static create(properties?: scan.IWiFiScanPayload): scan.WiFiScanPayload;

        /**
         * Encodes the specified WiFiScanPayload message. Does not implicitly {@link scan.WiFiScanPayload.verify|verify} messages.
         * @param message WiFiScanPayload message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: scan.IWiFiScanPayload, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified WiFiScanPayload message, length delimited. Does not implicitly {@link scan.WiFiScanPayload.verify|verify} messages.
         * @param message WiFiScanPayload message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: scan.IWiFiScanPayload, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a WiFiScanPayload message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns WiFiScanPayload
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): scan.WiFiScanPayload;

        /**
         * Decodes a WiFiScanPayload message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns WiFiScanPayload
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): scan.WiFiScanPayload;

        /**
         * Verifies a WiFiScanPayload message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a WiFiScanPayload message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns WiFiScanPayload
         */
        public static fromObject(object: { [k: string]: any }): scan.WiFiScanPayload;

        /**
         * Creates a plain object from a WiFiScanPayload message. Also converts values to other types if specified.
         * @param message WiFiScanPayload
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: scan.WiFiScanPayload, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this WiFiScanPayload to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for WiFiScanPayload
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }
}
