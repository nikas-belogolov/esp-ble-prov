/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.constants = (function() {

    /**
     * Namespace constants.
     * @exports constants
     * @namespace
     */
    var constants = {};

    /**
     * Status enum.
     * @name constants.Status
     * @enum {number}
     * @property {number} Success=0 Success value
     * @property {number} InvalidSecScheme=1 InvalidSecScheme value
     * @property {number} InvalidProto=2 InvalidProto value
     * @property {number} TooManySessions=3 TooManySessions value
     * @property {number} InvalidArgument=4 InvalidArgument value
     * @property {number} InternalError=5 InternalError value
     * @property {number} CryptoError=6 CryptoError value
     * @property {number} InvalidSession=7 InvalidSession value
     */
    constants.Status = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "Success"] = 0;
        values[valuesById[1] = "InvalidSecScheme"] = 1;
        values[valuesById[2] = "InvalidProto"] = 2;
        values[valuesById[3] = "TooManySessions"] = 3;
        values[valuesById[4] = "InvalidArgument"] = 4;
        values[valuesById[5] = "InternalError"] = 5;
        values[valuesById[6] = "CryptoError"] = 6;
        values[valuesById[7] = "InvalidSession"] = 7;
        return values;
    })();

    /**
     * WifiStationState enum.
     * @name constants.WifiStationState
     * @enum {number}
     * @property {number} Connected=0 Connected value
     * @property {number} Connecting=1 Connecting value
     * @property {number} Disconnected=2 Disconnected value
     * @property {number} ConnectionFailed=3 ConnectionFailed value
     */
    constants.WifiStationState = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "Connected"] = 0;
        values[valuesById[1] = "Connecting"] = 1;
        values[valuesById[2] = "Disconnected"] = 2;
        values[valuesById[3] = "ConnectionFailed"] = 3;
        return values;
    })();

    /**
     * WifiConnectFailedReason enum.
     * @name constants.WifiConnectFailedReason
     * @enum {number}
     * @property {number} AuthError=0 AuthError value
     * @property {number} NetworkNotFound=1 NetworkNotFound value
     */
    constants.WifiConnectFailedReason = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "AuthError"] = 0;
        values[valuesById[1] = "NetworkNotFound"] = 1;
        return values;
    })();

    constants.WifiAttemptFailed = (function() {

        /**
         * Properties of a WifiAttemptFailed.
         * @memberof constants
         * @interface IWifiAttemptFailed
         * @property {number|null} [attemptsRemaining] WifiAttemptFailed attemptsRemaining
         */

        /**
         * Constructs a new WifiAttemptFailed.
         * @memberof constants
         * @classdesc Represents a WifiAttemptFailed.
         * @implements IWifiAttemptFailed
         * @constructor
         * @param {constants.IWifiAttemptFailed=} [properties] Properties to set
         */
        function WifiAttemptFailed(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * WifiAttemptFailed attemptsRemaining.
         * @member {number} attemptsRemaining
         * @memberof constants.WifiAttemptFailed
         * @instance
         */
        WifiAttemptFailed.prototype.attemptsRemaining = 0;

        /**
         * Creates a new WifiAttemptFailed instance using the specified properties.
         * @function create
         * @memberof constants.WifiAttemptFailed
         * @static
         * @param {constants.IWifiAttemptFailed=} [properties] Properties to set
         * @returns {constants.WifiAttemptFailed} WifiAttemptFailed instance
         */
        WifiAttemptFailed.create = function create(properties) {
            return new WifiAttemptFailed(properties);
        };

        /**
         * Encodes the specified WifiAttemptFailed message. Does not implicitly {@link constants.WifiAttemptFailed.verify|verify} messages.
         * @function encode
         * @memberof constants.WifiAttemptFailed
         * @static
         * @param {constants.IWifiAttemptFailed} message WifiAttemptFailed message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        WifiAttemptFailed.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.attemptsRemaining != null && Object.hasOwnProperty.call(message, "attemptsRemaining"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.attemptsRemaining);
            return writer;
        };

        /**
         * Encodes the specified WifiAttemptFailed message, length delimited. Does not implicitly {@link constants.WifiAttemptFailed.verify|verify} messages.
         * @function encodeDelimited
         * @memberof constants.WifiAttemptFailed
         * @static
         * @param {constants.IWifiAttemptFailed} message WifiAttemptFailed message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        WifiAttemptFailed.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a WifiAttemptFailed message from the specified reader or buffer.
         * @function decode
         * @memberof constants.WifiAttemptFailed
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {constants.WifiAttemptFailed} WifiAttemptFailed
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        WifiAttemptFailed.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.constants.WifiAttemptFailed();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.attemptsRemaining = reader.uint32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a WifiAttemptFailed message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof constants.WifiAttemptFailed
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {constants.WifiAttemptFailed} WifiAttemptFailed
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        WifiAttemptFailed.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a WifiAttemptFailed message.
         * @function verify
         * @memberof constants.WifiAttemptFailed
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        WifiAttemptFailed.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.attemptsRemaining != null && message.hasOwnProperty("attemptsRemaining"))
                if (!$util.isInteger(message.attemptsRemaining))
                    return "attemptsRemaining: integer expected";
            return null;
        };

        /**
         * Creates a WifiAttemptFailed message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof constants.WifiAttemptFailed
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {constants.WifiAttemptFailed} WifiAttemptFailed
         */
        WifiAttemptFailed.fromObject = function fromObject(object) {
            if (object instanceof $root.constants.WifiAttemptFailed)
                return object;
            var message = new $root.constants.WifiAttemptFailed();
            if (object.attemptsRemaining != null)
                message.attemptsRemaining = object.attemptsRemaining >>> 0;
            return message;
        };

        /**
         * Creates a plain object from a WifiAttemptFailed message. Also converts values to other types if specified.
         * @function toObject
         * @memberof constants.WifiAttemptFailed
         * @static
         * @param {constants.WifiAttemptFailed} message WifiAttemptFailed
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        WifiAttemptFailed.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.attemptsRemaining = 0;
            if (message.attemptsRemaining != null && message.hasOwnProperty("attemptsRemaining"))
                object.attemptsRemaining = message.attemptsRemaining;
            return object;
        };

        /**
         * Converts this WifiAttemptFailed to JSON.
         * @function toJSON
         * @memberof constants.WifiAttemptFailed
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        WifiAttemptFailed.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for WifiAttemptFailed
         * @function getTypeUrl
         * @memberof constants.WifiAttemptFailed
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        WifiAttemptFailed.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/constants.WifiAttemptFailed";
        };

        return WifiAttemptFailed;
    })();

    /**
     * WifiAuthMode enum.
     * @name constants.WifiAuthMode
     * @enum {number}
     * @property {number} Open=0 Open value
     * @property {number} WEP=1 WEP value
     * @property {number} WPA_PSK=2 WPA_PSK value
     * @property {number} WPA2_PSK=3 WPA2_PSK value
     * @property {number} WPA_WPA2_PSK=4 WPA_WPA2_PSK value
     * @property {number} WPA2_ENTERPRISE=5 WPA2_ENTERPRISE value
     * @property {number} WPA3_PSK=6 WPA3_PSK value
     * @property {number} WPA2_WPA3_PSK=7 WPA2_WPA3_PSK value
     */
    constants.WifiAuthMode = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "Open"] = 0;
        values[valuesById[1] = "WEP"] = 1;
        values[valuesById[2] = "WPA_PSK"] = 2;
        values[valuesById[3] = "WPA2_PSK"] = 3;
        values[valuesById[4] = "WPA_WPA2_PSK"] = 4;
        values[valuesById[5] = "WPA2_ENTERPRISE"] = 5;
        values[valuesById[6] = "WPA3_PSK"] = 6;
        values[valuesById[7] = "WPA2_WPA3_PSK"] = 7;
        return values;
    })();

    constants.WifiConnectedState = (function() {

        /**
         * Properties of a WifiConnectedState.
         * @memberof constants
         * @interface IWifiConnectedState
         * @property {string|null} [ip4Addr] WifiConnectedState ip4Addr
         * @property {constants.WifiAuthMode|null} [authMode] WifiConnectedState authMode
         * @property {Uint8Array|null} [ssid] WifiConnectedState ssid
         * @property {Uint8Array|null} [bssid] WifiConnectedState bssid
         * @property {number|null} [channel] WifiConnectedState channel
         */

        /**
         * Constructs a new WifiConnectedState.
         * @memberof constants
         * @classdesc Represents a WifiConnectedState.
         * @implements IWifiConnectedState
         * @constructor
         * @param {constants.IWifiConnectedState=} [properties] Properties to set
         */
        function WifiConnectedState(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * WifiConnectedState ip4Addr.
         * @member {string} ip4Addr
         * @memberof constants.WifiConnectedState
         * @instance
         */
        WifiConnectedState.prototype.ip4Addr = "";

        /**
         * WifiConnectedState authMode.
         * @member {constants.WifiAuthMode} authMode
         * @memberof constants.WifiConnectedState
         * @instance
         */
        WifiConnectedState.prototype.authMode = 0;

        /**
         * WifiConnectedState ssid.
         * @member {Uint8Array} ssid
         * @memberof constants.WifiConnectedState
         * @instance
         */
        WifiConnectedState.prototype.ssid = $util.newBuffer([]);

        /**
         * WifiConnectedState bssid.
         * @member {Uint8Array} bssid
         * @memberof constants.WifiConnectedState
         * @instance
         */
        WifiConnectedState.prototype.bssid = $util.newBuffer([]);

        /**
         * WifiConnectedState channel.
         * @member {number} channel
         * @memberof constants.WifiConnectedState
         * @instance
         */
        WifiConnectedState.prototype.channel = 0;

        /**
         * Creates a new WifiConnectedState instance using the specified properties.
         * @function create
         * @memberof constants.WifiConnectedState
         * @static
         * @param {constants.IWifiConnectedState=} [properties] Properties to set
         * @returns {constants.WifiConnectedState} WifiConnectedState instance
         */
        WifiConnectedState.create = function create(properties) {
            return new WifiConnectedState(properties);
        };

        /**
         * Encodes the specified WifiConnectedState message. Does not implicitly {@link constants.WifiConnectedState.verify|verify} messages.
         * @function encode
         * @memberof constants.WifiConnectedState
         * @static
         * @param {constants.IWifiConnectedState} message WifiConnectedState message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        WifiConnectedState.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.ip4Addr != null && Object.hasOwnProperty.call(message, "ip4Addr"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.ip4Addr);
            if (message.authMode != null && Object.hasOwnProperty.call(message, "authMode"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.authMode);
            if (message.ssid != null && Object.hasOwnProperty.call(message, "ssid"))
                writer.uint32(/* id 3, wireType 2 =*/26).bytes(message.ssid);
            if (message.bssid != null && Object.hasOwnProperty.call(message, "bssid"))
                writer.uint32(/* id 4, wireType 2 =*/34).bytes(message.bssid);
            if (message.channel != null && Object.hasOwnProperty.call(message, "channel"))
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.channel);
            return writer;
        };

        /**
         * Encodes the specified WifiConnectedState message, length delimited. Does not implicitly {@link constants.WifiConnectedState.verify|verify} messages.
         * @function encodeDelimited
         * @memberof constants.WifiConnectedState
         * @static
         * @param {constants.IWifiConnectedState} message WifiConnectedState message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        WifiConnectedState.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a WifiConnectedState message from the specified reader or buffer.
         * @function decode
         * @memberof constants.WifiConnectedState
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {constants.WifiConnectedState} WifiConnectedState
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        WifiConnectedState.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.constants.WifiConnectedState();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.ip4Addr = reader.string();
                        break;
                    }
                case 2: {
                        message.authMode = reader.int32();
                        break;
                    }
                case 3: {
                        message.ssid = reader.bytes();
                        break;
                    }
                case 4: {
                        message.bssid = reader.bytes();
                        break;
                    }
                case 5: {
                        message.channel = reader.int32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a WifiConnectedState message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof constants.WifiConnectedState
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {constants.WifiConnectedState} WifiConnectedState
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        WifiConnectedState.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a WifiConnectedState message.
         * @function verify
         * @memberof constants.WifiConnectedState
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        WifiConnectedState.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.ip4Addr != null && message.hasOwnProperty("ip4Addr"))
                if (!$util.isString(message.ip4Addr))
                    return "ip4Addr: string expected";
            if (message.authMode != null && message.hasOwnProperty("authMode"))
                switch (message.authMode) {
                default:
                    return "authMode: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                case 6:
                case 7:
                    break;
                }
            if (message.ssid != null && message.hasOwnProperty("ssid"))
                if (!(message.ssid && typeof message.ssid.length === "number" || $util.isString(message.ssid)))
                    return "ssid: buffer expected";
            if (message.bssid != null && message.hasOwnProperty("bssid"))
                if (!(message.bssid && typeof message.bssid.length === "number" || $util.isString(message.bssid)))
                    return "bssid: buffer expected";
            if (message.channel != null && message.hasOwnProperty("channel"))
                if (!$util.isInteger(message.channel))
                    return "channel: integer expected";
            return null;
        };

        /**
         * Creates a WifiConnectedState message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof constants.WifiConnectedState
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {constants.WifiConnectedState} WifiConnectedState
         */
        WifiConnectedState.fromObject = function fromObject(object) {
            if (object instanceof $root.constants.WifiConnectedState)
                return object;
            var message = new $root.constants.WifiConnectedState();
            if (object.ip4Addr != null)
                message.ip4Addr = String(object.ip4Addr);
            switch (object.authMode) {
            default:
                if (typeof object.authMode === "number") {
                    message.authMode = object.authMode;
                    break;
                }
                break;
            case "Open":
            case 0:
                message.authMode = 0;
                break;
            case "WEP":
            case 1:
                message.authMode = 1;
                break;
            case "WPA_PSK":
            case 2:
                message.authMode = 2;
                break;
            case "WPA2_PSK":
            case 3:
                message.authMode = 3;
                break;
            case "WPA_WPA2_PSK":
            case 4:
                message.authMode = 4;
                break;
            case "WPA2_ENTERPRISE":
            case 5:
                message.authMode = 5;
                break;
            case "WPA3_PSK":
            case 6:
                message.authMode = 6;
                break;
            case "WPA2_WPA3_PSK":
            case 7:
                message.authMode = 7;
                break;
            }
            if (object.ssid != null)
                if (typeof object.ssid === "string")
                    $util.base64.decode(object.ssid, message.ssid = $util.newBuffer($util.base64.length(object.ssid)), 0);
                else if (object.ssid.length >= 0)
                    message.ssid = object.ssid;
            if (object.bssid != null)
                if (typeof object.bssid === "string")
                    $util.base64.decode(object.bssid, message.bssid = $util.newBuffer($util.base64.length(object.bssid)), 0);
                else if (object.bssid.length >= 0)
                    message.bssid = object.bssid;
            if (object.channel != null)
                message.channel = object.channel | 0;
            return message;
        };

        /**
         * Creates a plain object from a WifiConnectedState message. Also converts values to other types if specified.
         * @function toObject
         * @memberof constants.WifiConnectedState
         * @static
         * @param {constants.WifiConnectedState} message WifiConnectedState
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        WifiConnectedState.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.ip4Addr = "";
                object.authMode = options.enums === String ? "Open" : 0;
                if (options.bytes === String)
                    object.ssid = "";
                else {
                    object.ssid = [];
                    if (options.bytes !== Array)
                        object.ssid = $util.newBuffer(object.ssid);
                }
                if (options.bytes === String)
                    object.bssid = "";
                else {
                    object.bssid = [];
                    if (options.bytes !== Array)
                        object.bssid = $util.newBuffer(object.bssid);
                }
                object.channel = 0;
            }
            if (message.ip4Addr != null && message.hasOwnProperty("ip4Addr"))
                object.ip4Addr = message.ip4Addr;
            if (message.authMode != null && message.hasOwnProperty("authMode"))
                object.authMode = options.enums === String ? $root.constants.WifiAuthMode[message.authMode] === undefined ? message.authMode : $root.constants.WifiAuthMode[message.authMode] : message.authMode;
            if (message.ssid != null && message.hasOwnProperty("ssid"))
                object.ssid = options.bytes === String ? $util.base64.encode(message.ssid, 0, message.ssid.length) : options.bytes === Array ? Array.prototype.slice.call(message.ssid) : message.ssid;
            if (message.bssid != null && message.hasOwnProperty("bssid"))
                object.bssid = options.bytes === String ? $util.base64.encode(message.bssid, 0, message.bssid.length) : options.bytes === Array ? Array.prototype.slice.call(message.bssid) : message.bssid;
            if (message.channel != null && message.hasOwnProperty("channel"))
                object.channel = message.channel;
            return object;
        };

        /**
         * Converts this WifiConnectedState to JSON.
         * @function toJSON
         * @memberof constants.WifiConnectedState
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        WifiConnectedState.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for WifiConnectedState
         * @function getTypeUrl
         * @memberof constants.WifiConnectedState
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        WifiConnectedState.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/constants.WifiConnectedState";
        };

        return WifiConnectedState;
    })();

    return constants;
})();

$root.security0 = (function() {

    /**
     * Namespace security0.
     * @exports security0
     * @namespace
     */
    var security0 = {};

    security0.S0SessionCmd = (function() {

        /**
         * Properties of a S0SessionCmd.
         * @memberof security0
         * @interface IS0SessionCmd
         */

        /**
         * Constructs a new S0SessionCmd.
         * @memberof security0
         * @classdesc Represents a S0SessionCmd.
         * @implements IS0SessionCmd
         * @constructor
         * @param {security0.IS0SessionCmd=} [properties] Properties to set
         */
        function S0SessionCmd(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new S0SessionCmd instance using the specified properties.
         * @function create
         * @memberof security0.S0SessionCmd
         * @static
         * @param {security0.IS0SessionCmd=} [properties] Properties to set
         * @returns {security0.S0SessionCmd} S0SessionCmd instance
         */
        S0SessionCmd.create = function create(properties) {
            return new S0SessionCmd(properties);
        };

        /**
         * Encodes the specified S0SessionCmd message. Does not implicitly {@link security0.S0SessionCmd.verify|verify} messages.
         * @function encode
         * @memberof security0.S0SessionCmd
         * @static
         * @param {security0.IS0SessionCmd} message S0SessionCmd message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        S0SessionCmd.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified S0SessionCmd message, length delimited. Does not implicitly {@link security0.S0SessionCmd.verify|verify} messages.
         * @function encodeDelimited
         * @memberof security0.S0SessionCmd
         * @static
         * @param {security0.IS0SessionCmd} message S0SessionCmd message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        S0SessionCmd.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a S0SessionCmd message from the specified reader or buffer.
         * @function decode
         * @memberof security0.S0SessionCmd
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {security0.S0SessionCmd} S0SessionCmd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        S0SessionCmd.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.security0.S0SessionCmd();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a S0SessionCmd message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof security0.S0SessionCmd
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {security0.S0SessionCmd} S0SessionCmd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        S0SessionCmd.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a S0SessionCmd message.
         * @function verify
         * @memberof security0.S0SessionCmd
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        S0SessionCmd.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates a S0SessionCmd message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof security0.S0SessionCmd
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {security0.S0SessionCmd} S0SessionCmd
         */
        S0SessionCmd.fromObject = function fromObject(object) {
            if (object instanceof $root.security0.S0SessionCmd)
                return object;
            return new $root.security0.S0SessionCmd();
        };

        /**
         * Creates a plain object from a S0SessionCmd message. Also converts values to other types if specified.
         * @function toObject
         * @memberof security0.S0SessionCmd
         * @static
         * @param {security0.S0SessionCmd} message S0SessionCmd
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        S0SessionCmd.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this S0SessionCmd to JSON.
         * @function toJSON
         * @memberof security0.S0SessionCmd
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        S0SessionCmd.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for S0SessionCmd
         * @function getTypeUrl
         * @memberof security0.S0SessionCmd
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        S0SessionCmd.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/security0.S0SessionCmd";
        };

        return S0SessionCmd;
    })();

    security0.S0SessionResp = (function() {

        /**
         * Properties of a S0SessionResp.
         * @memberof security0
         * @interface IS0SessionResp
         * @property {constants.Status|null} [status] S0SessionResp status
         */

        /**
         * Constructs a new S0SessionResp.
         * @memberof security0
         * @classdesc Represents a S0SessionResp.
         * @implements IS0SessionResp
         * @constructor
         * @param {security0.IS0SessionResp=} [properties] Properties to set
         */
        function S0SessionResp(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * S0SessionResp status.
         * @member {constants.Status} status
         * @memberof security0.S0SessionResp
         * @instance
         */
        S0SessionResp.prototype.status = 0;

        /**
         * Creates a new S0SessionResp instance using the specified properties.
         * @function create
         * @memberof security0.S0SessionResp
         * @static
         * @param {security0.IS0SessionResp=} [properties] Properties to set
         * @returns {security0.S0SessionResp} S0SessionResp instance
         */
        S0SessionResp.create = function create(properties) {
            return new S0SessionResp(properties);
        };

        /**
         * Encodes the specified S0SessionResp message. Does not implicitly {@link security0.S0SessionResp.verify|verify} messages.
         * @function encode
         * @memberof security0.S0SessionResp
         * @static
         * @param {security0.IS0SessionResp} message S0SessionResp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        S0SessionResp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.status != null && Object.hasOwnProperty.call(message, "status"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.status);
            return writer;
        };

        /**
         * Encodes the specified S0SessionResp message, length delimited. Does not implicitly {@link security0.S0SessionResp.verify|verify} messages.
         * @function encodeDelimited
         * @memberof security0.S0SessionResp
         * @static
         * @param {security0.IS0SessionResp} message S0SessionResp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        S0SessionResp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a S0SessionResp message from the specified reader or buffer.
         * @function decode
         * @memberof security0.S0SessionResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {security0.S0SessionResp} S0SessionResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        S0SessionResp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.security0.S0SessionResp();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.status = reader.int32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a S0SessionResp message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof security0.S0SessionResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {security0.S0SessionResp} S0SessionResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        S0SessionResp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a S0SessionResp message.
         * @function verify
         * @memberof security0.S0SessionResp
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        S0SessionResp.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.status != null && message.hasOwnProperty("status"))
                switch (message.status) {
                default:
                    return "status: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                case 6:
                case 7:
                    break;
                }
            return null;
        };

        /**
         * Creates a S0SessionResp message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof security0.S0SessionResp
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {security0.S0SessionResp} S0SessionResp
         */
        S0SessionResp.fromObject = function fromObject(object) {
            if (object instanceof $root.security0.S0SessionResp)
                return object;
            var message = new $root.security0.S0SessionResp();
            switch (object.status) {
            default:
                if (typeof object.status === "number") {
                    message.status = object.status;
                    break;
                }
                break;
            case "Success":
            case 0:
                message.status = 0;
                break;
            case "InvalidSecScheme":
            case 1:
                message.status = 1;
                break;
            case "InvalidProto":
            case 2:
                message.status = 2;
                break;
            case "TooManySessions":
            case 3:
                message.status = 3;
                break;
            case "InvalidArgument":
            case 4:
                message.status = 4;
                break;
            case "InternalError":
            case 5:
                message.status = 5;
                break;
            case "CryptoError":
            case 6:
                message.status = 6;
                break;
            case "InvalidSession":
            case 7:
                message.status = 7;
                break;
            }
            return message;
        };

        /**
         * Creates a plain object from a S0SessionResp message. Also converts values to other types if specified.
         * @function toObject
         * @memberof security0.S0SessionResp
         * @static
         * @param {security0.S0SessionResp} message S0SessionResp
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        S0SessionResp.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.status = options.enums === String ? "Success" : 0;
            if (message.status != null && message.hasOwnProperty("status"))
                object.status = options.enums === String ? $root.constants.Status[message.status] === undefined ? message.status : $root.constants.Status[message.status] : message.status;
            return object;
        };

        /**
         * Converts this S0SessionResp to JSON.
         * @function toJSON
         * @memberof security0.S0SessionResp
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        S0SessionResp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for S0SessionResp
         * @function getTypeUrl
         * @memberof security0.S0SessionResp
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        S0SessionResp.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/security0.S0SessionResp";
        };

        return S0SessionResp;
    })();

    /**
     * Sec0MsgType enum.
     * @name security0.Sec0MsgType
     * @enum {number}
     * @property {number} S0_Session_Command=0 S0_Session_Command value
     * @property {number} S0_Session_Response=1 S0_Session_Response value
     */
    security0.Sec0MsgType = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "S0_Session_Command"] = 0;
        values[valuesById[1] = "S0_Session_Response"] = 1;
        return values;
    })();

    security0.Sec0Payload = (function() {

        /**
         * Properties of a Sec0Payload.
         * @memberof security0
         * @interface ISec0Payload
         * @property {security0.Sec0MsgType|null} [msg] Sec0Payload msg
         * @property {security0.IS0SessionCmd|null} [sc] Sec0Payload sc
         * @property {security0.IS0SessionResp|null} [sr] Sec0Payload sr
         */

        /**
         * Constructs a new Sec0Payload.
         * @memberof security0
         * @classdesc Represents a Sec0Payload.
         * @implements ISec0Payload
         * @constructor
         * @param {security0.ISec0Payload=} [properties] Properties to set
         */
        function Sec0Payload(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Sec0Payload msg.
         * @member {security0.Sec0MsgType} msg
         * @memberof security0.Sec0Payload
         * @instance
         */
        Sec0Payload.prototype.msg = 0;

        /**
         * Sec0Payload sc.
         * @member {security0.IS0SessionCmd|null|undefined} sc
         * @memberof security0.Sec0Payload
         * @instance
         */
        Sec0Payload.prototype.sc = null;

        /**
         * Sec0Payload sr.
         * @member {security0.IS0SessionResp|null|undefined} sr
         * @memberof security0.Sec0Payload
         * @instance
         */
        Sec0Payload.prototype.sr = null;

        // OneOf field names bound to virtual getters and setters
        var $oneOfFields;

        /**
         * Sec0Payload payload.
         * @member {"sc"|"sr"|undefined} payload
         * @memberof security0.Sec0Payload
         * @instance
         */
        Object.defineProperty(Sec0Payload.prototype, "payload", {
            get: $util.oneOfGetter($oneOfFields = ["sc", "sr"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new Sec0Payload instance using the specified properties.
         * @function create
         * @memberof security0.Sec0Payload
         * @static
         * @param {security0.ISec0Payload=} [properties] Properties to set
         * @returns {security0.Sec0Payload} Sec0Payload instance
         */
        Sec0Payload.create = function create(properties) {
            return new Sec0Payload(properties);
        };

        /**
         * Encodes the specified Sec0Payload message. Does not implicitly {@link security0.Sec0Payload.verify|verify} messages.
         * @function encode
         * @memberof security0.Sec0Payload
         * @static
         * @param {security0.ISec0Payload} message Sec0Payload message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Sec0Payload.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.msg != null && Object.hasOwnProperty.call(message, "msg"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.msg);
            if (message.sc != null && Object.hasOwnProperty.call(message, "sc"))
                $root.security0.S0SessionCmd.encode(message.sc, writer.uint32(/* id 20, wireType 2 =*/162).fork()).ldelim();
            if (message.sr != null && Object.hasOwnProperty.call(message, "sr"))
                $root.security0.S0SessionResp.encode(message.sr, writer.uint32(/* id 21, wireType 2 =*/170).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified Sec0Payload message, length delimited. Does not implicitly {@link security0.Sec0Payload.verify|verify} messages.
         * @function encodeDelimited
         * @memberof security0.Sec0Payload
         * @static
         * @param {security0.ISec0Payload} message Sec0Payload message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Sec0Payload.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Sec0Payload message from the specified reader or buffer.
         * @function decode
         * @memberof security0.Sec0Payload
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {security0.Sec0Payload} Sec0Payload
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Sec0Payload.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.security0.Sec0Payload();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.msg = reader.int32();
                        break;
                    }
                case 20: {
                        message.sc = $root.security0.S0SessionCmd.decode(reader, reader.uint32());
                        break;
                    }
                case 21: {
                        message.sr = $root.security0.S0SessionResp.decode(reader, reader.uint32());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Sec0Payload message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof security0.Sec0Payload
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {security0.Sec0Payload} Sec0Payload
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Sec0Payload.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Sec0Payload message.
         * @function verify
         * @memberof security0.Sec0Payload
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Sec0Payload.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            var properties = {};
            if (message.msg != null && message.hasOwnProperty("msg"))
                switch (message.msg) {
                default:
                    return "msg: enum value expected";
                case 0:
                case 1:
                    break;
                }
            if (message.sc != null && message.hasOwnProperty("sc")) {
                properties.payload = 1;
                {
                    var error = $root.security0.S0SessionCmd.verify(message.sc);
                    if (error)
                        return "sc." + error;
                }
            }
            if (message.sr != null && message.hasOwnProperty("sr")) {
                if (properties.payload === 1)
                    return "payload: multiple values";
                properties.payload = 1;
                {
                    var error = $root.security0.S0SessionResp.verify(message.sr);
                    if (error)
                        return "sr." + error;
                }
            }
            return null;
        };

        /**
         * Creates a Sec0Payload message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof security0.Sec0Payload
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {security0.Sec0Payload} Sec0Payload
         */
        Sec0Payload.fromObject = function fromObject(object) {
            if (object instanceof $root.security0.Sec0Payload)
                return object;
            var message = new $root.security0.Sec0Payload();
            switch (object.msg) {
            default:
                if (typeof object.msg === "number") {
                    message.msg = object.msg;
                    break;
                }
                break;
            case "S0_Session_Command":
            case 0:
                message.msg = 0;
                break;
            case "S0_Session_Response":
            case 1:
                message.msg = 1;
                break;
            }
            if (object.sc != null) {
                if (typeof object.sc !== "object")
                    throw TypeError(".security0.Sec0Payload.sc: object expected");
                message.sc = $root.security0.S0SessionCmd.fromObject(object.sc);
            }
            if (object.sr != null) {
                if (typeof object.sr !== "object")
                    throw TypeError(".security0.Sec0Payload.sr: object expected");
                message.sr = $root.security0.S0SessionResp.fromObject(object.sr);
            }
            return message;
        };

        /**
         * Creates a plain object from a Sec0Payload message. Also converts values to other types if specified.
         * @function toObject
         * @memberof security0.Sec0Payload
         * @static
         * @param {security0.Sec0Payload} message Sec0Payload
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Sec0Payload.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.msg = options.enums === String ? "S0_Session_Command" : 0;
            if (message.msg != null && message.hasOwnProperty("msg"))
                object.msg = options.enums === String ? $root.security0.Sec0MsgType[message.msg] === undefined ? message.msg : $root.security0.Sec0MsgType[message.msg] : message.msg;
            if (message.sc != null && message.hasOwnProperty("sc")) {
                object.sc = $root.security0.S0SessionCmd.toObject(message.sc, options);
                if (options.oneofs)
                    object.payload = "sc";
            }
            if (message.sr != null && message.hasOwnProperty("sr")) {
                object.sr = $root.security0.S0SessionResp.toObject(message.sr, options);
                if (options.oneofs)
                    object.payload = "sr";
            }
            return object;
        };

        /**
         * Converts this Sec0Payload to JSON.
         * @function toJSON
         * @memberof security0.Sec0Payload
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Sec0Payload.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Sec0Payload
         * @function getTypeUrl
         * @memberof security0.Sec0Payload
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Sec0Payload.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/security0.Sec0Payload";
        };

        return Sec0Payload;
    })();

    return security0;
})();

$root.security1 = (function() {

    /**
     * Namespace security1.
     * @exports security1
     * @namespace
     */
    var security1 = {};

    security1.SessionCmd1 = (function() {

        /**
         * Properties of a SessionCmd1.
         * @memberof security1
         * @interface ISessionCmd1
         * @property {Uint8Array|null} [clientVerifyData] SessionCmd1 clientVerifyData
         */

        /**
         * Constructs a new SessionCmd1.
         * @memberof security1
         * @classdesc Represents a SessionCmd1.
         * @implements ISessionCmd1
         * @constructor
         * @param {security1.ISessionCmd1=} [properties] Properties to set
         */
        function SessionCmd1(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SessionCmd1 clientVerifyData.
         * @member {Uint8Array} clientVerifyData
         * @memberof security1.SessionCmd1
         * @instance
         */
        SessionCmd1.prototype.clientVerifyData = $util.newBuffer([]);

        /**
         * Creates a new SessionCmd1 instance using the specified properties.
         * @function create
         * @memberof security1.SessionCmd1
         * @static
         * @param {security1.ISessionCmd1=} [properties] Properties to set
         * @returns {security1.SessionCmd1} SessionCmd1 instance
         */
        SessionCmd1.create = function create(properties) {
            return new SessionCmd1(properties);
        };

        /**
         * Encodes the specified SessionCmd1 message. Does not implicitly {@link security1.SessionCmd1.verify|verify} messages.
         * @function encode
         * @memberof security1.SessionCmd1
         * @static
         * @param {security1.ISessionCmd1} message SessionCmd1 message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SessionCmd1.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.clientVerifyData != null && Object.hasOwnProperty.call(message, "clientVerifyData"))
                writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.clientVerifyData);
            return writer;
        };

        /**
         * Encodes the specified SessionCmd1 message, length delimited. Does not implicitly {@link security1.SessionCmd1.verify|verify} messages.
         * @function encodeDelimited
         * @memberof security1.SessionCmd1
         * @static
         * @param {security1.ISessionCmd1} message SessionCmd1 message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SessionCmd1.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SessionCmd1 message from the specified reader or buffer.
         * @function decode
         * @memberof security1.SessionCmd1
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {security1.SessionCmd1} SessionCmd1
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SessionCmd1.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.security1.SessionCmd1();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 2: {
                        message.clientVerifyData = reader.bytes();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a SessionCmd1 message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof security1.SessionCmd1
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {security1.SessionCmd1} SessionCmd1
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SessionCmd1.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SessionCmd1 message.
         * @function verify
         * @memberof security1.SessionCmd1
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SessionCmd1.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.clientVerifyData != null && message.hasOwnProperty("clientVerifyData"))
                if (!(message.clientVerifyData && typeof message.clientVerifyData.length === "number" || $util.isString(message.clientVerifyData)))
                    return "clientVerifyData: buffer expected";
            return null;
        };

        /**
         * Creates a SessionCmd1 message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof security1.SessionCmd1
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {security1.SessionCmd1} SessionCmd1
         */
        SessionCmd1.fromObject = function fromObject(object) {
            if (object instanceof $root.security1.SessionCmd1)
                return object;
            var message = new $root.security1.SessionCmd1();
            if (object.clientVerifyData != null)
                if (typeof object.clientVerifyData === "string")
                    $util.base64.decode(object.clientVerifyData, message.clientVerifyData = $util.newBuffer($util.base64.length(object.clientVerifyData)), 0);
                else if (object.clientVerifyData.length >= 0)
                    message.clientVerifyData = object.clientVerifyData;
            return message;
        };

        /**
         * Creates a plain object from a SessionCmd1 message. Also converts values to other types if specified.
         * @function toObject
         * @memberof security1.SessionCmd1
         * @static
         * @param {security1.SessionCmd1} message SessionCmd1
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SessionCmd1.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                if (options.bytes === String)
                    object.clientVerifyData = "";
                else {
                    object.clientVerifyData = [];
                    if (options.bytes !== Array)
                        object.clientVerifyData = $util.newBuffer(object.clientVerifyData);
                }
            if (message.clientVerifyData != null && message.hasOwnProperty("clientVerifyData"))
                object.clientVerifyData = options.bytes === String ? $util.base64.encode(message.clientVerifyData, 0, message.clientVerifyData.length) : options.bytes === Array ? Array.prototype.slice.call(message.clientVerifyData) : message.clientVerifyData;
            return object;
        };

        /**
         * Converts this SessionCmd1 to JSON.
         * @function toJSON
         * @memberof security1.SessionCmd1
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SessionCmd1.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for SessionCmd1
         * @function getTypeUrl
         * @memberof security1.SessionCmd1
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        SessionCmd1.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/security1.SessionCmd1";
        };

        return SessionCmd1;
    })();

    security1.SessionResp1 = (function() {

        /**
         * Properties of a SessionResp1.
         * @memberof security1
         * @interface ISessionResp1
         * @property {constants.Status|null} [status] SessionResp1 status
         * @property {Uint8Array|null} [deviceVerifyData] SessionResp1 deviceVerifyData
         */

        /**
         * Constructs a new SessionResp1.
         * @memberof security1
         * @classdesc Represents a SessionResp1.
         * @implements ISessionResp1
         * @constructor
         * @param {security1.ISessionResp1=} [properties] Properties to set
         */
        function SessionResp1(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SessionResp1 status.
         * @member {constants.Status} status
         * @memberof security1.SessionResp1
         * @instance
         */
        SessionResp1.prototype.status = 0;

        /**
         * SessionResp1 deviceVerifyData.
         * @member {Uint8Array} deviceVerifyData
         * @memberof security1.SessionResp1
         * @instance
         */
        SessionResp1.prototype.deviceVerifyData = $util.newBuffer([]);

        /**
         * Creates a new SessionResp1 instance using the specified properties.
         * @function create
         * @memberof security1.SessionResp1
         * @static
         * @param {security1.ISessionResp1=} [properties] Properties to set
         * @returns {security1.SessionResp1} SessionResp1 instance
         */
        SessionResp1.create = function create(properties) {
            return new SessionResp1(properties);
        };

        /**
         * Encodes the specified SessionResp1 message. Does not implicitly {@link security1.SessionResp1.verify|verify} messages.
         * @function encode
         * @memberof security1.SessionResp1
         * @static
         * @param {security1.ISessionResp1} message SessionResp1 message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SessionResp1.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.status != null && Object.hasOwnProperty.call(message, "status"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.status);
            if (message.deviceVerifyData != null && Object.hasOwnProperty.call(message, "deviceVerifyData"))
                writer.uint32(/* id 3, wireType 2 =*/26).bytes(message.deviceVerifyData);
            return writer;
        };

        /**
         * Encodes the specified SessionResp1 message, length delimited. Does not implicitly {@link security1.SessionResp1.verify|verify} messages.
         * @function encodeDelimited
         * @memberof security1.SessionResp1
         * @static
         * @param {security1.ISessionResp1} message SessionResp1 message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SessionResp1.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SessionResp1 message from the specified reader or buffer.
         * @function decode
         * @memberof security1.SessionResp1
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {security1.SessionResp1} SessionResp1
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SessionResp1.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.security1.SessionResp1();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.status = reader.int32();
                        break;
                    }
                case 3: {
                        message.deviceVerifyData = reader.bytes();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a SessionResp1 message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof security1.SessionResp1
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {security1.SessionResp1} SessionResp1
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SessionResp1.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SessionResp1 message.
         * @function verify
         * @memberof security1.SessionResp1
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SessionResp1.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.status != null && message.hasOwnProperty("status"))
                switch (message.status) {
                default:
                    return "status: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                case 6:
                case 7:
                    break;
                }
            if (message.deviceVerifyData != null && message.hasOwnProperty("deviceVerifyData"))
                if (!(message.deviceVerifyData && typeof message.deviceVerifyData.length === "number" || $util.isString(message.deviceVerifyData)))
                    return "deviceVerifyData: buffer expected";
            return null;
        };

        /**
         * Creates a SessionResp1 message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof security1.SessionResp1
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {security1.SessionResp1} SessionResp1
         */
        SessionResp1.fromObject = function fromObject(object) {
            if (object instanceof $root.security1.SessionResp1)
                return object;
            var message = new $root.security1.SessionResp1();
            switch (object.status) {
            default:
                if (typeof object.status === "number") {
                    message.status = object.status;
                    break;
                }
                break;
            case "Success":
            case 0:
                message.status = 0;
                break;
            case "InvalidSecScheme":
            case 1:
                message.status = 1;
                break;
            case "InvalidProto":
            case 2:
                message.status = 2;
                break;
            case "TooManySessions":
            case 3:
                message.status = 3;
                break;
            case "InvalidArgument":
            case 4:
                message.status = 4;
                break;
            case "InternalError":
            case 5:
                message.status = 5;
                break;
            case "CryptoError":
            case 6:
                message.status = 6;
                break;
            case "InvalidSession":
            case 7:
                message.status = 7;
                break;
            }
            if (object.deviceVerifyData != null)
                if (typeof object.deviceVerifyData === "string")
                    $util.base64.decode(object.deviceVerifyData, message.deviceVerifyData = $util.newBuffer($util.base64.length(object.deviceVerifyData)), 0);
                else if (object.deviceVerifyData.length >= 0)
                    message.deviceVerifyData = object.deviceVerifyData;
            return message;
        };

        /**
         * Creates a plain object from a SessionResp1 message. Also converts values to other types if specified.
         * @function toObject
         * @memberof security1.SessionResp1
         * @static
         * @param {security1.SessionResp1} message SessionResp1
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SessionResp1.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.status = options.enums === String ? "Success" : 0;
                if (options.bytes === String)
                    object.deviceVerifyData = "";
                else {
                    object.deviceVerifyData = [];
                    if (options.bytes !== Array)
                        object.deviceVerifyData = $util.newBuffer(object.deviceVerifyData);
                }
            }
            if (message.status != null && message.hasOwnProperty("status"))
                object.status = options.enums === String ? $root.constants.Status[message.status] === undefined ? message.status : $root.constants.Status[message.status] : message.status;
            if (message.deviceVerifyData != null && message.hasOwnProperty("deviceVerifyData"))
                object.deviceVerifyData = options.bytes === String ? $util.base64.encode(message.deviceVerifyData, 0, message.deviceVerifyData.length) : options.bytes === Array ? Array.prototype.slice.call(message.deviceVerifyData) : message.deviceVerifyData;
            return object;
        };

        /**
         * Converts this SessionResp1 to JSON.
         * @function toJSON
         * @memberof security1.SessionResp1
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SessionResp1.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for SessionResp1
         * @function getTypeUrl
         * @memberof security1.SessionResp1
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        SessionResp1.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/security1.SessionResp1";
        };

        return SessionResp1;
    })();

    security1.SessionCmd0 = (function() {

        /**
         * Properties of a SessionCmd0.
         * @memberof security1
         * @interface ISessionCmd0
         * @property {Uint8Array|null} [clientPubkey] SessionCmd0 clientPubkey
         */

        /**
         * Constructs a new SessionCmd0.
         * @memberof security1
         * @classdesc Represents a SessionCmd0.
         * @implements ISessionCmd0
         * @constructor
         * @param {security1.ISessionCmd0=} [properties] Properties to set
         */
        function SessionCmd0(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SessionCmd0 clientPubkey.
         * @member {Uint8Array} clientPubkey
         * @memberof security1.SessionCmd0
         * @instance
         */
        SessionCmd0.prototype.clientPubkey = $util.newBuffer([]);

        /**
         * Creates a new SessionCmd0 instance using the specified properties.
         * @function create
         * @memberof security1.SessionCmd0
         * @static
         * @param {security1.ISessionCmd0=} [properties] Properties to set
         * @returns {security1.SessionCmd0} SessionCmd0 instance
         */
        SessionCmd0.create = function create(properties) {
            return new SessionCmd0(properties);
        };

        /**
         * Encodes the specified SessionCmd0 message. Does not implicitly {@link security1.SessionCmd0.verify|verify} messages.
         * @function encode
         * @memberof security1.SessionCmd0
         * @static
         * @param {security1.ISessionCmd0} message SessionCmd0 message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SessionCmd0.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.clientPubkey != null && Object.hasOwnProperty.call(message, "clientPubkey"))
                writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.clientPubkey);
            return writer;
        };

        /**
         * Encodes the specified SessionCmd0 message, length delimited. Does not implicitly {@link security1.SessionCmd0.verify|verify} messages.
         * @function encodeDelimited
         * @memberof security1.SessionCmd0
         * @static
         * @param {security1.ISessionCmd0} message SessionCmd0 message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SessionCmd0.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SessionCmd0 message from the specified reader or buffer.
         * @function decode
         * @memberof security1.SessionCmd0
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {security1.SessionCmd0} SessionCmd0
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SessionCmd0.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.security1.SessionCmd0();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.clientPubkey = reader.bytes();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a SessionCmd0 message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof security1.SessionCmd0
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {security1.SessionCmd0} SessionCmd0
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SessionCmd0.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SessionCmd0 message.
         * @function verify
         * @memberof security1.SessionCmd0
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SessionCmd0.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.clientPubkey != null && message.hasOwnProperty("clientPubkey"))
                if (!(message.clientPubkey && typeof message.clientPubkey.length === "number" || $util.isString(message.clientPubkey)))
                    return "clientPubkey: buffer expected";
            return null;
        };

        /**
         * Creates a SessionCmd0 message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof security1.SessionCmd0
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {security1.SessionCmd0} SessionCmd0
         */
        SessionCmd0.fromObject = function fromObject(object) {
            if (object instanceof $root.security1.SessionCmd0)
                return object;
            var message = new $root.security1.SessionCmd0();
            if (object.clientPubkey != null)
                if (typeof object.clientPubkey === "string")
                    $util.base64.decode(object.clientPubkey, message.clientPubkey = $util.newBuffer($util.base64.length(object.clientPubkey)), 0);
                else if (object.clientPubkey.length >= 0)
                    message.clientPubkey = object.clientPubkey;
            return message;
        };

        /**
         * Creates a plain object from a SessionCmd0 message. Also converts values to other types if specified.
         * @function toObject
         * @memberof security1.SessionCmd0
         * @static
         * @param {security1.SessionCmd0} message SessionCmd0
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SessionCmd0.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                if (options.bytes === String)
                    object.clientPubkey = "";
                else {
                    object.clientPubkey = [];
                    if (options.bytes !== Array)
                        object.clientPubkey = $util.newBuffer(object.clientPubkey);
                }
            if (message.clientPubkey != null && message.hasOwnProperty("clientPubkey"))
                object.clientPubkey = options.bytes === String ? $util.base64.encode(message.clientPubkey, 0, message.clientPubkey.length) : options.bytes === Array ? Array.prototype.slice.call(message.clientPubkey) : message.clientPubkey;
            return object;
        };

        /**
         * Converts this SessionCmd0 to JSON.
         * @function toJSON
         * @memberof security1.SessionCmd0
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SessionCmd0.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for SessionCmd0
         * @function getTypeUrl
         * @memberof security1.SessionCmd0
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        SessionCmd0.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/security1.SessionCmd0";
        };

        return SessionCmd0;
    })();

    security1.SessionResp0 = (function() {

        /**
         * Properties of a SessionResp0.
         * @memberof security1
         * @interface ISessionResp0
         * @property {constants.Status|null} [status] SessionResp0 status
         * @property {Uint8Array|null} [devicePubkey] SessionResp0 devicePubkey
         * @property {Uint8Array|null} [deviceRandom] SessionResp0 deviceRandom
         */

        /**
         * Constructs a new SessionResp0.
         * @memberof security1
         * @classdesc Represents a SessionResp0.
         * @implements ISessionResp0
         * @constructor
         * @param {security1.ISessionResp0=} [properties] Properties to set
         */
        function SessionResp0(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SessionResp0 status.
         * @member {constants.Status} status
         * @memberof security1.SessionResp0
         * @instance
         */
        SessionResp0.prototype.status = 0;

        /**
         * SessionResp0 devicePubkey.
         * @member {Uint8Array} devicePubkey
         * @memberof security1.SessionResp0
         * @instance
         */
        SessionResp0.prototype.devicePubkey = $util.newBuffer([]);

        /**
         * SessionResp0 deviceRandom.
         * @member {Uint8Array} deviceRandom
         * @memberof security1.SessionResp0
         * @instance
         */
        SessionResp0.prototype.deviceRandom = $util.newBuffer([]);

        /**
         * Creates a new SessionResp0 instance using the specified properties.
         * @function create
         * @memberof security1.SessionResp0
         * @static
         * @param {security1.ISessionResp0=} [properties] Properties to set
         * @returns {security1.SessionResp0} SessionResp0 instance
         */
        SessionResp0.create = function create(properties) {
            return new SessionResp0(properties);
        };

        /**
         * Encodes the specified SessionResp0 message. Does not implicitly {@link security1.SessionResp0.verify|verify} messages.
         * @function encode
         * @memberof security1.SessionResp0
         * @static
         * @param {security1.ISessionResp0} message SessionResp0 message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SessionResp0.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.status != null && Object.hasOwnProperty.call(message, "status"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.status);
            if (message.devicePubkey != null && Object.hasOwnProperty.call(message, "devicePubkey"))
                writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.devicePubkey);
            if (message.deviceRandom != null && Object.hasOwnProperty.call(message, "deviceRandom"))
                writer.uint32(/* id 3, wireType 2 =*/26).bytes(message.deviceRandom);
            return writer;
        };

        /**
         * Encodes the specified SessionResp0 message, length delimited. Does not implicitly {@link security1.SessionResp0.verify|verify} messages.
         * @function encodeDelimited
         * @memberof security1.SessionResp0
         * @static
         * @param {security1.ISessionResp0} message SessionResp0 message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SessionResp0.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SessionResp0 message from the specified reader or buffer.
         * @function decode
         * @memberof security1.SessionResp0
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {security1.SessionResp0} SessionResp0
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SessionResp0.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.security1.SessionResp0();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.status = reader.int32();
                        break;
                    }
                case 2: {
                        message.devicePubkey = reader.bytes();
                        break;
                    }
                case 3: {
                        message.deviceRandom = reader.bytes();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a SessionResp0 message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof security1.SessionResp0
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {security1.SessionResp0} SessionResp0
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SessionResp0.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SessionResp0 message.
         * @function verify
         * @memberof security1.SessionResp0
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SessionResp0.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.status != null && message.hasOwnProperty("status"))
                switch (message.status) {
                default:
                    return "status: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                case 6:
                case 7:
                    break;
                }
            if (message.devicePubkey != null && message.hasOwnProperty("devicePubkey"))
                if (!(message.devicePubkey && typeof message.devicePubkey.length === "number" || $util.isString(message.devicePubkey)))
                    return "devicePubkey: buffer expected";
            if (message.deviceRandom != null && message.hasOwnProperty("deviceRandom"))
                if (!(message.deviceRandom && typeof message.deviceRandom.length === "number" || $util.isString(message.deviceRandom)))
                    return "deviceRandom: buffer expected";
            return null;
        };

        /**
         * Creates a SessionResp0 message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof security1.SessionResp0
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {security1.SessionResp0} SessionResp0
         */
        SessionResp0.fromObject = function fromObject(object) {
            if (object instanceof $root.security1.SessionResp0)
                return object;
            var message = new $root.security1.SessionResp0();
            switch (object.status) {
            default:
                if (typeof object.status === "number") {
                    message.status = object.status;
                    break;
                }
                break;
            case "Success":
            case 0:
                message.status = 0;
                break;
            case "InvalidSecScheme":
            case 1:
                message.status = 1;
                break;
            case "InvalidProto":
            case 2:
                message.status = 2;
                break;
            case "TooManySessions":
            case 3:
                message.status = 3;
                break;
            case "InvalidArgument":
            case 4:
                message.status = 4;
                break;
            case "InternalError":
            case 5:
                message.status = 5;
                break;
            case "CryptoError":
            case 6:
                message.status = 6;
                break;
            case "InvalidSession":
            case 7:
                message.status = 7;
                break;
            }
            if (object.devicePubkey != null)
                if (typeof object.devicePubkey === "string")
                    $util.base64.decode(object.devicePubkey, message.devicePubkey = $util.newBuffer($util.base64.length(object.devicePubkey)), 0);
                else if (object.devicePubkey.length >= 0)
                    message.devicePubkey = object.devicePubkey;
            if (object.deviceRandom != null)
                if (typeof object.deviceRandom === "string")
                    $util.base64.decode(object.deviceRandom, message.deviceRandom = $util.newBuffer($util.base64.length(object.deviceRandom)), 0);
                else if (object.deviceRandom.length >= 0)
                    message.deviceRandom = object.deviceRandom;
            return message;
        };

        /**
         * Creates a plain object from a SessionResp0 message. Also converts values to other types if specified.
         * @function toObject
         * @memberof security1.SessionResp0
         * @static
         * @param {security1.SessionResp0} message SessionResp0
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SessionResp0.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.status = options.enums === String ? "Success" : 0;
                if (options.bytes === String)
                    object.devicePubkey = "";
                else {
                    object.devicePubkey = [];
                    if (options.bytes !== Array)
                        object.devicePubkey = $util.newBuffer(object.devicePubkey);
                }
                if (options.bytes === String)
                    object.deviceRandom = "";
                else {
                    object.deviceRandom = [];
                    if (options.bytes !== Array)
                        object.deviceRandom = $util.newBuffer(object.deviceRandom);
                }
            }
            if (message.status != null && message.hasOwnProperty("status"))
                object.status = options.enums === String ? $root.constants.Status[message.status] === undefined ? message.status : $root.constants.Status[message.status] : message.status;
            if (message.devicePubkey != null && message.hasOwnProperty("devicePubkey"))
                object.devicePubkey = options.bytes === String ? $util.base64.encode(message.devicePubkey, 0, message.devicePubkey.length) : options.bytes === Array ? Array.prototype.slice.call(message.devicePubkey) : message.devicePubkey;
            if (message.deviceRandom != null && message.hasOwnProperty("deviceRandom"))
                object.deviceRandom = options.bytes === String ? $util.base64.encode(message.deviceRandom, 0, message.deviceRandom.length) : options.bytes === Array ? Array.prototype.slice.call(message.deviceRandom) : message.deviceRandom;
            return object;
        };

        /**
         * Converts this SessionResp0 to JSON.
         * @function toJSON
         * @memberof security1.SessionResp0
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SessionResp0.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for SessionResp0
         * @function getTypeUrl
         * @memberof security1.SessionResp0
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        SessionResp0.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/security1.SessionResp0";
        };

        return SessionResp0;
    })();

    /**
     * Sec1MsgType enum.
     * @name security1.Sec1MsgType
     * @enum {number}
     * @property {number} Session_Command0=0 Session_Command0 value
     * @property {number} Session_Response0=1 Session_Response0 value
     * @property {number} Session_Command1=2 Session_Command1 value
     * @property {number} Session_Response1=3 Session_Response1 value
     */
    security1.Sec1MsgType = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "Session_Command0"] = 0;
        values[valuesById[1] = "Session_Response0"] = 1;
        values[valuesById[2] = "Session_Command1"] = 2;
        values[valuesById[3] = "Session_Response1"] = 3;
        return values;
    })();

    security1.Sec1Payload = (function() {

        /**
         * Properties of a Sec1Payload.
         * @memberof security1
         * @interface ISec1Payload
         * @property {security1.Sec1MsgType|null} [msg] Sec1Payload msg
         * @property {security1.ISessionCmd0|null} [sc0] Sec1Payload sc0
         * @property {security1.ISessionResp0|null} [sr0] Sec1Payload sr0
         * @property {security1.ISessionCmd1|null} [sc1] Sec1Payload sc1
         * @property {security1.ISessionResp1|null} [sr1] Sec1Payload sr1
         */

        /**
         * Constructs a new Sec1Payload.
         * @memberof security1
         * @classdesc Represents a Sec1Payload.
         * @implements ISec1Payload
         * @constructor
         * @param {security1.ISec1Payload=} [properties] Properties to set
         */
        function Sec1Payload(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Sec1Payload msg.
         * @member {security1.Sec1MsgType} msg
         * @memberof security1.Sec1Payload
         * @instance
         */
        Sec1Payload.prototype.msg = 0;

        /**
         * Sec1Payload sc0.
         * @member {security1.ISessionCmd0|null|undefined} sc0
         * @memberof security1.Sec1Payload
         * @instance
         */
        Sec1Payload.prototype.sc0 = null;

        /**
         * Sec1Payload sr0.
         * @member {security1.ISessionResp0|null|undefined} sr0
         * @memberof security1.Sec1Payload
         * @instance
         */
        Sec1Payload.prototype.sr0 = null;

        /**
         * Sec1Payload sc1.
         * @member {security1.ISessionCmd1|null|undefined} sc1
         * @memberof security1.Sec1Payload
         * @instance
         */
        Sec1Payload.prototype.sc1 = null;

        /**
         * Sec1Payload sr1.
         * @member {security1.ISessionResp1|null|undefined} sr1
         * @memberof security1.Sec1Payload
         * @instance
         */
        Sec1Payload.prototype.sr1 = null;

        // OneOf field names bound to virtual getters and setters
        var $oneOfFields;

        /**
         * Sec1Payload payload.
         * @member {"sc0"|"sr0"|"sc1"|"sr1"|undefined} payload
         * @memberof security1.Sec1Payload
         * @instance
         */
        Object.defineProperty(Sec1Payload.prototype, "payload", {
            get: $util.oneOfGetter($oneOfFields = ["sc0", "sr0", "sc1", "sr1"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new Sec1Payload instance using the specified properties.
         * @function create
         * @memberof security1.Sec1Payload
         * @static
         * @param {security1.ISec1Payload=} [properties] Properties to set
         * @returns {security1.Sec1Payload} Sec1Payload instance
         */
        Sec1Payload.create = function create(properties) {
            return new Sec1Payload(properties);
        };

        /**
         * Encodes the specified Sec1Payload message. Does not implicitly {@link security1.Sec1Payload.verify|verify} messages.
         * @function encode
         * @memberof security1.Sec1Payload
         * @static
         * @param {security1.ISec1Payload} message Sec1Payload message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Sec1Payload.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.msg != null && Object.hasOwnProperty.call(message, "msg"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.msg);
            if (message.sc0 != null && Object.hasOwnProperty.call(message, "sc0"))
                $root.security1.SessionCmd0.encode(message.sc0, writer.uint32(/* id 20, wireType 2 =*/162).fork()).ldelim();
            if (message.sr0 != null && Object.hasOwnProperty.call(message, "sr0"))
                $root.security1.SessionResp0.encode(message.sr0, writer.uint32(/* id 21, wireType 2 =*/170).fork()).ldelim();
            if (message.sc1 != null && Object.hasOwnProperty.call(message, "sc1"))
                $root.security1.SessionCmd1.encode(message.sc1, writer.uint32(/* id 22, wireType 2 =*/178).fork()).ldelim();
            if (message.sr1 != null && Object.hasOwnProperty.call(message, "sr1"))
                $root.security1.SessionResp1.encode(message.sr1, writer.uint32(/* id 23, wireType 2 =*/186).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified Sec1Payload message, length delimited. Does not implicitly {@link security1.Sec1Payload.verify|verify} messages.
         * @function encodeDelimited
         * @memberof security1.Sec1Payload
         * @static
         * @param {security1.ISec1Payload} message Sec1Payload message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Sec1Payload.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Sec1Payload message from the specified reader or buffer.
         * @function decode
         * @memberof security1.Sec1Payload
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {security1.Sec1Payload} Sec1Payload
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Sec1Payload.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.security1.Sec1Payload();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.msg = reader.int32();
                        break;
                    }
                case 20: {
                        message.sc0 = $root.security1.SessionCmd0.decode(reader, reader.uint32());
                        break;
                    }
                case 21: {
                        message.sr0 = $root.security1.SessionResp0.decode(reader, reader.uint32());
                        break;
                    }
                case 22: {
                        message.sc1 = $root.security1.SessionCmd1.decode(reader, reader.uint32());
                        break;
                    }
                case 23: {
                        message.sr1 = $root.security1.SessionResp1.decode(reader, reader.uint32());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Sec1Payload message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof security1.Sec1Payload
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {security1.Sec1Payload} Sec1Payload
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Sec1Payload.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Sec1Payload message.
         * @function verify
         * @memberof security1.Sec1Payload
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Sec1Payload.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            var properties = {};
            if (message.msg != null && message.hasOwnProperty("msg"))
                switch (message.msg) {
                default:
                    return "msg: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                    break;
                }
            if (message.sc0 != null && message.hasOwnProperty("sc0")) {
                properties.payload = 1;
                {
                    var error = $root.security1.SessionCmd0.verify(message.sc0);
                    if (error)
                        return "sc0." + error;
                }
            }
            if (message.sr0 != null && message.hasOwnProperty("sr0")) {
                if (properties.payload === 1)
                    return "payload: multiple values";
                properties.payload = 1;
                {
                    var error = $root.security1.SessionResp0.verify(message.sr0);
                    if (error)
                        return "sr0." + error;
                }
            }
            if (message.sc1 != null && message.hasOwnProperty("sc1")) {
                if (properties.payload === 1)
                    return "payload: multiple values";
                properties.payload = 1;
                {
                    var error = $root.security1.SessionCmd1.verify(message.sc1);
                    if (error)
                        return "sc1." + error;
                }
            }
            if (message.sr1 != null && message.hasOwnProperty("sr1")) {
                if (properties.payload === 1)
                    return "payload: multiple values";
                properties.payload = 1;
                {
                    var error = $root.security1.SessionResp1.verify(message.sr1);
                    if (error)
                        return "sr1." + error;
                }
            }
            return null;
        };

        /**
         * Creates a Sec1Payload message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof security1.Sec1Payload
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {security1.Sec1Payload} Sec1Payload
         */
        Sec1Payload.fromObject = function fromObject(object) {
            if (object instanceof $root.security1.Sec1Payload)
                return object;
            var message = new $root.security1.Sec1Payload();
            switch (object.msg) {
            default:
                if (typeof object.msg === "number") {
                    message.msg = object.msg;
                    break;
                }
                break;
            case "Session_Command0":
            case 0:
                message.msg = 0;
                break;
            case "Session_Response0":
            case 1:
                message.msg = 1;
                break;
            case "Session_Command1":
            case 2:
                message.msg = 2;
                break;
            case "Session_Response1":
            case 3:
                message.msg = 3;
                break;
            }
            if (object.sc0 != null) {
                if (typeof object.sc0 !== "object")
                    throw TypeError(".security1.Sec1Payload.sc0: object expected");
                message.sc0 = $root.security1.SessionCmd0.fromObject(object.sc0);
            }
            if (object.sr0 != null) {
                if (typeof object.sr0 !== "object")
                    throw TypeError(".security1.Sec1Payload.sr0: object expected");
                message.sr0 = $root.security1.SessionResp0.fromObject(object.sr0);
            }
            if (object.sc1 != null) {
                if (typeof object.sc1 !== "object")
                    throw TypeError(".security1.Sec1Payload.sc1: object expected");
                message.sc1 = $root.security1.SessionCmd1.fromObject(object.sc1);
            }
            if (object.sr1 != null) {
                if (typeof object.sr1 !== "object")
                    throw TypeError(".security1.Sec1Payload.sr1: object expected");
                message.sr1 = $root.security1.SessionResp1.fromObject(object.sr1);
            }
            return message;
        };

        /**
         * Creates a plain object from a Sec1Payload message. Also converts values to other types if specified.
         * @function toObject
         * @memberof security1.Sec1Payload
         * @static
         * @param {security1.Sec1Payload} message Sec1Payload
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Sec1Payload.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.msg = options.enums === String ? "Session_Command0" : 0;
            if (message.msg != null && message.hasOwnProperty("msg"))
                object.msg = options.enums === String ? $root.security1.Sec1MsgType[message.msg] === undefined ? message.msg : $root.security1.Sec1MsgType[message.msg] : message.msg;
            if (message.sc0 != null && message.hasOwnProperty("sc0")) {
                object.sc0 = $root.security1.SessionCmd0.toObject(message.sc0, options);
                if (options.oneofs)
                    object.payload = "sc0";
            }
            if (message.sr0 != null && message.hasOwnProperty("sr0")) {
                object.sr0 = $root.security1.SessionResp0.toObject(message.sr0, options);
                if (options.oneofs)
                    object.payload = "sr0";
            }
            if (message.sc1 != null && message.hasOwnProperty("sc1")) {
                object.sc1 = $root.security1.SessionCmd1.toObject(message.sc1, options);
                if (options.oneofs)
                    object.payload = "sc1";
            }
            if (message.sr1 != null && message.hasOwnProperty("sr1")) {
                object.sr1 = $root.security1.SessionResp1.toObject(message.sr1, options);
                if (options.oneofs)
                    object.payload = "sr1";
            }
            return object;
        };

        /**
         * Converts this Sec1Payload to JSON.
         * @function toJSON
         * @memberof security1.Sec1Payload
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Sec1Payload.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Sec1Payload
         * @function getTypeUrl
         * @memberof security1.Sec1Payload
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Sec1Payload.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/security1.Sec1Payload";
        };

        return Sec1Payload;
    })();

    return security1;
})();

$root.security2 = (function() {

    /**
     * Namespace security2.
     * @exports security2
     * @namespace
     */
    var security2 = {};

    /**
     * Sec2MsgType enum.
     * @name security2.Sec2MsgType
     * @enum {number}
     * @property {number} S2Session_Command0=0 S2Session_Command0 value
     * @property {number} S2Session_Response0=1 S2Session_Response0 value
     * @property {number} S2Session_Command1=2 S2Session_Command1 value
     * @property {number} S2Session_Response1=3 S2Session_Response1 value
     */
    security2.Sec2MsgType = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "S2Session_Command0"] = 0;
        values[valuesById[1] = "S2Session_Response0"] = 1;
        values[valuesById[2] = "S2Session_Command1"] = 2;
        values[valuesById[3] = "S2Session_Response1"] = 3;
        return values;
    })();

    security2.S2SessionCmd0 = (function() {

        /**
         * Properties of a S2SessionCmd0.
         * @memberof security2
         * @interface IS2SessionCmd0
         * @property {Uint8Array|null} [clientUsername] S2SessionCmd0 clientUsername
         * @property {Uint8Array|null} [clientPubkey] S2SessionCmd0 clientPubkey
         */

        /**
         * Constructs a new S2SessionCmd0.
         * @memberof security2
         * @classdesc Represents a S2SessionCmd0.
         * @implements IS2SessionCmd0
         * @constructor
         * @param {security2.IS2SessionCmd0=} [properties] Properties to set
         */
        function S2SessionCmd0(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * S2SessionCmd0 clientUsername.
         * @member {Uint8Array} clientUsername
         * @memberof security2.S2SessionCmd0
         * @instance
         */
        S2SessionCmd0.prototype.clientUsername = $util.newBuffer([]);

        /**
         * S2SessionCmd0 clientPubkey.
         * @member {Uint8Array} clientPubkey
         * @memberof security2.S2SessionCmd0
         * @instance
         */
        S2SessionCmd0.prototype.clientPubkey = $util.newBuffer([]);

        /**
         * Creates a new S2SessionCmd0 instance using the specified properties.
         * @function create
         * @memberof security2.S2SessionCmd0
         * @static
         * @param {security2.IS2SessionCmd0=} [properties] Properties to set
         * @returns {security2.S2SessionCmd0} S2SessionCmd0 instance
         */
        S2SessionCmd0.create = function create(properties) {
            return new S2SessionCmd0(properties);
        };

        /**
         * Encodes the specified S2SessionCmd0 message. Does not implicitly {@link security2.S2SessionCmd0.verify|verify} messages.
         * @function encode
         * @memberof security2.S2SessionCmd0
         * @static
         * @param {security2.IS2SessionCmd0} message S2SessionCmd0 message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        S2SessionCmd0.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.clientUsername != null && Object.hasOwnProperty.call(message, "clientUsername"))
                writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.clientUsername);
            if (message.clientPubkey != null && Object.hasOwnProperty.call(message, "clientPubkey"))
                writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.clientPubkey);
            return writer;
        };

        /**
         * Encodes the specified S2SessionCmd0 message, length delimited. Does not implicitly {@link security2.S2SessionCmd0.verify|verify} messages.
         * @function encodeDelimited
         * @memberof security2.S2SessionCmd0
         * @static
         * @param {security2.IS2SessionCmd0} message S2SessionCmd0 message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        S2SessionCmd0.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a S2SessionCmd0 message from the specified reader or buffer.
         * @function decode
         * @memberof security2.S2SessionCmd0
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {security2.S2SessionCmd0} S2SessionCmd0
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        S2SessionCmd0.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.security2.S2SessionCmd0();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.clientUsername = reader.bytes();
                        break;
                    }
                case 2: {
                        message.clientPubkey = reader.bytes();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a S2SessionCmd0 message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof security2.S2SessionCmd0
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {security2.S2SessionCmd0} S2SessionCmd0
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        S2SessionCmd0.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a S2SessionCmd0 message.
         * @function verify
         * @memberof security2.S2SessionCmd0
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        S2SessionCmd0.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.clientUsername != null && message.hasOwnProperty("clientUsername"))
                if (!(message.clientUsername && typeof message.clientUsername.length === "number" || $util.isString(message.clientUsername)))
                    return "clientUsername: buffer expected";
            if (message.clientPubkey != null && message.hasOwnProperty("clientPubkey"))
                if (!(message.clientPubkey && typeof message.clientPubkey.length === "number" || $util.isString(message.clientPubkey)))
                    return "clientPubkey: buffer expected";
            return null;
        };

        /**
         * Creates a S2SessionCmd0 message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof security2.S2SessionCmd0
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {security2.S2SessionCmd0} S2SessionCmd0
         */
        S2SessionCmd0.fromObject = function fromObject(object) {
            if (object instanceof $root.security2.S2SessionCmd0)
                return object;
            var message = new $root.security2.S2SessionCmd0();
            if (object.clientUsername != null)
                if (typeof object.clientUsername === "string")
                    $util.base64.decode(object.clientUsername, message.clientUsername = $util.newBuffer($util.base64.length(object.clientUsername)), 0);
                else if (object.clientUsername.length >= 0)
                    message.clientUsername = object.clientUsername;
            if (object.clientPubkey != null)
                if (typeof object.clientPubkey === "string")
                    $util.base64.decode(object.clientPubkey, message.clientPubkey = $util.newBuffer($util.base64.length(object.clientPubkey)), 0);
                else if (object.clientPubkey.length >= 0)
                    message.clientPubkey = object.clientPubkey;
            return message;
        };

        /**
         * Creates a plain object from a S2SessionCmd0 message. Also converts values to other types if specified.
         * @function toObject
         * @memberof security2.S2SessionCmd0
         * @static
         * @param {security2.S2SessionCmd0} message S2SessionCmd0
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        S2SessionCmd0.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if (options.bytes === String)
                    object.clientUsername = "";
                else {
                    object.clientUsername = [];
                    if (options.bytes !== Array)
                        object.clientUsername = $util.newBuffer(object.clientUsername);
                }
                if (options.bytes === String)
                    object.clientPubkey = "";
                else {
                    object.clientPubkey = [];
                    if (options.bytes !== Array)
                        object.clientPubkey = $util.newBuffer(object.clientPubkey);
                }
            }
            if (message.clientUsername != null && message.hasOwnProperty("clientUsername"))
                object.clientUsername = options.bytes === String ? $util.base64.encode(message.clientUsername, 0, message.clientUsername.length) : options.bytes === Array ? Array.prototype.slice.call(message.clientUsername) : message.clientUsername;
            if (message.clientPubkey != null && message.hasOwnProperty("clientPubkey"))
                object.clientPubkey = options.bytes === String ? $util.base64.encode(message.clientPubkey, 0, message.clientPubkey.length) : options.bytes === Array ? Array.prototype.slice.call(message.clientPubkey) : message.clientPubkey;
            return object;
        };

        /**
         * Converts this S2SessionCmd0 to JSON.
         * @function toJSON
         * @memberof security2.S2SessionCmd0
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        S2SessionCmd0.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for S2SessionCmd0
         * @function getTypeUrl
         * @memberof security2.S2SessionCmd0
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        S2SessionCmd0.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/security2.S2SessionCmd0";
        };

        return S2SessionCmd0;
    })();

    security2.S2SessionResp0 = (function() {

        /**
         * Properties of a S2SessionResp0.
         * @memberof security2
         * @interface IS2SessionResp0
         * @property {constants.Status|null} [status] S2SessionResp0 status
         * @property {Uint8Array|null} [devicePubkey] S2SessionResp0 devicePubkey
         * @property {Uint8Array|null} [deviceSalt] S2SessionResp0 deviceSalt
         */

        /**
         * Constructs a new S2SessionResp0.
         * @memberof security2
         * @classdesc Represents a S2SessionResp0.
         * @implements IS2SessionResp0
         * @constructor
         * @param {security2.IS2SessionResp0=} [properties] Properties to set
         */
        function S2SessionResp0(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * S2SessionResp0 status.
         * @member {constants.Status} status
         * @memberof security2.S2SessionResp0
         * @instance
         */
        S2SessionResp0.prototype.status = 0;

        /**
         * S2SessionResp0 devicePubkey.
         * @member {Uint8Array} devicePubkey
         * @memberof security2.S2SessionResp0
         * @instance
         */
        S2SessionResp0.prototype.devicePubkey = $util.newBuffer([]);

        /**
         * S2SessionResp0 deviceSalt.
         * @member {Uint8Array} deviceSalt
         * @memberof security2.S2SessionResp0
         * @instance
         */
        S2SessionResp0.prototype.deviceSalt = $util.newBuffer([]);

        /**
         * Creates a new S2SessionResp0 instance using the specified properties.
         * @function create
         * @memberof security2.S2SessionResp0
         * @static
         * @param {security2.IS2SessionResp0=} [properties] Properties to set
         * @returns {security2.S2SessionResp0} S2SessionResp0 instance
         */
        S2SessionResp0.create = function create(properties) {
            return new S2SessionResp0(properties);
        };

        /**
         * Encodes the specified S2SessionResp0 message. Does not implicitly {@link security2.S2SessionResp0.verify|verify} messages.
         * @function encode
         * @memberof security2.S2SessionResp0
         * @static
         * @param {security2.IS2SessionResp0} message S2SessionResp0 message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        S2SessionResp0.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.status != null && Object.hasOwnProperty.call(message, "status"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.status);
            if (message.devicePubkey != null && Object.hasOwnProperty.call(message, "devicePubkey"))
                writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.devicePubkey);
            if (message.deviceSalt != null && Object.hasOwnProperty.call(message, "deviceSalt"))
                writer.uint32(/* id 3, wireType 2 =*/26).bytes(message.deviceSalt);
            return writer;
        };

        /**
         * Encodes the specified S2SessionResp0 message, length delimited. Does not implicitly {@link security2.S2SessionResp0.verify|verify} messages.
         * @function encodeDelimited
         * @memberof security2.S2SessionResp0
         * @static
         * @param {security2.IS2SessionResp0} message S2SessionResp0 message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        S2SessionResp0.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a S2SessionResp0 message from the specified reader or buffer.
         * @function decode
         * @memberof security2.S2SessionResp0
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {security2.S2SessionResp0} S2SessionResp0
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        S2SessionResp0.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.security2.S2SessionResp0();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.status = reader.int32();
                        break;
                    }
                case 2: {
                        message.devicePubkey = reader.bytes();
                        break;
                    }
                case 3: {
                        message.deviceSalt = reader.bytes();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a S2SessionResp0 message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof security2.S2SessionResp0
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {security2.S2SessionResp0} S2SessionResp0
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        S2SessionResp0.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a S2SessionResp0 message.
         * @function verify
         * @memberof security2.S2SessionResp0
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        S2SessionResp0.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.status != null && message.hasOwnProperty("status"))
                switch (message.status) {
                default:
                    return "status: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                case 6:
                case 7:
                    break;
                }
            if (message.devicePubkey != null && message.hasOwnProperty("devicePubkey"))
                if (!(message.devicePubkey && typeof message.devicePubkey.length === "number" || $util.isString(message.devicePubkey)))
                    return "devicePubkey: buffer expected";
            if (message.deviceSalt != null && message.hasOwnProperty("deviceSalt"))
                if (!(message.deviceSalt && typeof message.deviceSalt.length === "number" || $util.isString(message.deviceSalt)))
                    return "deviceSalt: buffer expected";
            return null;
        };

        /**
         * Creates a S2SessionResp0 message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof security2.S2SessionResp0
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {security2.S2SessionResp0} S2SessionResp0
         */
        S2SessionResp0.fromObject = function fromObject(object) {
            if (object instanceof $root.security2.S2SessionResp0)
                return object;
            var message = new $root.security2.S2SessionResp0();
            switch (object.status) {
            default:
                if (typeof object.status === "number") {
                    message.status = object.status;
                    break;
                }
                break;
            case "Success":
            case 0:
                message.status = 0;
                break;
            case "InvalidSecScheme":
            case 1:
                message.status = 1;
                break;
            case "InvalidProto":
            case 2:
                message.status = 2;
                break;
            case "TooManySessions":
            case 3:
                message.status = 3;
                break;
            case "InvalidArgument":
            case 4:
                message.status = 4;
                break;
            case "InternalError":
            case 5:
                message.status = 5;
                break;
            case "CryptoError":
            case 6:
                message.status = 6;
                break;
            case "InvalidSession":
            case 7:
                message.status = 7;
                break;
            }
            if (object.devicePubkey != null)
                if (typeof object.devicePubkey === "string")
                    $util.base64.decode(object.devicePubkey, message.devicePubkey = $util.newBuffer($util.base64.length(object.devicePubkey)), 0);
                else if (object.devicePubkey.length >= 0)
                    message.devicePubkey = object.devicePubkey;
            if (object.deviceSalt != null)
                if (typeof object.deviceSalt === "string")
                    $util.base64.decode(object.deviceSalt, message.deviceSalt = $util.newBuffer($util.base64.length(object.deviceSalt)), 0);
                else if (object.deviceSalt.length >= 0)
                    message.deviceSalt = object.deviceSalt;
            return message;
        };

        /**
         * Creates a plain object from a S2SessionResp0 message. Also converts values to other types if specified.
         * @function toObject
         * @memberof security2.S2SessionResp0
         * @static
         * @param {security2.S2SessionResp0} message S2SessionResp0
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        S2SessionResp0.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.status = options.enums === String ? "Success" : 0;
                if (options.bytes === String)
                    object.devicePubkey = "";
                else {
                    object.devicePubkey = [];
                    if (options.bytes !== Array)
                        object.devicePubkey = $util.newBuffer(object.devicePubkey);
                }
                if (options.bytes === String)
                    object.deviceSalt = "";
                else {
                    object.deviceSalt = [];
                    if (options.bytes !== Array)
                        object.deviceSalt = $util.newBuffer(object.deviceSalt);
                }
            }
            if (message.status != null && message.hasOwnProperty("status"))
                object.status = options.enums === String ? $root.constants.Status[message.status] === undefined ? message.status : $root.constants.Status[message.status] : message.status;
            if (message.devicePubkey != null && message.hasOwnProperty("devicePubkey"))
                object.devicePubkey = options.bytes === String ? $util.base64.encode(message.devicePubkey, 0, message.devicePubkey.length) : options.bytes === Array ? Array.prototype.slice.call(message.devicePubkey) : message.devicePubkey;
            if (message.deviceSalt != null && message.hasOwnProperty("deviceSalt"))
                object.deviceSalt = options.bytes === String ? $util.base64.encode(message.deviceSalt, 0, message.deviceSalt.length) : options.bytes === Array ? Array.prototype.slice.call(message.deviceSalt) : message.deviceSalt;
            return object;
        };

        /**
         * Converts this S2SessionResp0 to JSON.
         * @function toJSON
         * @memberof security2.S2SessionResp0
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        S2SessionResp0.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for S2SessionResp0
         * @function getTypeUrl
         * @memberof security2.S2SessionResp0
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        S2SessionResp0.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/security2.S2SessionResp0";
        };

        return S2SessionResp0;
    })();

    security2.S2SessionCmd1 = (function() {

        /**
         * Properties of a S2SessionCmd1.
         * @memberof security2
         * @interface IS2SessionCmd1
         * @property {Uint8Array|null} [clientProof] S2SessionCmd1 clientProof
         */

        /**
         * Constructs a new S2SessionCmd1.
         * @memberof security2
         * @classdesc Represents a S2SessionCmd1.
         * @implements IS2SessionCmd1
         * @constructor
         * @param {security2.IS2SessionCmd1=} [properties] Properties to set
         */
        function S2SessionCmd1(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * S2SessionCmd1 clientProof.
         * @member {Uint8Array} clientProof
         * @memberof security2.S2SessionCmd1
         * @instance
         */
        S2SessionCmd1.prototype.clientProof = $util.newBuffer([]);

        /**
         * Creates a new S2SessionCmd1 instance using the specified properties.
         * @function create
         * @memberof security2.S2SessionCmd1
         * @static
         * @param {security2.IS2SessionCmd1=} [properties] Properties to set
         * @returns {security2.S2SessionCmd1} S2SessionCmd1 instance
         */
        S2SessionCmd1.create = function create(properties) {
            return new S2SessionCmd1(properties);
        };

        /**
         * Encodes the specified S2SessionCmd1 message. Does not implicitly {@link security2.S2SessionCmd1.verify|verify} messages.
         * @function encode
         * @memberof security2.S2SessionCmd1
         * @static
         * @param {security2.IS2SessionCmd1} message S2SessionCmd1 message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        S2SessionCmd1.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.clientProof != null && Object.hasOwnProperty.call(message, "clientProof"))
                writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.clientProof);
            return writer;
        };

        /**
         * Encodes the specified S2SessionCmd1 message, length delimited. Does not implicitly {@link security2.S2SessionCmd1.verify|verify} messages.
         * @function encodeDelimited
         * @memberof security2.S2SessionCmd1
         * @static
         * @param {security2.IS2SessionCmd1} message S2SessionCmd1 message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        S2SessionCmd1.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a S2SessionCmd1 message from the specified reader or buffer.
         * @function decode
         * @memberof security2.S2SessionCmd1
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {security2.S2SessionCmd1} S2SessionCmd1
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        S2SessionCmd1.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.security2.S2SessionCmd1();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.clientProof = reader.bytes();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a S2SessionCmd1 message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof security2.S2SessionCmd1
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {security2.S2SessionCmd1} S2SessionCmd1
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        S2SessionCmd1.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a S2SessionCmd1 message.
         * @function verify
         * @memberof security2.S2SessionCmd1
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        S2SessionCmd1.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.clientProof != null && message.hasOwnProperty("clientProof"))
                if (!(message.clientProof && typeof message.clientProof.length === "number" || $util.isString(message.clientProof)))
                    return "clientProof: buffer expected";
            return null;
        };

        /**
         * Creates a S2SessionCmd1 message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof security2.S2SessionCmd1
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {security2.S2SessionCmd1} S2SessionCmd1
         */
        S2SessionCmd1.fromObject = function fromObject(object) {
            if (object instanceof $root.security2.S2SessionCmd1)
                return object;
            var message = new $root.security2.S2SessionCmd1();
            if (object.clientProof != null)
                if (typeof object.clientProof === "string")
                    $util.base64.decode(object.clientProof, message.clientProof = $util.newBuffer($util.base64.length(object.clientProof)), 0);
                else if (object.clientProof.length >= 0)
                    message.clientProof = object.clientProof;
            return message;
        };

        /**
         * Creates a plain object from a S2SessionCmd1 message. Also converts values to other types if specified.
         * @function toObject
         * @memberof security2.S2SessionCmd1
         * @static
         * @param {security2.S2SessionCmd1} message S2SessionCmd1
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        S2SessionCmd1.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                if (options.bytes === String)
                    object.clientProof = "";
                else {
                    object.clientProof = [];
                    if (options.bytes !== Array)
                        object.clientProof = $util.newBuffer(object.clientProof);
                }
            if (message.clientProof != null && message.hasOwnProperty("clientProof"))
                object.clientProof = options.bytes === String ? $util.base64.encode(message.clientProof, 0, message.clientProof.length) : options.bytes === Array ? Array.prototype.slice.call(message.clientProof) : message.clientProof;
            return object;
        };

        /**
         * Converts this S2SessionCmd1 to JSON.
         * @function toJSON
         * @memberof security2.S2SessionCmd1
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        S2SessionCmd1.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for S2SessionCmd1
         * @function getTypeUrl
         * @memberof security2.S2SessionCmd1
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        S2SessionCmd1.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/security2.S2SessionCmd1";
        };

        return S2SessionCmd1;
    })();

    security2.S2SessionResp1 = (function() {

        /**
         * Properties of a S2SessionResp1.
         * @memberof security2
         * @interface IS2SessionResp1
         * @property {constants.Status|null} [status] S2SessionResp1 status
         * @property {Uint8Array|null} [deviceProof] S2SessionResp1 deviceProof
         * @property {Uint8Array|null} [deviceNonce] S2SessionResp1 deviceNonce
         */

        /**
         * Constructs a new S2SessionResp1.
         * @memberof security2
         * @classdesc Represents a S2SessionResp1.
         * @implements IS2SessionResp1
         * @constructor
         * @param {security2.IS2SessionResp1=} [properties] Properties to set
         */
        function S2SessionResp1(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * S2SessionResp1 status.
         * @member {constants.Status} status
         * @memberof security2.S2SessionResp1
         * @instance
         */
        S2SessionResp1.prototype.status = 0;

        /**
         * S2SessionResp1 deviceProof.
         * @member {Uint8Array} deviceProof
         * @memberof security2.S2SessionResp1
         * @instance
         */
        S2SessionResp1.prototype.deviceProof = $util.newBuffer([]);

        /**
         * S2SessionResp1 deviceNonce.
         * @member {Uint8Array} deviceNonce
         * @memberof security2.S2SessionResp1
         * @instance
         */
        S2SessionResp1.prototype.deviceNonce = $util.newBuffer([]);

        /**
         * Creates a new S2SessionResp1 instance using the specified properties.
         * @function create
         * @memberof security2.S2SessionResp1
         * @static
         * @param {security2.IS2SessionResp1=} [properties] Properties to set
         * @returns {security2.S2SessionResp1} S2SessionResp1 instance
         */
        S2SessionResp1.create = function create(properties) {
            return new S2SessionResp1(properties);
        };

        /**
         * Encodes the specified S2SessionResp1 message. Does not implicitly {@link security2.S2SessionResp1.verify|verify} messages.
         * @function encode
         * @memberof security2.S2SessionResp1
         * @static
         * @param {security2.IS2SessionResp1} message S2SessionResp1 message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        S2SessionResp1.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.status != null && Object.hasOwnProperty.call(message, "status"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.status);
            if (message.deviceProof != null && Object.hasOwnProperty.call(message, "deviceProof"))
                writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.deviceProof);
            if (message.deviceNonce != null && Object.hasOwnProperty.call(message, "deviceNonce"))
                writer.uint32(/* id 3, wireType 2 =*/26).bytes(message.deviceNonce);
            return writer;
        };

        /**
         * Encodes the specified S2SessionResp1 message, length delimited. Does not implicitly {@link security2.S2SessionResp1.verify|verify} messages.
         * @function encodeDelimited
         * @memberof security2.S2SessionResp1
         * @static
         * @param {security2.IS2SessionResp1} message S2SessionResp1 message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        S2SessionResp1.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a S2SessionResp1 message from the specified reader or buffer.
         * @function decode
         * @memberof security2.S2SessionResp1
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {security2.S2SessionResp1} S2SessionResp1
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        S2SessionResp1.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.security2.S2SessionResp1();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.status = reader.int32();
                        break;
                    }
                case 2: {
                        message.deviceProof = reader.bytes();
                        break;
                    }
                case 3: {
                        message.deviceNonce = reader.bytes();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a S2SessionResp1 message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof security2.S2SessionResp1
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {security2.S2SessionResp1} S2SessionResp1
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        S2SessionResp1.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a S2SessionResp1 message.
         * @function verify
         * @memberof security2.S2SessionResp1
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        S2SessionResp1.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.status != null && message.hasOwnProperty("status"))
                switch (message.status) {
                default:
                    return "status: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                case 6:
                case 7:
                    break;
                }
            if (message.deviceProof != null && message.hasOwnProperty("deviceProof"))
                if (!(message.deviceProof && typeof message.deviceProof.length === "number" || $util.isString(message.deviceProof)))
                    return "deviceProof: buffer expected";
            if (message.deviceNonce != null && message.hasOwnProperty("deviceNonce"))
                if (!(message.deviceNonce && typeof message.deviceNonce.length === "number" || $util.isString(message.deviceNonce)))
                    return "deviceNonce: buffer expected";
            return null;
        };

        /**
         * Creates a S2SessionResp1 message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof security2.S2SessionResp1
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {security2.S2SessionResp1} S2SessionResp1
         */
        S2SessionResp1.fromObject = function fromObject(object) {
            if (object instanceof $root.security2.S2SessionResp1)
                return object;
            var message = new $root.security2.S2SessionResp1();
            switch (object.status) {
            default:
                if (typeof object.status === "number") {
                    message.status = object.status;
                    break;
                }
                break;
            case "Success":
            case 0:
                message.status = 0;
                break;
            case "InvalidSecScheme":
            case 1:
                message.status = 1;
                break;
            case "InvalidProto":
            case 2:
                message.status = 2;
                break;
            case "TooManySessions":
            case 3:
                message.status = 3;
                break;
            case "InvalidArgument":
            case 4:
                message.status = 4;
                break;
            case "InternalError":
            case 5:
                message.status = 5;
                break;
            case "CryptoError":
            case 6:
                message.status = 6;
                break;
            case "InvalidSession":
            case 7:
                message.status = 7;
                break;
            }
            if (object.deviceProof != null)
                if (typeof object.deviceProof === "string")
                    $util.base64.decode(object.deviceProof, message.deviceProof = $util.newBuffer($util.base64.length(object.deviceProof)), 0);
                else if (object.deviceProof.length >= 0)
                    message.deviceProof = object.deviceProof;
            if (object.deviceNonce != null)
                if (typeof object.deviceNonce === "string")
                    $util.base64.decode(object.deviceNonce, message.deviceNonce = $util.newBuffer($util.base64.length(object.deviceNonce)), 0);
                else if (object.deviceNonce.length >= 0)
                    message.deviceNonce = object.deviceNonce;
            return message;
        };

        /**
         * Creates a plain object from a S2SessionResp1 message. Also converts values to other types if specified.
         * @function toObject
         * @memberof security2.S2SessionResp1
         * @static
         * @param {security2.S2SessionResp1} message S2SessionResp1
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        S2SessionResp1.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.status = options.enums === String ? "Success" : 0;
                if (options.bytes === String)
                    object.deviceProof = "";
                else {
                    object.deviceProof = [];
                    if (options.bytes !== Array)
                        object.deviceProof = $util.newBuffer(object.deviceProof);
                }
                if (options.bytes === String)
                    object.deviceNonce = "";
                else {
                    object.deviceNonce = [];
                    if (options.bytes !== Array)
                        object.deviceNonce = $util.newBuffer(object.deviceNonce);
                }
            }
            if (message.status != null && message.hasOwnProperty("status"))
                object.status = options.enums === String ? $root.constants.Status[message.status] === undefined ? message.status : $root.constants.Status[message.status] : message.status;
            if (message.deviceProof != null && message.hasOwnProperty("deviceProof"))
                object.deviceProof = options.bytes === String ? $util.base64.encode(message.deviceProof, 0, message.deviceProof.length) : options.bytes === Array ? Array.prototype.slice.call(message.deviceProof) : message.deviceProof;
            if (message.deviceNonce != null && message.hasOwnProperty("deviceNonce"))
                object.deviceNonce = options.bytes === String ? $util.base64.encode(message.deviceNonce, 0, message.deviceNonce.length) : options.bytes === Array ? Array.prototype.slice.call(message.deviceNonce) : message.deviceNonce;
            return object;
        };

        /**
         * Converts this S2SessionResp1 to JSON.
         * @function toJSON
         * @memberof security2.S2SessionResp1
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        S2SessionResp1.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for S2SessionResp1
         * @function getTypeUrl
         * @memberof security2.S2SessionResp1
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        S2SessionResp1.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/security2.S2SessionResp1";
        };

        return S2SessionResp1;
    })();

    security2.Sec2Payload = (function() {

        /**
         * Properties of a Sec2Payload.
         * @memberof security2
         * @interface ISec2Payload
         * @property {security2.Sec2MsgType|null} [msg] Sec2Payload msg
         * @property {security2.IS2SessionCmd0|null} [sc0] Sec2Payload sc0
         * @property {security2.IS2SessionResp0|null} [sr0] Sec2Payload sr0
         * @property {security2.IS2SessionCmd1|null} [sc1] Sec2Payload sc1
         * @property {security2.IS2SessionResp1|null} [sr1] Sec2Payload sr1
         */

        /**
         * Constructs a new Sec2Payload.
         * @memberof security2
         * @classdesc Represents a Sec2Payload.
         * @implements ISec2Payload
         * @constructor
         * @param {security2.ISec2Payload=} [properties] Properties to set
         */
        function Sec2Payload(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Sec2Payload msg.
         * @member {security2.Sec2MsgType} msg
         * @memberof security2.Sec2Payload
         * @instance
         */
        Sec2Payload.prototype.msg = 0;

        /**
         * Sec2Payload sc0.
         * @member {security2.IS2SessionCmd0|null|undefined} sc0
         * @memberof security2.Sec2Payload
         * @instance
         */
        Sec2Payload.prototype.sc0 = null;

        /**
         * Sec2Payload sr0.
         * @member {security2.IS2SessionResp0|null|undefined} sr0
         * @memberof security2.Sec2Payload
         * @instance
         */
        Sec2Payload.prototype.sr0 = null;

        /**
         * Sec2Payload sc1.
         * @member {security2.IS2SessionCmd1|null|undefined} sc1
         * @memberof security2.Sec2Payload
         * @instance
         */
        Sec2Payload.prototype.sc1 = null;

        /**
         * Sec2Payload sr1.
         * @member {security2.IS2SessionResp1|null|undefined} sr1
         * @memberof security2.Sec2Payload
         * @instance
         */
        Sec2Payload.prototype.sr1 = null;

        // OneOf field names bound to virtual getters and setters
        var $oneOfFields;

        /**
         * Sec2Payload payload.
         * @member {"sc0"|"sr0"|"sc1"|"sr1"|undefined} payload
         * @memberof security2.Sec2Payload
         * @instance
         */
        Object.defineProperty(Sec2Payload.prototype, "payload", {
            get: $util.oneOfGetter($oneOfFields = ["sc0", "sr0", "sc1", "sr1"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new Sec2Payload instance using the specified properties.
         * @function create
         * @memberof security2.Sec2Payload
         * @static
         * @param {security2.ISec2Payload=} [properties] Properties to set
         * @returns {security2.Sec2Payload} Sec2Payload instance
         */
        Sec2Payload.create = function create(properties) {
            return new Sec2Payload(properties);
        };

        /**
         * Encodes the specified Sec2Payload message. Does not implicitly {@link security2.Sec2Payload.verify|verify} messages.
         * @function encode
         * @memberof security2.Sec2Payload
         * @static
         * @param {security2.ISec2Payload} message Sec2Payload message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Sec2Payload.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.msg != null && Object.hasOwnProperty.call(message, "msg"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.msg);
            if (message.sc0 != null && Object.hasOwnProperty.call(message, "sc0"))
                $root.security2.S2SessionCmd0.encode(message.sc0, writer.uint32(/* id 20, wireType 2 =*/162).fork()).ldelim();
            if (message.sr0 != null && Object.hasOwnProperty.call(message, "sr0"))
                $root.security2.S2SessionResp0.encode(message.sr0, writer.uint32(/* id 21, wireType 2 =*/170).fork()).ldelim();
            if (message.sc1 != null && Object.hasOwnProperty.call(message, "sc1"))
                $root.security2.S2SessionCmd1.encode(message.sc1, writer.uint32(/* id 22, wireType 2 =*/178).fork()).ldelim();
            if (message.sr1 != null && Object.hasOwnProperty.call(message, "sr1"))
                $root.security2.S2SessionResp1.encode(message.sr1, writer.uint32(/* id 23, wireType 2 =*/186).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified Sec2Payload message, length delimited. Does not implicitly {@link security2.Sec2Payload.verify|verify} messages.
         * @function encodeDelimited
         * @memberof security2.Sec2Payload
         * @static
         * @param {security2.ISec2Payload} message Sec2Payload message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Sec2Payload.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Sec2Payload message from the specified reader or buffer.
         * @function decode
         * @memberof security2.Sec2Payload
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {security2.Sec2Payload} Sec2Payload
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Sec2Payload.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.security2.Sec2Payload();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.msg = reader.int32();
                        break;
                    }
                case 20: {
                        message.sc0 = $root.security2.S2SessionCmd0.decode(reader, reader.uint32());
                        break;
                    }
                case 21: {
                        message.sr0 = $root.security2.S2SessionResp0.decode(reader, reader.uint32());
                        break;
                    }
                case 22: {
                        message.sc1 = $root.security2.S2SessionCmd1.decode(reader, reader.uint32());
                        break;
                    }
                case 23: {
                        message.sr1 = $root.security2.S2SessionResp1.decode(reader, reader.uint32());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Sec2Payload message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof security2.Sec2Payload
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {security2.Sec2Payload} Sec2Payload
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Sec2Payload.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Sec2Payload message.
         * @function verify
         * @memberof security2.Sec2Payload
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Sec2Payload.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            var properties = {};
            if (message.msg != null && message.hasOwnProperty("msg"))
                switch (message.msg) {
                default:
                    return "msg: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                    break;
                }
            if (message.sc0 != null && message.hasOwnProperty("sc0")) {
                properties.payload = 1;
                {
                    var error = $root.security2.S2SessionCmd0.verify(message.sc0);
                    if (error)
                        return "sc0." + error;
                }
            }
            if (message.sr0 != null && message.hasOwnProperty("sr0")) {
                if (properties.payload === 1)
                    return "payload: multiple values";
                properties.payload = 1;
                {
                    var error = $root.security2.S2SessionResp0.verify(message.sr0);
                    if (error)
                        return "sr0." + error;
                }
            }
            if (message.sc1 != null && message.hasOwnProperty("sc1")) {
                if (properties.payload === 1)
                    return "payload: multiple values";
                properties.payload = 1;
                {
                    var error = $root.security2.S2SessionCmd1.verify(message.sc1);
                    if (error)
                        return "sc1." + error;
                }
            }
            if (message.sr1 != null && message.hasOwnProperty("sr1")) {
                if (properties.payload === 1)
                    return "payload: multiple values";
                properties.payload = 1;
                {
                    var error = $root.security2.S2SessionResp1.verify(message.sr1);
                    if (error)
                        return "sr1." + error;
                }
            }
            return null;
        };

        /**
         * Creates a Sec2Payload message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof security2.Sec2Payload
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {security2.Sec2Payload} Sec2Payload
         */
        Sec2Payload.fromObject = function fromObject(object) {
            if (object instanceof $root.security2.Sec2Payload)
                return object;
            var message = new $root.security2.Sec2Payload();
            switch (object.msg) {
            default:
                if (typeof object.msg === "number") {
                    message.msg = object.msg;
                    break;
                }
                break;
            case "S2Session_Command0":
            case 0:
                message.msg = 0;
                break;
            case "S2Session_Response0":
            case 1:
                message.msg = 1;
                break;
            case "S2Session_Command1":
            case 2:
                message.msg = 2;
                break;
            case "S2Session_Response1":
            case 3:
                message.msg = 3;
                break;
            }
            if (object.sc0 != null) {
                if (typeof object.sc0 !== "object")
                    throw TypeError(".security2.Sec2Payload.sc0: object expected");
                message.sc0 = $root.security2.S2SessionCmd0.fromObject(object.sc0);
            }
            if (object.sr0 != null) {
                if (typeof object.sr0 !== "object")
                    throw TypeError(".security2.Sec2Payload.sr0: object expected");
                message.sr0 = $root.security2.S2SessionResp0.fromObject(object.sr0);
            }
            if (object.sc1 != null) {
                if (typeof object.sc1 !== "object")
                    throw TypeError(".security2.Sec2Payload.sc1: object expected");
                message.sc1 = $root.security2.S2SessionCmd1.fromObject(object.sc1);
            }
            if (object.sr1 != null) {
                if (typeof object.sr1 !== "object")
                    throw TypeError(".security2.Sec2Payload.sr1: object expected");
                message.sr1 = $root.security2.S2SessionResp1.fromObject(object.sr1);
            }
            return message;
        };

        /**
         * Creates a plain object from a Sec2Payload message. Also converts values to other types if specified.
         * @function toObject
         * @memberof security2.Sec2Payload
         * @static
         * @param {security2.Sec2Payload} message Sec2Payload
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Sec2Payload.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.msg = options.enums === String ? "S2Session_Command0" : 0;
            if (message.msg != null && message.hasOwnProperty("msg"))
                object.msg = options.enums === String ? $root.security2.Sec2MsgType[message.msg] === undefined ? message.msg : $root.security2.Sec2MsgType[message.msg] : message.msg;
            if (message.sc0 != null && message.hasOwnProperty("sc0")) {
                object.sc0 = $root.security2.S2SessionCmd0.toObject(message.sc0, options);
                if (options.oneofs)
                    object.payload = "sc0";
            }
            if (message.sr0 != null && message.hasOwnProperty("sr0")) {
                object.sr0 = $root.security2.S2SessionResp0.toObject(message.sr0, options);
                if (options.oneofs)
                    object.payload = "sr0";
            }
            if (message.sc1 != null && message.hasOwnProperty("sc1")) {
                object.sc1 = $root.security2.S2SessionCmd1.toObject(message.sc1, options);
                if (options.oneofs)
                    object.payload = "sc1";
            }
            if (message.sr1 != null && message.hasOwnProperty("sr1")) {
                object.sr1 = $root.security2.S2SessionResp1.toObject(message.sr1, options);
                if (options.oneofs)
                    object.payload = "sr1";
            }
            return object;
        };

        /**
         * Converts this Sec2Payload to JSON.
         * @function toJSON
         * @memberof security2.Sec2Payload
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Sec2Payload.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Sec2Payload
         * @function getTypeUrl
         * @memberof security2.Sec2Payload
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Sec2Payload.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/security2.Sec2Payload";
        };

        return Sec2Payload;
    })();

    return security2;
})();

$root.session = (function() {

    /**
     * Namespace session.
     * @exports session
     * @namespace
     */
    var session = {};

    /**
     * SecSchemeVersion enum.
     * @name session.SecSchemeVersion
     * @enum {number}
     * @property {number} SecScheme0=0 SecScheme0 value
     * @property {number} SecScheme1=1 SecScheme1 value
     * @property {number} SecScheme2=2 SecScheme2 value
     */
    session.SecSchemeVersion = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "SecScheme0"] = 0;
        values[valuesById[1] = "SecScheme1"] = 1;
        values[valuesById[2] = "SecScheme2"] = 2;
        return values;
    })();

    session.SessionData = (function() {

        /**
         * Properties of a SessionData.
         * @memberof session
         * @interface ISessionData
         * @property {session.SecSchemeVersion|null} [secVer] SessionData secVer
         * @property {security0.ISec0Payload|null} [sec0] SessionData sec0
         * @property {security1.ISec1Payload|null} [sec1] SessionData sec1
         * @property {security2.ISec2Payload|null} [sec2] SessionData sec2
         */

        /**
         * Constructs a new SessionData.
         * @memberof session
         * @classdesc Represents a SessionData.
         * @implements ISessionData
         * @constructor
         * @param {session.ISessionData=} [properties] Properties to set
         */
        function SessionData(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SessionData secVer.
         * @member {session.SecSchemeVersion} secVer
         * @memberof session.SessionData
         * @instance
         */
        SessionData.prototype.secVer = 0;

        /**
         * SessionData sec0.
         * @member {security0.ISec0Payload|null|undefined} sec0
         * @memberof session.SessionData
         * @instance
         */
        SessionData.prototype.sec0 = null;

        /**
         * SessionData sec1.
         * @member {security1.ISec1Payload|null|undefined} sec1
         * @memberof session.SessionData
         * @instance
         */
        SessionData.prototype.sec1 = null;

        /**
         * SessionData sec2.
         * @member {security2.ISec2Payload|null|undefined} sec2
         * @memberof session.SessionData
         * @instance
         */
        SessionData.prototype.sec2 = null;

        // OneOf field names bound to virtual getters and setters
        var $oneOfFields;

        /**
         * SessionData proto.
         * @member {"sec0"|"sec1"|"sec2"|undefined} proto
         * @memberof session.SessionData
         * @instance
         */
        Object.defineProperty(SessionData.prototype, "proto", {
            get: $util.oneOfGetter($oneOfFields = ["sec0", "sec1", "sec2"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new SessionData instance using the specified properties.
         * @function create
         * @memberof session.SessionData
         * @static
         * @param {session.ISessionData=} [properties] Properties to set
         * @returns {session.SessionData} SessionData instance
         */
        SessionData.create = function create(properties) {
            return new SessionData(properties);
        };

        /**
         * Encodes the specified SessionData message. Does not implicitly {@link session.SessionData.verify|verify} messages.
         * @function encode
         * @memberof session.SessionData
         * @static
         * @param {session.ISessionData} message SessionData message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SessionData.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.secVer != null && Object.hasOwnProperty.call(message, "secVer"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.secVer);
            if (message.sec0 != null && Object.hasOwnProperty.call(message, "sec0"))
                $root.security0.Sec0Payload.encode(message.sec0, writer.uint32(/* id 10, wireType 2 =*/82).fork()).ldelim();
            if (message.sec1 != null && Object.hasOwnProperty.call(message, "sec1"))
                $root.security1.Sec1Payload.encode(message.sec1, writer.uint32(/* id 11, wireType 2 =*/90).fork()).ldelim();
            if (message.sec2 != null && Object.hasOwnProperty.call(message, "sec2"))
                $root.security2.Sec2Payload.encode(message.sec2, writer.uint32(/* id 12, wireType 2 =*/98).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified SessionData message, length delimited. Does not implicitly {@link session.SessionData.verify|verify} messages.
         * @function encodeDelimited
         * @memberof session.SessionData
         * @static
         * @param {session.ISessionData} message SessionData message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SessionData.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SessionData message from the specified reader or buffer.
         * @function decode
         * @memberof session.SessionData
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {session.SessionData} SessionData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SessionData.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.session.SessionData();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 2: {
                        message.secVer = reader.int32();
                        break;
                    }
                case 10: {
                        message.sec0 = $root.security0.Sec0Payload.decode(reader, reader.uint32());
                        break;
                    }
                case 11: {
                        message.sec1 = $root.security1.Sec1Payload.decode(reader, reader.uint32());
                        break;
                    }
                case 12: {
                        message.sec2 = $root.security2.Sec2Payload.decode(reader, reader.uint32());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a SessionData message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof session.SessionData
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {session.SessionData} SessionData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SessionData.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SessionData message.
         * @function verify
         * @memberof session.SessionData
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SessionData.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            var properties = {};
            if (message.secVer != null && message.hasOwnProperty("secVer"))
                switch (message.secVer) {
                default:
                    return "secVer: enum value expected";
                case 0:
                case 1:
                case 2:
                    break;
                }
            if (message.sec0 != null && message.hasOwnProperty("sec0")) {
                properties.proto = 1;
                {
                    var error = $root.security0.Sec0Payload.verify(message.sec0);
                    if (error)
                        return "sec0." + error;
                }
            }
            if (message.sec1 != null && message.hasOwnProperty("sec1")) {
                if (properties.proto === 1)
                    return "proto: multiple values";
                properties.proto = 1;
                {
                    var error = $root.security1.Sec1Payload.verify(message.sec1);
                    if (error)
                        return "sec1." + error;
                }
            }
            if (message.sec2 != null && message.hasOwnProperty("sec2")) {
                if (properties.proto === 1)
                    return "proto: multiple values";
                properties.proto = 1;
                {
                    var error = $root.security2.Sec2Payload.verify(message.sec2);
                    if (error)
                        return "sec2." + error;
                }
            }
            return null;
        };

        /**
         * Creates a SessionData message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof session.SessionData
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {session.SessionData} SessionData
         */
        SessionData.fromObject = function fromObject(object) {
            if (object instanceof $root.session.SessionData)
                return object;
            var message = new $root.session.SessionData();
            switch (object.secVer) {
            default:
                if (typeof object.secVer === "number") {
                    message.secVer = object.secVer;
                    break;
                }
                break;
            case "SecScheme0":
            case 0:
                message.secVer = 0;
                break;
            case "SecScheme1":
            case 1:
                message.secVer = 1;
                break;
            case "SecScheme2":
            case 2:
                message.secVer = 2;
                break;
            }
            if (object.sec0 != null) {
                if (typeof object.sec0 !== "object")
                    throw TypeError(".session.SessionData.sec0: object expected");
                message.sec0 = $root.security0.Sec0Payload.fromObject(object.sec0);
            }
            if (object.sec1 != null) {
                if (typeof object.sec1 !== "object")
                    throw TypeError(".session.SessionData.sec1: object expected");
                message.sec1 = $root.security1.Sec1Payload.fromObject(object.sec1);
            }
            if (object.sec2 != null) {
                if (typeof object.sec2 !== "object")
                    throw TypeError(".session.SessionData.sec2: object expected");
                message.sec2 = $root.security2.Sec2Payload.fromObject(object.sec2);
            }
            return message;
        };

        /**
         * Creates a plain object from a SessionData message. Also converts values to other types if specified.
         * @function toObject
         * @memberof session.SessionData
         * @static
         * @param {session.SessionData} message SessionData
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SessionData.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.secVer = options.enums === String ? "SecScheme0" : 0;
            if (message.secVer != null && message.hasOwnProperty("secVer"))
                object.secVer = options.enums === String ? $root.session.SecSchemeVersion[message.secVer] === undefined ? message.secVer : $root.session.SecSchemeVersion[message.secVer] : message.secVer;
            if (message.sec0 != null && message.hasOwnProperty("sec0")) {
                object.sec0 = $root.security0.Sec0Payload.toObject(message.sec0, options);
                if (options.oneofs)
                    object.proto = "sec0";
            }
            if (message.sec1 != null && message.hasOwnProperty("sec1")) {
                object.sec1 = $root.security1.Sec1Payload.toObject(message.sec1, options);
                if (options.oneofs)
                    object.proto = "sec1";
            }
            if (message.sec2 != null && message.hasOwnProperty("sec2")) {
                object.sec2 = $root.security2.Sec2Payload.toObject(message.sec2, options);
                if (options.oneofs)
                    object.proto = "sec2";
            }
            return object;
        };

        /**
         * Converts this SessionData to JSON.
         * @function toJSON
         * @memberof session.SessionData
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SessionData.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for SessionData
         * @function getTypeUrl
         * @memberof session.SessionData
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        SessionData.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/session.SessionData";
        };

        return SessionData;
    })();

    return session;
})();

$root.config = (function() {

    /**
     * Namespace config.
     * @exports config
     * @namespace
     */
    var config = {};

    config.CmdGetStatus = (function() {

        /**
         * Properties of a CmdGetStatus.
         * @memberof config
         * @interface ICmdGetStatus
         */

        /**
         * Constructs a new CmdGetStatus.
         * @memberof config
         * @classdesc Represents a CmdGetStatus.
         * @implements ICmdGetStatus
         * @constructor
         * @param {config.ICmdGetStatus=} [properties] Properties to set
         */
        function CmdGetStatus(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new CmdGetStatus instance using the specified properties.
         * @function create
         * @memberof config.CmdGetStatus
         * @static
         * @param {config.ICmdGetStatus=} [properties] Properties to set
         * @returns {config.CmdGetStatus} CmdGetStatus instance
         */
        CmdGetStatus.create = function create(properties) {
            return new CmdGetStatus(properties);
        };

        /**
         * Encodes the specified CmdGetStatus message. Does not implicitly {@link config.CmdGetStatus.verify|verify} messages.
         * @function encode
         * @memberof config.CmdGetStatus
         * @static
         * @param {config.ICmdGetStatus} message CmdGetStatus message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CmdGetStatus.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified CmdGetStatus message, length delimited. Does not implicitly {@link config.CmdGetStatus.verify|verify} messages.
         * @function encodeDelimited
         * @memberof config.CmdGetStatus
         * @static
         * @param {config.ICmdGetStatus} message CmdGetStatus message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CmdGetStatus.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CmdGetStatus message from the specified reader or buffer.
         * @function decode
         * @memberof config.CmdGetStatus
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {config.CmdGetStatus} CmdGetStatus
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CmdGetStatus.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.config.CmdGetStatus();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a CmdGetStatus message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof config.CmdGetStatus
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {config.CmdGetStatus} CmdGetStatus
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CmdGetStatus.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CmdGetStatus message.
         * @function verify
         * @memberof config.CmdGetStatus
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CmdGetStatus.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates a CmdGetStatus message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof config.CmdGetStatus
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {config.CmdGetStatus} CmdGetStatus
         */
        CmdGetStatus.fromObject = function fromObject(object) {
            if (object instanceof $root.config.CmdGetStatus)
                return object;
            return new $root.config.CmdGetStatus();
        };

        /**
         * Creates a plain object from a CmdGetStatus message. Also converts values to other types if specified.
         * @function toObject
         * @memberof config.CmdGetStatus
         * @static
         * @param {config.CmdGetStatus} message CmdGetStatus
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CmdGetStatus.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this CmdGetStatus to JSON.
         * @function toJSON
         * @memberof config.CmdGetStatus
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CmdGetStatus.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for CmdGetStatus
         * @function getTypeUrl
         * @memberof config.CmdGetStatus
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        CmdGetStatus.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/config.CmdGetStatus";
        };

        return CmdGetStatus;
    })();

    config.RespGetStatus = (function() {

        /**
         * Properties of a RespGetStatus.
         * @memberof config
         * @interface IRespGetStatus
         * @property {constants.Status|null} [status] RespGetStatus status
         * @property {constants.WifiStationState|null} [staState] RespGetStatus staState
         * @property {constants.WifiConnectFailedReason|null} [failReason] RespGetStatus failReason
         * @property {constants.IWifiConnectedState|null} [connected] RespGetStatus connected
         * @property {constants.IWifiAttemptFailed|null} [attemptFailed] RespGetStatus attemptFailed
         */

        /**
         * Constructs a new RespGetStatus.
         * @memberof config
         * @classdesc Represents a RespGetStatus.
         * @implements IRespGetStatus
         * @constructor
         * @param {config.IRespGetStatus=} [properties] Properties to set
         */
        function RespGetStatus(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * RespGetStatus status.
         * @member {constants.Status} status
         * @memberof config.RespGetStatus
         * @instance
         */
        RespGetStatus.prototype.status = 0;

        /**
         * RespGetStatus staState.
         * @member {constants.WifiStationState} staState
         * @memberof config.RespGetStatus
         * @instance
         */
        RespGetStatus.prototype.staState = 0;

        /**
         * RespGetStatus failReason.
         * @member {constants.WifiConnectFailedReason|null|undefined} failReason
         * @memberof config.RespGetStatus
         * @instance
         */
        RespGetStatus.prototype.failReason = null;

        /**
         * RespGetStatus connected.
         * @member {constants.IWifiConnectedState|null|undefined} connected
         * @memberof config.RespGetStatus
         * @instance
         */
        RespGetStatus.prototype.connected = null;

        /**
         * RespGetStatus attemptFailed.
         * @member {constants.IWifiAttemptFailed|null|undefined} attemptFailed
         * @memberof config.RespGetStatus
         * @instance
         */
        RespGetStatus.prototype.attemptFailed = null;

        // OneOf field names bound to virtual getters and setters
        var $oneOfFields;

        /**
         * RespGetStatus state.
         * @member {"failReason"|"connected"|"attemptFailed"|undefined} state
         * @memberof config.RespGetStatus
         * @instance
         */
        Object.defineProperty(RespGetStatus.prototype, "state", {
            get: $util.oneOfGetter($oneOfFields = ["failReason", "connected", "attemptFailed"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new RespGetStatus instance using the specified properties.
         * @function create
         * @memberof config.RespGetStatus
         * @static
         * @param {config.IRespGetStatus=} [properties] Properties to set
         * @returns {config.RespGetStatus} RespGetStatus instance
         */
        RespGetStatus.create = function create(properties) {
            return new RespGetStatus(properties);
        };

        /**
         * Encodes the specified RespGetStatus message. Does not implicitly {@link config.RespGetStatus.verify|verify} messages.
         * @function encode
         * @memberof config.RespGetStatus
         * @static
         * @param {config.IRespGetStatus} message RespGetStatus message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RespGetStatus.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.status != null && Object.hasOwnProperty.call(message, "status"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.status);
            if (message.staState != null && Object.hasOwnProperty.call(message, "staState"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.staState);
            if (message.failReason != null && Object.hasOwnProperty.call(message, "failReason"))
                writer.uint32(/* id 10, wireType 0 =*/80).int32(message.failReason);
            if (message.connected != null && Object.hasOwnProperty.call(message, "connected"))
                $root.constants.WifiConnectedState.encode(message.connected, writer.uint32(/* id 11, wireType 2 =*/90).fork()).ldelim();
            if (message.attemptFailed != null && Object.hasOwnProperty.call(message, "attemptFailed"))
                $root.constants.WifiAttemptFailed.encode(message.attemptFailed, writer.uint32(/* id 12, wireType 2 =*/98).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified RespGetStatus message, length delimited. Does not implicitly {@link config.RespGetStatus.verify|verify} messages.
         * @function encodeDelimited
         * @memberof config.RespGetStatus
         * @static
         * @param {config.IRespGetStatus} message RespGetStatus message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RespGetStatus.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a RespGetStatus message from the specified reader or buffer.
         * @function decode
         * @memberof config.RespGetStatus
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {config.RespGetStatus} RespGetStatus
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RespGetStatus.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.config.RespGetStatus();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.status = reader.int32();
                        break;
                    }
                case 2: {
                        message.staState = reader.int32();
                        break;
                    }
                case 10: {
                        message.failReason = reader.int32();
                        break;
                    }
                case 11: {
                        message.connected = $root.constants.WifiConnectedState.decode(reader, reader.uint32());
                        break;
                    }
                case 12: {
                        message.attemptFailed = $root.constants.WifiAttemptFailed.decode(reader, reader.uint32());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a RespGetStatus message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof config.RespGetStatus
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {config.RespGetStatus} RespGetStatus
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RespGetStatus.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a RespGetStatus message.
         * @function verify
         * @memberof config.RespGetStatus
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        RespGetStatus.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            var properties = {};
            if (message.status != null && message.hasOwnProperty("status"))
                switch (message.status) {
                default:
                    return "status: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                case 6:
                case 7:
                    break;
                }
            if (message.staState != null && message.hasOwnProperty("staState"))
                switch (message.staState) {
                default:
                    return "staState: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                    break;
                }
            if (message.failReason != null && message.hasOwnProperty("failReason")) {
                properties.state = 1;
                switch (message.failReason) {
                default:
                    return "failReason: enum value expected";
                case 0:
                case 1:
                    break;
                }
            }
            if (message.connected != null && message.hasOwnProperty("connected")) {
                if (properties.state === 1)
                    return "state: multiple values";
                properties.state = 1;
                {
                    var error = $root.constants.WifiConnectedState.verify(message.connected);
                    if (error)
                        return "connected." + error;
                }
            }
            if (message.attemptFailed != null && message.hasOwnProperty("attemptFailed")) {
                if (properties.state === 1)
                    return "state: multiple values";
                properties.state = 1;
                {
                    var error = $root.constants.WifiAttemptFailed.verify(message.attemptFailed);
                    if (error)
                        return "attemptFailed." + error;
                }
            }
            return null;
        };

        /**
         * Creates a RespGetStatus message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof config.RespGetStatus
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {config.RespGetStatus} RespGetStatus
         */
        RespGetStatus.fromObject = function fromObject(object) {
            if (object instanceof $root.config.RespGetStatus)
                return object;
            var message = new $root.config.RespGetStatus();
            switch (object.status) {
            default:
                if (typeof object.status === "number") {
                    message.status = object.status;
                    break;
                }
                break;
            case "Success":
            case 0:
                message.status = 0;
                break;
            case "InvalidSecScheme":
            case 1:
                message.status = 1;
                break;
            case "InvalidProto":
            case 2:
                message.status = 2;
                break;
            case "TooManySessions":
            case 3:
                message.status = 3;
                break;
            case "InvalidArgument":
            case 4:
                message.status = 4;
                break;
            case "InternalError":
            case 5:
                message.status = 5;
                break;
            case "CryptoError":
            case 6:
                message.status = 6;
                break;
            case "InvalidSession":
            case 7:
                message.status = 7;
                break;
            }
            switch (object.staState) {
            default:
                if (typeof object.staState === "number") {
                    message.staState = object.staState;
                    break;
                }
                break;
            case "Connected":
            case 0:
                message.staState = 0;
                break;
            case "Connecting":
            case 1:
                message.staState = 1;
                break;
            case "Disconnected":
            case 2:
                message.staState = 2;
                break;
            case "ConnectionFailed":
            case 3:
                message.staState = 3;
                break;
            }
            switch (object.failReason) {
            default:
                if (typeof object.failReason === "number") {
                    message.failReason = object.failReason;
                    break;
                }
                break;
            case "AuthError":
            case 0:
                message.failReason = 0;
                break;
            case "NetworkNotFound":
            case 1:
                message.failReason = 1;
                break;
            }
            if (object.connected != null) {
                if (typeof object.connected !== "object")
                    throw TypeError(".config.RespGetStatus.connected: object expected");
                message.connected = $root.constants.WifiConnectedState.fromObject(object.connected);
            }
            if (object.attemptFailed != null) {
                if (typeof object.attemptFailed !== "object")
                    throw TypeError(".config.RespGetStatus.attemptFailed: object expected");
                message.attemptFailed = $root.constants.WifiAttemptFailed.fromObject(object.attemptFailed);
            }
            return message;
        };

        /**
         * Creates a plain object from a RespGetStatus message. Also converts values to other types if specified.
         * @function toObject
         * @memberof config.RespGetStatus
         * @static
         * @param {config.RespGetStatus} message RespGetStatus
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        RespGetStatus.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.status = options.enums === String ? "Success" : 0;
                object.staState = options.enums === String ? "Connected" : 0;
            }
            if (message.status != null && message.hasOwnProperty("status"))
                object.status = options.enums === String ? $root.constants.Status[message.status] === undefined ? message.status : $root.constants.Status[message.status] : message.status;
            if (message.staState != null && message.hasOwnProperty("staState"))
                object.staState = options.enums === String ? $root.constants.WifiStationState[message.staState] === undefined ? message.staState : $root.constants.WifiStationState[message.staState] : message.staState;
            if (message.failReason != null && message.hasOwnProperty("failReason")) {
                object.failReason = options.enums === String ? $root.constants.WifiConnectFailedReason[message.failReason] === undefined ? message.failReason : $root.constants.WifiConnectFailedReason[message.failReason] : message.failReason;
                if (options.oneofs)
                    object.state = "failReason";
            }
            if (message.connected != null && message.hasOwnProperty("connected")) {
                object.connected = $root.constants.WifiConnectedState.toObject(message.connected, options);
                if (options.oneofs)
                    object.state = "connected";
            }
            if (message.attemptFailed != null && message.hasOwnProperty("attemptFailed")) {
                object.attemptFailed = $root.constants.WifiAttemptFailed.toObject(message.attemptFailed, options);
                if (options.oneofs)
                    object.state = "attemptFailed";
            }
            return object;
        };

        /**
         * Converts this RespGetStatus to JSON.
         * @function toJSON
         * @memberof config.RespGetStatus
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        RespGetStatus.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for RespGetStatus
         * @function getTypeUrl
         * @memberof config.RespGetStatus
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        RespGetStatus.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/config.RespGetStatus";
        };

        return RespGetStatus;
    })();

    config.CmdSetConfig = (function() {

        /**
         * Properties of a CmdSetConfig.
         * @memberof config
         * @interface ICmdSetConfig
         * @property {Uint8Array|null} [ssid] CmdSetConfig ssid
         * @property {Uint8Array|null} [passphrase] CmdSetConfig passphrase
         * @property {Uint8Array|null} [bssid] CmdSetConfig bssid
         * @property {number|null} [channel] CmdSetConfig channel
         */

        /**
         * Constructs a new CmdSetConfig.
         * @memberof config
         * @classdesc Represents a CmdSetConfig.
         * @implements ICmdSetConfig
         * @constructor
         * @param {config.ICmdSetConfig=} [properties] Properties to set
         */
        function CmdSetConfig(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * CmdSetConfig ssid.
         * @member {Uint8Array} ssid
         * @memberof config.CmdSetConfig
         * @instance
         */
        CmdSetConfig.prototype.ssid = $util.newBuffer([]);

        /**
         * CmdSetConfig passphrase.
         * @member {Uint8Array} passphrase
         * @memberof config.CmdSetConfig
         * @instance
         */
        CmdSetConfig.prototype.passphrase = $util.newBuffer([]);

        /**
         * CmdSetConfig bssid.
         * @member {Uint8Array} bssid
         * @memberof config.CmdSetConfig
         * @instance
         */
        CmdSetConfig.prototype.bssid = $util.newBuffer([]);

        /**
         * CmdSetConfig channel.
         * @member {number} channel
         * @memberof config.CmdSetConfig
         * @instance
         */
        CmdSetConfig.prototype.channel = 0;

        /**
         * Creates a new CmdSetConfig instance using the specified properties.
         * @function create
         * @memberof config.CmdSetConfig
         * @static
         * @param {config.ICmdSetConfig=} [properties] Properties to set
         * @returns {config.CmdSetConfig} CmdSetConfig instance
         */
        CmdSetConfig.create = function create(properties) {
            return new CmdSetConfig(properties);
        };

        /**
         * Encodes the specified CmdSetConfig message. Does not implicitly {@link config.CmdSetConfig.verify|verify} messages.
         * @function encode
         * @memberof config.CmdSetConfig
         * @static
         * @param {config.ICmdSetConfig} message CmdSetConfig message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CmdSetConfig.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.ssid != null && Object.hasOwnProperty.call(message, "ssid"))
                writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.ssid);
            if (message.passphrase != null && Object.hasOwnProperty.call(message, "passphrase"))
                writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.passphrase);
            if (message.bssid != null && Object.hasOwnProperty.call(message, "bssid"))
                writer.uint32(/* id 3, wireType 2 =*/26).bytes(message.bssid);
            if (message.channel != null && Object.hasOwnProperty.call(message, "channel"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.channel);
            return writer;
        };

        /**
         * Encodes the specified CmdSetConfig message, length delimited. Does not implicitly {@link config.CmdSetConfig.verify|verify} messages.
         * @function encodeDelimited
         * @memberof config.CmdSetConfig
         * @static
         * @param {config.ICmdSetConfig} message CmdSetConfig message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CmdSetConfig.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CmdSetConfig message from the specified reader or buffer.
         * @function decode
         * @memberof config.CmdSetConfig
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {config.CmdSetConfig} CmdSetConfig
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CmdSetConfig.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.config.CmdSetConfig();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.ssid = reader.bytes();
                        break;
                    }
                case 2: {
                        message.passphrase = reader.bytes();
                        break;
                    }
                case 3: {
                        message.bssid = reader.bytes();
                        break;
                    }
                case 4: {
                        message.channel = reader.int32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a CmdSetConfig message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof config.CmdSetConfig
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {config.CmdSetConfig} CmdSetConfig
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CmdSetConfig.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CmdSetConfig message.
         * @function verify
         * @memberof config.CmdSetConfig
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CmdSetConfig.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.ssid != null && message.hasOwnProperty("ssid"))
                if (!(message.ssid && typeof message.ssid.length === "number" || $util.isString(message.ssid)))
                    return "ssid: buffer expected";
            if (message.passphrase != null && message.hasOwnProperty("passphrase"))
                if (!(message.passphrase && typeof message.passphrase.length === "number" || $util.isString(message.passphrase)))
                    return "passphrase: buffer expected";
            if (message.bssid != null && message.hasOwnProperty("bssid"))
                if (!(message.bssid && typeof message.bssid.length === "number" || $util.isString(message.bssid)))
                    return "bssid: buffer expected";
            if (message.channel != null && message.hasOwnProperty("channel"))
                if (!$util.isInteger(message.channel))
                    return "channel: integer expected";
            return null;
        };

        /**
         * Creates a CmdSetConfig message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof config.CmdSetConfig
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {config.CmdSetConfig} CmdSetConfig
         */
        CmdSetConfig.fromObject = function fromObject(object) {
            if (object instanceof $root.config.CmdSetConfig)
                return object;
            var message = new $root.config.CmdSetConfig();
            if (object.ssid != null)
                if (typeof object.ssid === "string")
                    $util.base64.decode(object.ssid, message.ssid = $util.newBuffer($util.base64.length(object.ssid)), 0);
                else if (object.ssid.length >= 0)
                    message.ssid = object.ssid;
            if (object.passphrase != null)
                if (typeof object.passphrase === "string")
                    $util.base64.decode(object.passphrase, message.passphrase = $util.newBuffer($util.base64.length(object.passphrase)), 0);
                else if (object.passphrase.length >= 0)
                    message.passphrase = object.passphrase;
            if (object.bssid != null)
                if (typeof object.bssid === "string")
                    $util.base64.decode(object.bssid, message.bssid = $util.newBuffer($util.base64.length(object.bssid)), 0);
                else if (object.bssid.length >= 0)
                    message.bssid = object.bssid;
            if (object.channel != null)
                message.channel = object.channel | 0;
            return message;
        };

        /**
         * Creates a plain object from a CmdSetConfig message. Also converts values to other types if specified.
         * @function toObject
         * @memberof config.CmdSetConfig
         * @static
         * @param {config.CmdSetConfig} message CmdSetConfig
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CmdSetConfig.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if (options.bytes === String)
                    object.ssid = "";
                else {
                    object.ssid = [];
                    if (options.bytes !== Array)
                        object.ssid = $util.newBuffer(object.ssid);
                }
                if (options.bytes === String)
                    object.passphrase = "";
                else {
                    object.passphrase = [];
                    if (options.bytes !== Array)
                        object.passphrase = $util.newBuffer(object.passphrase);
                }
                if (options.bytes === String)
                    object.bssid = "";
                else {
                    object.bssid = [];
                    if (options.bytes !== Array)
                        object.bssid = $util.newBuffer(object.bssid);
                }
                object.channel = 0;
            }
            if (message.ssid != null && message.hasOwnProperty("ssid"))
                object.ssid = options.bytes === String ? $util.base64.encode(message.ssid, 0, message.ssid.length) : options.bytes === Array ? Array.prototype.slice.call(message.ssid) : message.ssid;
            if (message.passphrase != null && message.hasOwnProperty("passphrase"))
                object.passphrase = options.bytes === String ? $util.base64.encode(message.passphrase, 0, message.passphrase.length) : options.bytes === Array ? Array.prototype.slice.call(message.passphrase) : message.passphrase;
            if (message.bssid != null && message.hasOwnProperty("bssid"))
                object.bssid = options.bytes === String ? $util.base64.encode(message.bssid, 0, message.bssid.length) : options.bytes === Array ? Array.prototype.slice.call(message.bssid) : message.bssid;
            if (message.channel != null && message.hasOwnProperty("channel"))
                object.channel = message.channel;
            return object;
        };

        /**
         * Converts this CmdSetConfig to JSON.
         * @function toJSON
         * @memberof config.CmdSetConfig
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CmdSetConfig.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for CmdSetConfig
         * @function getTypeUrl
         * @memberof config.CmdSetConfig
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        CmdSetConfig.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/config.CmdSetConfig";
        };

        return CmdSetConfig;
    })();

    config.RespSetConfig = (function() {

        /**
         * Properties of a RespSetConfig.
         * @memberof config
         * @interface IRespSetConfig
         * @property {constants.Status|null} [status] RespSetConfig status
         */

        /**
         * Constructs a new RespSetConfig.
         * @memberof config
         * @classdesc Represents a RespSetConfig.
         * @implements IRespSetConfig
         * @constructor
         * @param {config.IRespSetConfig=} [properties] Properties to set
         */
        function RespSetConfig(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * RespSetConfig status.
         * @member {constants.Status} status
         * @memberof config.RespSetConfig
         * @instance
         */
        RespSetConfig.prototype.status = 0;

        /**
         * Creates a new RespSetConfig instance using the specified properties.
         * @function create
         * @memberof config.RespSetConfig
         * @static
         * @param {config.IRespSetConfig=} [properties] Properties to set
         * @returns {config.RespSetConfig} RespSetConfig instance
         */
        RespSetConfig.create = function create(properties) {
            return new RespSetConfig(properties);
        };

        /**
         * Encodes the specified RespSetConfig message. Does not implicitly {@link config.RespSetConfig.verify|verify} messages.
         * @function encode
         * @memberof config.RespSetConfig
         * @static
         * @param {config.IRespSetConfig} message RespSetConfig message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RespSetConfig.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.status != null && Object.hasOwnProperty.call(message, "status"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.status);
            return writer;
        };

        /**
         * Encodes the specified RespSetConfig message, length delimited. Does not implicitly {@link config.RespSetConfig.verify|verify} messages.
         * @function encodeDelimited
         * @memberof config.RespSetConfig
         * @static
         * @param {config.IRespSetConfig} message RespSetConfig message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RespSetConfig.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a RespSetConfig message from the specified reader or buffer.
         * @function decode
         * @memberof config.RespSetConfig
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {config.RespSetConfig} RespSetConfig
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RespSetConfig.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.config.RespSetConfig();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.status = reader.int32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a RespSetConfig message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof config.RespSetConfig
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {config.RespSetConfig} RespSetConfig
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RespSetConfig.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a RespSetConfig message.
         * @function verify
         * @memberof config.RespSetConfig
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        RespSetConfig.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.status != null && message.hasOwnProperty("status"))
                switch (message.status) {
                default:
                    return "status: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                case 6:
                case 7:
                    break;
                }
            return null;
        };

        /**
         * Creates a RespSetConfig message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof config.RespSetConfig
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {config.RespSetConfig} RespSetConfig
         */
        RespSetConfig.fromObject = function fromObject(object) {
            if (object instanceof $root.config.RespSetConfig)
                return object;
            var message = new $root.config.RespSetConfig();
            switch (object.status) {
            default:
                if (typeof object.status === "number") {
                    message.status = object.status;
                    break;
                }
                break;
            case "Success":
            case 0:
                message.status = 0;
                break;
            case "InvalidSecScheme":
            case 1:
                message.status = 1;
                break;
            case "InvalidProto":
            case 2:
                message.status = 2;
                break;
            case "TooManySessions":
            case 3:
                message.status = 3;
                break;
            case "InvalidArgument":
            case 4:
                message.status = 4;
                break;
            case "InternalError":
            case 5:
                message.status = 5;
                break;
            case "CryptoError":
            case 6:
                message.status = 6;
                break;
            case "InvalidSession":
            case 7:
                message.status = 7;
                break;
            }
            return message;
        };

        /**
         * Creates a plain object from a RespSetConfig message. Also converts values to other types if specified.
         * @function toObject
         * @memberof config.RespSetConfig
         * @static
         * @param {config.RespSetConfig} message RespSetConfig
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        RespSetConfig.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.status = options.enums === String ? "Success" : 0;
            if (message.status != null && message.hasOwnProperty("status"))
                object.status = options.enums === String ? $root.constants.Status[message.status] === undefined ? message.status : $root.constants.Status[message.status] : message.status;
            return object;
        };

        /**
         * Converts this RespSetConfig to JSON.
         * @function toJSON
         * @memberof config.RespSetConfig
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        RespSetConfig.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for RespSetConfig
         * @function getTypeUrl
         * @memberof config.RespSetConfig
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        RespSetConfig.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/config.RespSetConfig";
        };

        return RespSetConfig;
    })();

    config.CmdApplyConfig = (function() {

        /**
         * Properties of a CmdApplyConfig.
         * @memberof config
         * @interface ICmdApplyConfig
         */

        /**
         * Constructs a new CmdApplyConfig.
         * @memberof config
         * @classdesc Represents a CmdApplyConfig.
         * @implements ICmdApplyConfig
         * @constructor
         * @param {config.ICmdApplyConfig=} [properties] Properties to set
         */
        function CmdApplyConfig(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new CmdApplyConfig instance using the specified properties.
         * @function create
         * @memberof config.CmdApplyConfig
         * @static
         * @param {config.ICmdApplyConfig=} [properties] Properties to set
         * @returns {config.CmdApplyConfig} CmdApplyConfig instance
         */
        CmdApplyConfig.create = function create(properties) {
            return new CmdApplyConfig(properties);
        };

        /**
         * Encodes the specified CmdApplyConfig message. Does not implicitly {@link config.CmdApplyConfig.verify|verify} messages.
         * @function encode
         * @memberof config.CmdApplyConfig
         * @static
         * @param {config.ICmdApplyConfig} message CmdApplyConfig message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CmdApplyConfig.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified CmdApplyConfig message, length delimited. Does not implicitly {@link config.CmdApplyConfig.verify|verify} messages.
         * @function encodeDelimited
         * @memberof config.CmdApplyConfig
         * @static
         * @param {config.ICmdApplyConfig} message CmdApplyConfig message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CmdApplyConfig.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CmdApplyConfig message from the specified reader or buffer.
         * @function decode
         * @memberof config.CmdApplyConfig
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {config.CmdApplyConfig} CmdApplyConfig
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CmdApplyConfig.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.config.CmdApplyConfig();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a CmdApplyConfig message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof config.CmdApplyConfig
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {config.CmdApplyConfig} CmdApplyConfig
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CmdApplyConfig.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CmdApplyConfig message.
         * @function verify
         * @memberof config.CmdApplyConfig
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CmdApplyConfig.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates a CmdApplyConfig message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof config.CmdApplyConfig
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {config.CmdApplyConfig} CmdApplyConfig
         */
        CmdApplyConfig.fromObject = function fromObject(object) {
            if (object instanceof $root.config.CmdApplyConfig)
                return object;
            return new $root.config.CmdApplyConfig();
        };

        /**
         * Creates a plain object from a CmdApplyConfig message. Also converts values to other types if specified.
         * @function toObject
         * @memberof config.CmdApplyConfig
         * @static
         * @param {config.CmdApplyConfig} message CmdApplyConfig
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CmdApplyConfig.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this CmdApplyConfig to JSON.
         * @function toJSON
         * @memberof config.CmdApplyConfig
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CmdApplyConfig.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for CmdApplyConfig
         * @function getTypeUrl
         * @memberof config.CmdApplyConfig
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        CmdApplyConfig.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/config.CmdApplyConfig";
        };

        return CmdApplyConfig;
    })();

    config.RespApplyConfig = (function() {

        /**
         * Properties of a RespApplyConfig.
         * @memberof config
         * @interface IRespApplyConfig
         * @property {constants.Status|null} [status] RespApplyConfig status
         */

        /**
         * Constructs a new RespApplyConfig.
         * @memberof config
         * @classdesc Represents a RespApplyConfig.
         * @implements IRespApplyConfig
         * @constructor
         * @param {config.IRespApplyConfig=} [properties] Properties to set
         */
        function RespApplyConfig(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * RespApplyConfig status.
         * @member {constants.Status} status
         * @memberof config.RespApplyConfig
         * @instance
         */
        RespApplyConfig.prototype.status = 0;

        /**
         * Creates a new RespApplyConfig instance using the specified properties.
         * @function create
         * @memberof config.RespApplyConfig
         * @static
         * @param {config.IRespApplyConfig=} [properties] Properties to set
         * @returns {config.RespApplyConfig} RespApplyConfig instance
         */
        RespApplyConfig.create = function create(properties) {
            return new RespApplyConfig(properties);
        };

        /**
         * Encodes the specified RespApplyConfig message. Does not implicitly {@link config.RespApplyConfig.verify|verify} messages.
         * @function encode
         * @memberof config.RespApplyConfig
         * @static
         * @param {config.IRespApplyConfig} message RespApplyConfig message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RespApplyConfig.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.status != null && Object.hasOwnProperty.call(message, "status"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.status);
            return writer;
        };

        /**
         * Encodes the specified RespApplyConfig message, length delimited. Does not implicitly {@link config.RespApplyConfig.verify|verify} messages.
         * @function encodeDelimited
         * @memberof config.RespApplyConfig
         * @static
         * @param {config.IRespApplyConfig} message RespApplyConfig message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RespApplyConfig.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a RespApplyConfig message from the specified reader or buffer.
         * @function decode
         * @memberof config.RespApplyConfig
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {config.RespApplyConfig} RespApplyConfig
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RespApplyConfig.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.config.RespApplyConfig();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.status = reader.int32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a RespApplyConfig message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof config.RespApplyConfig
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {config.RespApplyConfig} RespApplyConfig
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RespApplyConfig.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a RespApplyConfig message.
         * @function verify
         * @memberof config.RespApplyConfig
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        RespApplyConfig.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.status != null && message.hasOwnProperty("status"))
                switch (message.status) {
                default:
                    return "status: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                case 6:
                case 7:
                    break;
                }
            return null;
        };

        /**
         * Creates a RespApplyConfig message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof config.RespApplyConfig
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {config.RespApplyConfig} RespApplyConfig
         */
        RespApplyConfig.fromObject = function fromObject(object) {
            if (object instanceof $root.config.RespApplyConfig)
                return object;
            var message = new $root.config.RespApplyConfig();
            switch (object.status) {
            default:
                if (typeof object.status === "number") {
                    message.status = object.status;
                    break;
                }
                break;
            case "Success":
            case 0:
                message.status = 0;
                break;
            case "InvalidSecScheme":
            case 1:
                message.status = 1;
                break;
            case "InvalidProto":
            case 2:
                message.status = 2;
                break;
            case "TooManySessions":
            case 3:
                message.status = 3;
                break;
            case "InvalidArgument":
            case 4:
                message.status = 4;
                break;
            case "InternalError":
            case 5:
                message.status = 5;
                break;
            case "CryptoError":
            case 6:
                message.status = 6;
                break;
            case "InvalidSession":
            case 7:
                message.status = 7;
                break;
            }
            return message;
        };

        /**
         * Creates a plain object from a RespApplyConfig message. Also converts values to other types if specified.
         * @function toObject
         * @memberof config.RespApplyConfig
         * @static
         * @param {config.RespApplyConfig} message RespApplyConfig
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        RespApplyConfig.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.status = options.enums === String ? "Success" : 0;
            if (message.status != null && message.hasOwnProperty("status"))
                object.status = options.enums === String ? $root.constants.Status[message.status] === undefined ? message.status : $root.constants.Status[message.status] : message.status;
            return object;
        };

        /**
         * Converts this RespApplyConfig to JSON.
         * @function toJSON
         * @memberof config.RespApplyConfig
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        RespApplyConfig.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for RespApplyConfig
         * @function getTypeUrl
         * @memberof config.RespApplyConfig
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        RespApplyConfig.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/config.RespApplyConfig";
        };

        return RespApplyConfig;
    })();

    /**
     * WiFiConfigMsgType enum.
     * @name config.WiFiConfigMsgType
     * @enum {number}
     * @property {number} TypeCmdGetStatus=0 TypeCmdGetStatus value
     * @property {number} TypeRespGetStatus=1 TypeRespGetStatus value
     * @property {number} TypeCmdSetConfig=2 TypeCmdSetConfig value
     * @property {number} TypeRespSetConfig=3 TypeRespSetConfig value
     * @property {number} TypeCmdApplyConfig=4 TypeCmdApplyConfig value
     * @property {number} TypeRespApplyConfig=5 TypeRespApplyConfig value
     */
    config.WiFiConfigMsgType = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "TypeCmdGetStatus"] = 0;
        values[valuesById[1] = "TypeRespGetStatus"] = 1;
        values[valuesById[2] = "TypeCmdSetConfig"] = 2;
        values[valuesById[3] = "TypeRespSetConfig"] = 3;
        values[valuesById[4] = "TypeCmdApplyConfig"] = 4;
        values[valuesById[5] = "TypeRespApplyConfig"] = 5;
        return values;
    })();

    config.WiFiConfigPayload = (function() {

        /**
         * Properties of a WiFiConfigPayload.
         * @memberof config
         * @interface IWiFiConfigPayload
         * @property {config.WiFiConfigMsgType|null} [msg] WiFiConfigPayload msg
         * @property {config.ICmdGetStatus|null} [cmdGetStatus] WiFiConfigPayload cmdGetStatus
         * @property {config.IRespGetStatus|null} [respGetStatus] WiFiConfigPayload respGetStatus
         * @property {config.ICmdSetConfig|null} [cmdSetConfig] WiFiConfigPayload cmdSetConfig
         * @property {config.IRespSetConfig|null} [respSetConfig] WiFiConfigPayload respSetConfig
         * @property {config.ICmdApplyConfig|null} [cmdApplyConfig] WiFiConfigPayload cmdApplyConfig
         * @property {config.IRespApplyConfig|null} [respApplyConfig] WiFiConfigPayload respApplyConfig
         */

        /**
         * Constructs a new WiFiConfigPayload.
         * @memberof config
         * @classdesc Represents a WiFiConfigPayload.
         * @implements IWiFiConfigPayload
         * @constructor
         * @param {config.IWiFiConfigPayload=} [properties] Properties to set
         */
        function WiFiConfigPayload(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * WiFiConfigPayload msg.
         * @member {config.WiFiConfigMsgType} msg
         * @memberof config.WiFiConfigPayload
         * @instance
         */
        WiFiConfigPayload.prototype.msg = 0;

        /**
         * WiFiConfigPayload cmdGetStatus.
         * @member {config.ICmdGetStatus|null|undefined} cmdGetStatus
         * @memberof config.WiFiConfigPayload
         * @instance
         */
        WiFiConfigPayload.prototype.cmdGetStatus = null;

        /**
         * WiFiConfigPayload respGetStatus.
         * @member {config.IRespGetStatus|null|undefined} respGetStatus
         * @memberof config.WiFiConfigPayload
         * @instance
         */
        WiFiConfigPayload.prototype.respGetStatus = null;

        /**
         * WiFiConfigPayload cmdSetConfig.
         * @member {config.ICmdSetConfig|null|undefined} cmdSetConfig
         * @memberof config.WiFiConfigPayload
         * @instance
         */
        WiFiConfigPayload.prototype.cmdSetConfig = null;

        /**
         * WiFiConfigPayload respSetConfig.
         * @member {config.IRespSetConfig|null|undefined} respSetConfig
         * @memberof config.WiFiConfigPayload
         * @instance
         */
        WiFiConfigPayload.prototype.respSetConfig = null;

        /**
         * WiFiConfigPayload cmdApplyConfig.
         * @member {config.ICmdApplyConfig|null|undefined} cmdApplyConfig
         * @memberof config.WiFiConfigPayload
         * @instance
         */
        WiFiConfigPayload.prototype.cmdApplyConfig = null;

        /**
         * WiFiConfigPayload respApplyConfig.
         * @member {config.IRespApplyConfig|null|undefined} respApplyConfig
         * @memberof config.WiFiConfigPayload
         * @instance
         */
        WiFiConfigPayload.prototype.respApplyConfig = null;

        // OneOf field names bound to virtual getters and setters
        var $oneOfFields;

        /**
         * WiFiConfigPayload payload.
         * @member {"cmdGetStatus"|"respGetStatus"|"cmdSetConfig"|"respSetConfig"|"cmdApplyConfig"|"respApplyConfig"|undefined} payload
         * @memberof config.WiFiConfigPayload
         * @instance
         */
        Object.defineProperty(WiFiConfigPayload.prototype, "payload", {
            get: $util.oneOfGetter($oneOfFields = ["cmdGetStatus", "respGetStatus", "cmdSetConfig", "respSetConfig", "cmdApplyConfig", "respApplyConfig"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new WiFiConfigPayload instance using the specified properties.
         * @function create
         * @memberof config.WiFiConfigPayload
         * @static
         * @param {config.IWiFiConfigPayload=} [properties] Properties to set
         * @returns {config.WiFiConfigPayload} WiFiConfigPayload instance
         */
        WiFiConfigPayload.create = function create(properties) {
            return new WiFiConfigPayload(properties);
        };

        /**
         * Encodes the specified WiFiConfigPayload message. Does not implicitly {@link config.WiFiConfigPayload.verify|verify} messages.
         * @function encode
         * @memberof config.WiFiConfigPayload
         * @static
         * @param {config.IWiFiConfigPayload} message WiFiConfigPayload message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        WiFiConfigPayload.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.msg != null && Object.hasOwnProperty.call(message, "msg"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.msg);
            if (message.cmdGetStatus != null && Object.hasOwnProperty.call(message, "cmdGetStatus"))
                $root.config.CmdGetStatus.encode(message.cmdGetStatus, writer.uint32(/* id 10, wireType 2 =*/82).fork()).ldelim();
            if (message.respGetStatus != null && Object.hasOwnProperty.call(message, "respGetStatus"))
                $root.config.RespGetStatus.encode(message.respGetStatus, writer.uint32(/* id 11, wireType 2 =*/90).fork()).ldelim();
            if (message.cmdSetConfig != null && Object.hasOwnProperty.call(message, "cmdSetConfig"))
                $root.config.CmdSetConfig.encode(message.cmdSetConfig, writer.uint32(/* id 12, wireType 2 =*/98).fork()).ldelim();
            if (message.respSetConfig != null && Object.hasOwnProperty.call(message, "respSetConfig"))
                $root.config.RespSetConfig.encode(message.respSetConfig, writer.uint32(/* id 13, wireType 2 =*/106).fork()).ldelim();
            if (message.cmdApplyConfig != null && Object.hasOwnProperty.call(message, "cmdApplyConfig"))
                $root.config.CmdApplyConfig.encode(message.cmdApplyConfig, writer.uint32(/* id 14, wireType 2 =*/114).fork()).ldelim();
            if (message.respApplyConfig != null && Object.hasOwnProperty.call(message, "respApplyConfig"))
                $root.config.RespApplyConfig.encode(message.respApplyConfig, writer.uint32(/* id 15, wireType 2 =*/122).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified WiFiConfigPayload message, length delimited. Does not implicitly {@link config.WiFiConfigPayload.verify|verify} messages.
         * @function encodeDelimited
         * @memberof config.WiFiConfigPayload
         * @static
         * @param {config.IWiFiConfigPayload} message WiFiConfigPayload message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        WiFiConfigPayload.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a WiFiConfigPayload message from the specified reader or buffer.
         * @function decode
         * @memberof config.WiFiConfigPayload
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {config.WiFiConfigPayload} WiFiConfigPayload
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        WiFiConfigPayload.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.config.WiFiConfigPayload();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.msg = reader.int32();
                        break;
                    }
                case 10: {
                        message.cmdGetStatus = $root.config.CmdGetStatus.decode(reader, reader.uint32());
                        break;
                    }
                case 11: {
                        message.respGetStatus = $root.config.RespGetStatus.decode(reader, reader.uint32());
                        break;
                    }
                case 12: {
                        message.cmdSetConfig = $root.config.CmdSetConfig.decode(reader, reader.uint32());
                        break;
                    }
                case 13: {
                        message.respSetConfig = $root.config.RespSetConfig.decode(reader, reader.uint32());
                        break;
                    }
                case 14: {
                        message.cmdApplyConfig = $root.config.CmdApplyConfig.decode(reader, reader.uint32());
                        break;
                    }
                case 15: {
                        message.respApplyConfig = $root.config.RespApplyConfig.decode(reader, reader.uint32());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a WiFiConfigPayload message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof config.WiFiConfigPayload
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {config.WiFiConfigPayload} WiFiConfigPayload
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        WiFiConfigPayload.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a WiFiConfigPayload message.
         * @function verify
         * @memberof config.WiFiConfigPayload
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        WiFiConfigPayload.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            var properties = {};
            if (message.msg != null && message.hasOwnProperty("msg"))
                switch (message.msg) {
                default:
                    return "msg: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                    break;
                }
            if (message.cmdGetStatus != null && message.hasOwnProperty("cmdGetStatus")) {
                properties.payload = 1;
                {
                    var error = $root.config.CmdGetStatus.verify(message.cmdGetStatus);
                    if (error)
                        return "cmdGetStatus." + error;
                }
            }
            if (message.respGetStatus != null && message.hasOwnProperty("respGetStatus")) {
                if (properties.payload === 1)
                    return "payload: multiple values";
                properties.payload = 1;
                {
                    var error = $root.config.RespGetStatus.verify(message.respGetStatus);
                    if (error)
                        return "respGetStatus." + error;
                }
            }
            if (message.cmdSetConfig != null && message.hasOwnProperty("cmdSetConfig")) {
                if (properties.payload === 1)
                    return "payload: multiple values";
                properties.payload = 1;
                {
                    var error = $root.config.CmdSetConfig.verify(message.cmdSetConfig);
                    if (error)
                        return "cmdSetConfig." + error;
                }
            }
            if (message.respSetConfig != null && message.hasOwnProperty("respSetConfig")) {
                if (properties.payload === 1)
                    return "payload: multiple values";
                properties.payload = 1;
                {
                    var error = $root.config.RespSetConfig.verify(message.respSetConfig);
                    if (error)
                        return "respSetConfig." + error;
                }
            }
            if (message.cmdApplyConfig != null && message.hasOwnProperty("cmdApplyConfig")) {
                if (properties.payload === 1)
                    return "payload: multiple values";
                properties.payload = 1;
                {
                    var error = $root.config.CmdApplyConfig.verify(message.cmdApplyConfig);
                    if (error)
                        return "cmdApplyConfig." + error;
                }
            }
            if (message.respApplyConfig != null && message.hasOwnProperty("respApplyConfig")) {
                if (properties.payload === 1)
                    return "payload: multiple values";
                properties.payload = 1;
                {
                    var error = $root.config.RespApplyConfig.verify(message.respApplyConfig);
                    if (error)
                        return "respApplyConfig." + error;
                }
            }
            return null;
        };

        /**
         * Creates a WiFiConfigPayload message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof config.WiFiConfigPayload
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {config.WiFiConfigPayload} WiFiConfigPayload
         */
        WiFiConfigPayload.fromObject = function fromObject(object) {
            if (object instanceof $root.config.WiFiConfigPayload)
                return object;
            var message = new $root.config.WiFiConfigPayload();
            switch (object.msg) {
            default:
                if (typeof object.msg === "number") {
                    message.msg = object.msg;
                    break;
                }
                break;
            case "TypeCmdGetStatus":
            case 0:
                message.msg = 0;
                break;
            case "TypeRespGetStatus":
            case 1:
                message.msg = 1;
                break;
            case "TypeCmdSetConfig":
            case 2:
                message.msg = 2;
                break;
            case "TypeRespSetConfig":
            case 3:
                message.msg = 3;
                break;
            case "TypeCmdApplyConfig":
            case 4:
                message.msg = 4;
                break;
            case "TypeRespApplyConfig":
            case 5:
                message.msg = 5;
                break;
            }
            if (object.cmdGetStatus != null) {
                if (typeof object.cmdGetStatus !== "object")
                    throw TypeError(".config.WiFiConfigPayload.cmdGetStatus: object expected");
                message.cmdGetStatus = $root.config.CmdGetStatus.fromObject(object.cmdGetStatus);
            }
            if (object.respGetStatus != null) {
                if (typeof object.respGetStatus !== "object")
                    throw TypeError(".config.WiFiConfigPayload.respGetStatus: object expected");
                message.respGetStatus = $root.config.RespGetStatus.fromObject(object.respGetStatus);
            }
            if (object.cmdSetConfig != null) {
                if (typeof object.cmdSetConfig !== "object")
                    throw TypeError(".config.WiFiConfigPayload.cmdSetConfig: object expected");
                message.cmdSetConfig = $root.config.CmdSetConfig.fromObject(object.cmdSetConfig);
            }
            if (object.respSetConfig != null) {
                if (typeof object.respSetConfig !== "object")
                    throw TypeError(".config.WiFiConfigPayload.respSetConfig: object expected");
                message.respSetConfig = $root.config.RespSetConfig.fromObject(object.respSetConfig);
            }
            if (object.cmdApplyConfig != null) {
                if (typeof object.cmdApplyConfig !== "object")
                    throw TypeError(".config.WiFiConfigPayload.cmdApplyConfig: object expected");
                message.cmdApplyConfig = $root.config.CmdApplyConfig.fromObject(object.cmdApplyConfig);
            }
            if (object.respApplyConfig != null) {
                if (typeof object.respApplyConfig !== "object")
                    throw TypeError(".config.WiFiConfigPayload.respApplyConfig: object expected");
                message.respApplyConfig = $root.config.RespApplyConfig.fromObject(object.respApplyConfig);
            }
            return message;
        };

        /**
         * Creates a plain object from a WiFiConfigPayload message. Also converts values to other types if specified.
         * @function toObject
         * @memberof config.WiFiConfigPayload
         * @static
         * @param {config.WiFiConfigPayload} message WiFiConfigPayload
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        WiFiConfigPayload.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.msg = options.enums === String ? "TypeCmdGetStatus" : 0;
            if (message.msg != null && message.hasOwnProperty("msg"))
                object.msg = options.enums === String ? $root.config.WiFiConfigMsgType[message.msg] === undefined ? message.msg : $root.config.WiFiConfigMsgType[message.msg] : message.msg;
            if (message.cmdGetStatus != null && message.hasOwnProperty("cmdGetStatus")) {
                object.cmdGetStatus = $root.config.CmdGetStatus.toObject(message.cmdGetStatus, options);
                if (options.oneofs)
                    object.payload = "cmdGetStatus";
            }
            if (message.respGetStatus != null && message.hasOwnProperty("respGetStatus")) {
                object.respGetStatus = $root.config.RespGetStatus.toObject(message.respGetStatus, options);
                if (options.oneofs)
                    object.payload = "respGetStatus";
            }
            if (message.cmdSetConfig != null && message.hasOwnProperty("cmdSetConfig")) {
                object.cmdSetConfig = $root.config.CmdSetConfig.toObject(message.cmdSetConfig, options);
                if (options.oneofs)
                    object.payload = "cmdSetConfig";
            }
            if (message.respSetConfig != null && message.hasOwnProperty("respSetConfig")) {
                object.respSetConfig = $root.config.RespSetConfig.toObject(message.respSetConfig, options);
                if (options.oneofs)
                    object.payload = "respSetConfig";
            }
            if (message.cmdApplyConfig != null && message.hasOwnProperty("cmdApplyConfig")) {
                object.cmdApplyConfig = $root.config.CmdApplyConfig.toObject(message.cmdApplyConfig, options);
                if (options.oneofs)
                    object.payload = "cmdApplyConfig";
            }
            if (message.respApplyConfig != null && message.hasOwnProperty("respApplyConfig")) {
                object.respApplyConfig = $root.config.RespApplyConfig.toObject(message.respApplyConfig, options);
                if (options.oneofs)
                    object.payload = "respApplyConfig";
            }
            return object;
        };

        /**
         * Converts this WiFiConfigPayload to JSON.
         * @function toJSON
         * @memberof config.WiFiConfigPayload
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        WiFiConfigPayload.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for WiFiConfigPayload
         * @function getTypeUrl
         * @memberof config.WiFiConfigPayload
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        WiFiConfigPayload.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/config.WiFiConfigPayload";
        };

        return WiFiConfigPayload;
    })();

    return config;
})();

$root.ctrl = (function() {

    /**
     * Namespace ctrl.
     * @exports ctrl
     * @namespace
     */
    var ctrl = {};

    ctrl.CmdCtrlReset = (function() {

        /**
         * Properties of a CmdCtrlReset.
         * @memberof ctrl
         * @interface ICmdCtrlReset
         */

        /**
         * Constructs a new CmdCtrlReset.
         * @memberof ctrl
         * @classdesc Represents a CmdCtrlReset.
         * @implements ICmdCtrlReset
         * @constructor
         * @param {ctrl.ICmdCtrlReset=} [properties] Properties to set
         */
        function CmdCtrlReset(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new CmdCtrlReset instance using the specified properties.
         * @function create
         * @memberof ctrl.CmdCtrlReset
         * @static
         * @param {ctrl.ICmdCtrlReset=} [properties] Properties to set
         * @returns {ctrl.CmdCtrlReset} CmdCtrlReset instance
         */
        CmdCtrlReset.create = function create(properties) {
            return new CmdCtrlReset(properties);
        };

        /**
         * Encodes the specified CmdCtrlReset message. Does not implicitly {@link ctrl.CmdCtrlReset.verify|verify} messages.
         * @function encode
         * @memberof ctrl.CmdCtrlReset
         * @static
         * @param {ctrl.ICmdCtrlReset} message CmdCtrlReset message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CmdCtrlReset.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified CmdCtrlReset message, length delimited. Does not implicitly {@link ctrl.CmdCtrlReset.verify|verify} messages.
         * @function encodeDelimited
         * @memberof ctrl.CmdCtrlReset
         * @static
         * @param {ctrl.ICmdCtrlReset} message CmdCtrlReset message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CmdCtrlReset.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CmdCtrlReset message from the specified reader or buffer.
         * @function decode
         * @memberof ctrl.CmdCtrlReset
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {ctrl.CmdCtrlReset} CmdCtrlReset
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CmdCtrlReset.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ctrl.CmdCtrlReset();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a CmdCtrlReset message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof ctrl.CmdCtrlReset
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {ctrl.CmdCtrlReset} CmdCtrlReset
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CmdCtrlReset.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CmdCtrlReset message.
         * @function verify
         * @memberof ctrl.CmdCtrlReset
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CmdCtrlReset.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates a CmdCtrlReset message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof ctrl.CmdCtrlReset
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {ctrl.CmdCtrlReset} CmdCtrlReset
         */
        CmdCtrlReset.fromObject = function fromObject(object) {
            if (object instanceof $root.ctrl.CmdCtrlReset)
                return object;
            return new $root.ctrl.CmdCtrlReset();
        };

        /**
         * Creates a plain object from a CmdCtrlReset message. Also converts values to other types if specified.
         * @function toObject
         * @memberof ctrl.CmdCtrlReset
         * @static
         * @param {ctrl.CmdCtrlReset} message CmdCtrlReset
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CmdCtrlReset.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this CmdCtrlReset to JSON.
         * @function toJSON
         * @memberof ctrl.CmdCtrlReset
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CmdCtrlReset.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for CmdCtrlReset
         * @function getTypeUrl
         * @memberof ctrl.CmdCtrlReset
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        CmdCtrlReset.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/ctrl.CmdCtrlReset";
        };

        return CmdCtrlReset;
    })();

    ctrl.RespCtrlReset = (function() {

        /**
         * Properties of a RespCtrlReset.
         * @memberof ctrl
         * @interface IRespCtrlReset
         */

        /**
         * Constructs a new RespCtrlReset.
         * @memberof ctrl
         * @classdesc Represents a RespCtrlReset.
         * @implements IRespCtrlReset
         * @constructor
         * @param {ctrl.IRespCtrlReset=} [properties] Properties to set
         */
        function RespCtrlReset(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new RespCtrlReset instance using the specified properties.
         * @function create
         * @memberof ctrl.RespCtrlReset
         * @static
         * @param {ctrl.IRespCtrlReset=} [properties] Properties to set
         * @returns {ctrl.RespCtrlReset} RespCtrlReset instance
         */
        RespCtrlReset.create = function create(properties) {
            return new RespCtrlReset(properties);
        };

        /**
         * Encodes the specified RespCtrlReset message. Does not implicitly {@link ctrl.RespCtrlReset.verify|verify} messages.
         * @function encode
         * @memberof ctrl.RespCtrlReset
         * @static
         * @param {ctrl.IRespCtrlReset} message RespCtrlReset message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RespCtrlReset.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified RespCtrlReset message, length delimited. Does not implicitly {@link ctrl.RespCtrlReset.verify|verify} messages.
         * @function encodeDelimited
         * @memberof ctrl.RespCtrlReset
         * @static
         * @param {ctrl.IRespCtrlReset} message RespCtrlReset message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RespCtrlReset.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a RespCtrlReset message from the specified reader or buffer.
         * @function decode
         * @memberof ctrl.RespCtrlReset
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {ctrl.RespCtrlReset} RespCtrlReset
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RespCtrlReset.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ctrl.RespCtrlReset();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a RespCtrlReset message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof ctrl.RespCtrlReset
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {ctrl.RespCtrlReset} RespCtrlReset
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RespCtrlReset.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a RespCtrlReset message.
         * @function verify
         * @memberof ctrl.RespCtrlReset
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        RespCtrlReset.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates a RespCtrlReset message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof ctrl.RespCtrlReset
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {ctrl.RespCtrlReset} RespCtrlReset
         */
        RespCtrlReset.fromObject = function fromObject(object) {
            if (object instanceof $root.ctrl.RespCtrlReset)
                return object;
            return new $root.ctrl.RespCtrlReset();
        };

        /**
         * Creates a plain object from a RespCtrlReset message. Also converts values to other types if specified.
         * @function toObject
         * @memberof ctrl.RespCtrlReset
         * @static
         * @param {ctrl.RespCtrlReset} message RespCtrlReset
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        RespCtrlReset.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this RespCtrlReset to JSON.
         * @function toJSON
         * @memberof ctrl.RespCtrlReset
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        RespCtrlReset.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for RespCtrlReset
         * @function getTypeUrl
         * @memberof ctrl.RespCtrlReset
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        RespCtrlReset.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/ctrl.RespCtrlReset";
        };

        return RespCtrlReset;
    })();

    ctrl.CmdCtrlReprov = (function() {

        /**
         * Properties of a CmdCtrlReprov.
         * @memberof ctrl
         * @interface ICmdCtrlReprov
         */

        /**
         * Constructs a new CmdCtrlReprov.
         * @memberof ctrl
         * @classdesc Represents a CmdCtrlReprov.
         * @implements ICmdCtrlReprov
         * @constructor
         * @param {ctrl.ICmdCtrlReprov=} [properties] Properties to set
         */
        function CmdCtrlReprov(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new CmdCtrlReprov instance using the specified properties.
         * @function create
         * @memberof ctrl.CmdCtrlReprov
         * @static
         * @param {ctrl.ICmdCtrlReprov=} [properties] Properties to set
         * @returns {ctrl.CmdCtrlReprov} CmdCtrlReprov instance
         */
        CmdCtrlReprov.create = function create(properties) {
            return new CmdCtrlReprov(properties);
        };

        /**
         * Encodes the specified CmdCtrlReprov message. Does not implicitly {@link ctrl.CmdCtrlReprov.verify|verify} messages.
         * @function encode
         * @memberof ctrl.CmdCtrlReprov
         * @static
         * @param {ctrl.ICmdCtrlReprov} message CmdCtrlReprov message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CmdCtrlReprov.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified CmdCtrlReprov message, length delimited. Does not implicitly {@link ctrl.CmdCtrlReprov.verify|verify} messages.
         * @function encodeDelimited
         * @memberof ctrl.CmdCtrlReprov
         * @static
         * @param {ctrl.ICmdCtrlReprov} message CmdCtrlReprov message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CmdCtrlReprov.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CmdCtrlReprov message from the specified reader or buffer.
         * @function decode
         * @memberof ctrl.CmdCtrlReprov
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {ctrl.CmdCtrlReprov} CmdCtrlReprov
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CmdCtrlReprov.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ctrl.CmdCtrlReprov();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a CmdCtrlReprov message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof ctrl.CmdCtrlReprov
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {ctrl.CmdCtrlReprov} CmdCtrlReprov
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CmdCtrlReprov.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CmdCtrlReprov message.
         * @function verify
         * @memberof ctrl.CmdCtrlReprov
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CmdCtrlReprov.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates a CmdCtrlReprov message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof ctrl.CmdCtrlReprov
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {ctrl.CmdCtrlReprov} CmdCtrlReprov
         */
        CmdCtrlReprov.fromObject = function fromObject(object) {
            if (object instanceof $root.ctrl.CmdCtrlReprov)
                return object;
            return new $root.ctrl.CmdCtrlReprov();
        };

        /**
         * Creates a plain object from a CmdCtrlReprov message. Also converts values to other types if specified.
         * @function toObject
         * @memberof ctrl.CmdCtrlReprov
         * @static
         * @param {ctrl.CmdCtrlReprov} message CmdCtrlReprov
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CmdCtrlReprov.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this CmdCtrlReprov to JSON.
         * @function toJSON
         * @memberof ctrl.CmdCtrlReprov
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CmdCtrlReprov.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for CmdCtrlReprov
         * @function getTypeUrl
         * @memberof ctrl.CmdCtrlReprov
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        CmdCtrlReprov.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/ctrl.CmdCtrlReprov";
        };

        return CmdCtrlReprov;
    })();

    ctrl.RespCtrlReprov = (function() {

        /**
         * Properties of a RespCtrlReprov.
         * @memberof ctrl
         * @interface IRespCtrlReprov
         */

        /**
         * Constructs a new RespCtrlReprov.
         * @memberof ctrl
         * @classdesc Represents a RespCtrlReprov.
         * @implements IRespCtrlReprov
         * @constructor
         * @param {ctrl.IRespCtrlReprov=} [properties] Properties to set
         */
        function RespCtrlReprov(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new RespCtrlReprov instance using the specified properties.
         * @function create
         * @memberof ctrl.RespCtrlReprov
         * @static
         * @param {ctrl.IRespCtrlReprov=} [properties] Properties to set
         * @returns {ctrl.RespCtrlReprov} RespCtrlReprov instance
         */
        RespCtrlReprov.create = function create(properties) {
            return new RespCtrlReprov(properties);
        };

        /**
         * Encodes the specified RespCtrlReprov message. Does not implicitly {@link ctrl.RespCtrlReprov.verify|verify} messages.
         * @function encode
         * @memberof ctrl.RespCtrlReprov
         * @static
         * @param {ctrl.IRespCtrlReprov} message RespCtrlReprov message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RespCtrlReprov.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified RespCtrlReprov message, length delimited. Does not implicitly {@link ctrl.RespCtrlReprov.verify|verify} messages.
         * @function encodeDelimited
         * @memberof ctrl.RespCtrlReprov
         * @static
         * @param {ctrl.IRespCtrlReprov} message RespCtrlReprov message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RespCtrlReprov.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a RespCtrlReprov message from the specified reader or buffer.
         * @function decode
         * @memberof ctrl.RespCtrlReprov
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {ctrl.RespCtrlReprov} RespCtrlReprov
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RespCtrlReprov.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ctrl.RespCtrlReprov();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a RespCtrlReprov message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof ctrl.RespCtrlReprov
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {ctrl.RespCtrlReprov} RespCtrlReprov
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RespCtrlReprov.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a RespCtrlReprov message.
         * @function verify
         * @memberof ctrl.RespCtrlReprov
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        RespCtrlReprov.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates a RespCtrlReprov message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof ctrl.RespCtrlReprov
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {ctrl.RespCtrlReprov} RespCtrlReprov
         */
        RespCtrlReprov.fromObject = function fromObject(object) {
            if (object instanceof $root.ctrl.RespCtrlReprov)
                return object;
            return new $root.ctrl.RespCtrlReprov();
        };

        /**
         * Creates a plain object from a RespCtrlReprov message. Also converts values to other types if specified.
         * @function toObject
         * @memberof ctrl.RespCtrlReprov
         * @static
         * @param {ctrl.RespCtrlReprov} message RespCtrlReprov
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        RespCtrlReprov.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this RespCtrlReprov to JSON.
         * @function toJSON
         * @memberof ctrl.RespCtrlReprov
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        RespCtrlReprov.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for RespCtrlReprov
         * @function getTypeUrl
         * @memberof ctrl.RespCtrlReprov
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        RespCtrlReprov.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/ctrl.RespCtrlReprov";
        };

        return RespCtrlReprov;
    })();

    /**
     * WiFiCtrlMsgType enum.
     * @name ctrl.WiFiCtrlMsgType
     * @enum {number}
     * @property {number} TypeCtrlReserved=0 TypeCtrlReserved value
     * @property {number} TypeCmdCtrlReset=1 TypeCmdCtrlReset value
     * @property {number} TypeRespCtrlReset=2 TypeRespCtrlReset value
     * @property {number} TypeCmdCtrlReprov=3 TypeCmdCtrlReprov value
     * @property {number} TypeRespCtrlReprov=4 TypeRespCtrlReprov value
     */
    ctrl.WiFiCtrlMsgType = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "TypeCtrlReserved"] = 0;
        values[valuesById[1] = "TypeCmdCtrlReset"] = 1;
        values[valuesById[2] = "TypeRespCtrlReset"] = 2;
        values[valuesById[3] = "TypeCmdCtrlReprov"] = 3;
        values[valuesById[4] = "TypeRespCtrlReprov"] = 4;
        return values;
    })();

    ctrl.WiFiCtrlPayload = (function() {

        /**
         * Properties of a WiFiCtrlPayload.
         * @memberof ctrl
         * @interface IWiFiCtrlPayload
         * @property {ctrl.WiFiCtrlMsgType|null} [msg] WiFiCtrlPayload msg
         * @property {constants.Status|null} [status] WiFiCtrlPayload status
         * @property {ctrl.ICmdCtrlReset|null} [cmdCtrlReset] WiFiCtrlPayload cmdCtrlReset
         * @property {ctrl.IRespCtrlReset|null} [respCtrlReset] WiFiCtrlPayload respCtrlReset
         * @property {ctrl.ICmdCtrlReprov|null} [cmdCtrlReprov] WiFiCtrlPayload cmdCtrlReprov
         * @property {ctrl.IRespCtrlReprov|null} [respCtrlReprov] WiFiCtrlPayload respCtrlReprov
         */

        /**
         * Constructs a new WiFiCtrlPayload.
         * @memberof ctrl
         * @classdesc Represents a WiFiCtrlPayload.
         * @implements IWiFiCtrlPayload
         * @constructor
         * @param {ctrl.IWiFiCtrlPayload=} [properties] Properties to set
         */
        function WiFiCtrlPayload(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * WiFiCtrlPayload msg.
         * @member {ctrl.WiFiCtrlMsgType} msg
         * @memberof ctrl.WiFiCtrlPayload
         * @instance
         */
        WiFiCtrlPayload.prototype.msg = 0;

        /**
         * WiFiCtrlPayload status.
         * @member {constants.Status} status
         * @memberof ctrl.WiFiCtrlPayload
         * @instance
         */
        WiFiCtrlPayload.prototype.status = 0;

        /**
         * WiFiCtrlPayload cmdCtrlReset.
         * @member {ctrl.ICmdCtrlReset|null|undefined} cmdCtrlReset
         * @memberof ctrl.WiFiCtrlPayload
         * @instance
         */
        WiFiCtrlPayload.prototype.cmdCtrlReset = null;

        /**
         * WiFiCtrlPayload respCtrlReset.
         * @member {ctrl.IRespCtrlReset|null|undefined} respCtrlReset
         * @memberof ctrl.WiFiCtrlPayload
         * @instance
         */
        WiFiCtrlPayload.prototype.respCtrlReset = null;

        /**
         * WiFiCtrlPayload cmdCtrlReprov.
         * @member {ctrl.ICmdCtrlReprov|null|undefined} cmdCtrlReprov
         * @memberof ctrl.WiFiCtrlPayload
         * @instance
         */
        WiFiCtrlPayload.prototype.cmdCtrlReprov = null;

        /**
         * WiFiCtrlPayload respCtrlReprov.
         * @member {ctrl.IRespCtrlReprov|null|undefined} respCtrlReprov
         * @memberof ctrl.WiFiCtrlPayload
         * @instance
         */
        WiFiCtrlPayload.prototype.respCtrlReprov = null;

        // OneOf field names bound to virtual getters and setters
        var $oneOfFields;

        /**
         * WiFiCtrlPayload payload.
         * @member {"cmdCtrlReset"|"respCtrlReset"|"cmdCtrlReprov"|"respCtrlReprov"|undefined} payload
         * @memberof ctrl.WiFiCtrlPayload
         * @instance
         */
        Object.defineProperty(WiFiCtrlPayload.prototype, "payload", {
            get: $util.oneOfGetter($oneOfFields = ["cmdCtrlReset", "respCtrlReset", "cmdCtrlReprov", "respCtrlReprov"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new WiFiCtrlPayload instance using the specified properties.
         * @function create
         * @memberof ctrl.WiFiCtrlPayload
         * @static
         * @param {ctrl.IWiFiCtrlPayload=} [properties] Properties to set
         * @returns {ctrl.WiFiCtrlPayload} WiFiCtrlPayload instance
         */
        WiFiCtrlPayload.create = function create(properties) {
            return new WiFiCtrlPayload(properties);
        };

        /**
         * Encodes the specified WiFiCtrlPayload message. Does not implicitly {@link ctrl.WiFiCtrlPayload.verify|verify} messages.
         * @function encode
         * @memberof ctrl.WiFiCtrlPayload
         * @static
         * @param {ctrl.IWiFiCtrlPayload} message WiFiCtrlPayload message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        WiFiCtrlPayload.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.msg != null && Object.hasOwnProperty.call(message, "msg"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.msg);
            if (message.status != null && Object.hasOwnProperty.call(message, "status"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.status);
            if (message.cmdCtrlReset != null && Object.hasOwnProperty.call(message, "cmdCtrlReset"))
                $root.ctrl.CmdCtrlReset.encode(message.cmdCtrlReset, writer.uint32(/* id 11, wireType 2 =*/90).fork()).ldelim();
            if (message.respCtrlReset != null && Object.hasOwnProperty.call(message, "respCtrlReset"))
                $root.ctrl.RespCtrlReset.encode(message.respCtrlReset, writer.uint32(/* id 12, wireType 2 =*/98).fork()).ldelim();
            if (message.cmdCtrlReprov != null && Object.hasOwnProperty.call(message, "cmdCtrlReprov"))
                $root.ctrl.CmdCtrlReprov.encode(message.cmdCtrlReprov, writer.uint32(/* id 13, wireType 2 =*/106).fork()).ldelim();
            if (message.respCtrlReprov != null && Object.hasOwnProperty.call(message, "respCtrlReprov"))
                $root.ctrl.RespCtrlReprov.encode(message.respCtrlReprov, writer.uint32(/* id 14, wireType 2 =*/114).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified WiFiCtrlPayload message, length delimited. Does not implicitly {@link ctrl.WiFiCtrlPayload.verify|verify} messages.
         * @function encodeDelimited
         * @memberof ctrl.WiFiCtrlPayload
         * @static
         * @param {ctrl.IWiFiCtrlPayload} message WiFiCtrlPayload message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        WiFiCtrlPayload.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a WiFiCtrlPayload message from the specified reader or buffer.
         * @function decode
         * @memberof ctrl.WiFiCtrlPayload
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {ctrl.WiFiCtrlPayload} WiFiCtrlPayload
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        WiFiCtrlPayload.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ctrl.WiFiCtrlPayload();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.msg = reader.int32();
                        break;
                    }
                case 2: {
                        message.status = reader.int32();
                        break;
                    }
                case 11: {
                        message.cmdCtrlReset = $root.ctrl.CmdCtrlReset.decode(reader, reader.uint32());
                        break;
                    }
                case 12: {
                        message.respCtrlReset = $root.ctrl.RespCtrlReset.decode(reader, reader.uint32());
                        break;
                    }
                case 13: {
                        message.cmdCtrlReprov = $root.ctrl.CmdCtrlReprov.decode(reader, reader.uint32());
                        break;
                    }
                case 14: {
                        message.respCtrlReprov = $root.ctrl.RespCtrlReprov.decode(reader, reader.uint32());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a WiFiCtrlPayload message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof ctrl.WiFiCtrlPayload
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {ctrl.WiFiCtrlPayload} WiFiCtrlPayload
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        WiFiCtrlPayload.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a WiFiCtrlPayload message.
         * @function verify
         * @memberof ctrl.WiFiCtrlPayload
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        WiFiCtrlPayload.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            var properties = {};
            if (message.msg != null && message.hasOwnProperty("msg"))
                switch (message.msg) {
                default:
                    return "msg: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                    break;
                }
            if (message.status != null && message.hasOwnProperty("status"))
                switch (message.status) {
                default:
                    return "status: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                case 6:
                case 7:
                    break;
                }
            if (message.cmdCtrlReset != null && message.hasOwnProperty("cmdCtrlReset")) {
                properties.payload = 1;
                {
                    var error = $root.ctrl.CmdCtrlReset.verify(message.cmdCtrlReset);
                    if (error)
                        return "cmdCtrlReset." + error;
                }
            }
            if (message.respCtrlReset != null && message.hasOwnProperty("respCtrlReset")) {
                if (properties.payload === 1)
                    return "payload: multiple values";
                properties.payload = 1;
                {
                    var error = $root.ctrl.RespCtrlReset.verify(message.respCtrlReset);
                    if (error)
                        return "respCtrlReset." + error;
                }
            }
            if (message.cmdCtrlReprov != null && message.hasOwnProperty("cmdCtrlReprov")) {
                if (properties.payload === 1)
                    return "payload: multiple values";
                properties.payload = 1;
                {
                    var error = $root.ctrl.CmdCtrlReprov.verify(message.cmdCtrlReprov);
                    if (error)
                        return "cmdCtrlReprov." + error;
                }
            }
            if (message.respCtrlReprov != null && message.hasOwnProperty("respCtrlReprov")) {
                if (properties.payload === 1)
                    return "payload: multiple values";
                properties.payload = 1;
                {
                    var error = $root.ctrl.RespCtrlReprov.verify(message.respCtrlReprov);
                    if (error)
                        return "respCtrlReprov." + error;
                }
            }
            return null;
        };

        /**
         * Creates a WiFiCtrlPayload message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof ctrl.WiFiCtrlPayload
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {ctrl.WiFiCtrlPayload} WiFiCtrlPayload
         */
        WiFiCtrlPayload.fromObject = function fromObject(object) {
            if (object instanceof $root.ctrl.WiFiCtrlPayload)
                return object;
            var message = new $root.ctrl.WiFiCtrlPayload();
            switch (object.msg) {
            default:
                if (typeof object.msg === "number") {
                    message.msg = object.msg;
                    break;
                }
                break;
            case "TypeCtrlReserved":
            case 0:
                message.msg = 0;
                break;
            case "TypeCmdCtrlReset":
            case 1:
                message.msg = 1;
                break;
            case "TypeRespCtrlReset":
            case 2:
                message.msg = 2;
                break;
            case "TypeCmdCtrlReprov":
            case 3:
                message.msg = 3;
                break;
            case "TypeRespCtrlReprov":
            case 4:
                message.msg = 4;
                break;
            }
            switch (object.status) {
            default:
                if (typeof object.status === "number") {
                    message.status = object.status;
                    break;
                }
                break;
            case "Success":
            case 0:
                message.status = 0;
                break;
            case "InvalidSecScheme":
            case 1:
                message.status = 1;
                break;
            case "InvalidProto":
            case 2:
                message.status = 2;
                break;
            case "TooManySessions":
            case 3:
                message.status = 3;
                break;
            case "InvalidArgument":
            case 4:
                message.status = 4;
                break;
            case "InternalError":
            case 5:
                message.status = 5;
                break;
            case "CryptoError":
            case 6:
                message.status = 6;
                break;
            case "InvalidSession":
            case 7:
                message.status = 7;
                break;
            }
            if (object.cmdCtrlReset != null) {
                if (typeof object.cmdCtrlReset !== "object")
                    throw TypeError(".ctrl.WiFiCtrlPayload.cmdCtrlReset: object expected");
                message.cmdCtrlReset = $root.ctrl.CmdCtrlReset.fromObject(object.cmdCtrlReset);
            }
            if (object.respCtrlReset != null) {
                if (typeof object.respCtrlReset !== "object")
                    throw TypeError(".ctrl.WiFiCtrlPayload.respCtrlReset: object expected");
                message.respCtrlReset = $root.ctrl.RespCtrlReset.fromObject(object.respCtrlReset);
            }
            if (object.cmdCtrlReprov != null) {
                if (typeof object.cmdCtrlReprov !== "object")
                    throw TypeError(".ctrl.WiFiCtrlPayload.cmdCtrlReprov: object expected");
                message.cmdCtrlReprov = $root.ctrl.CmdCtrlReprov.fromObject(object.cmdCtrlReprov);
            }
            if (object.respCtrlReprov != null) {
                if (typeof object.respCtrlReprov !== "object")
                    throw TypeError(".ctrl.WiFiCtrlPayload.respCtrlReprov: object expected");
                message.respCtrlReprov = $root.ctrl.RespCtrlReprov.fromObject(object.respCtrlReprov);
            }
            return message;
        };

        /**
         * Creates a plain object from a WiFiCtrlPayload message. Also converts values to other types if specified.
         * @function toObject
         * @memberof ctrl.WiFiCtrlPayload
         * @static
         * @param {ctrl.WiFiCtrlPayload} message WiFiCtrlPayload
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        WiFiCtrlPayload.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.msg = options.enums === String ? "TypeCtrlReserved" : 0;
                object.status = options.enums === String ? "Success" : 0;
            }
            if (message.msg != null && message.hasOwnProperty("msg"))
                object.msg = options.enums === String ? $root.ctrl.WiFiCtrlMsgType[message.msg] === undefined ? message.msg : $root.ctrl.WiFiCtrlMsgType[message.msg] : message.msg;
            if (message.status != null && message.hasOwnProperty("status"))
                object.status = options.enums === String ? $root.constants.Status[message.status] === undefined ? message.status : $root.constants.Status[message.status] : message.status;
            if (message.cmdCtrlReset != null && message.hasOwnProperty("cmdCtrlReset")) {
                object.cmdCtrlReset = $root.ctrl.CmdCtrlReset.toObject(message.cmdCtrlReset, options);
                if (options.oneofs)
                    object.payload = "cmdCtrlReset";
            }
            if (message.respCtrlReset != null && message.hasOwnProperty("respCtrlReset")) {
                object.respCtrlReset = $root.ctrl.RespCtrlReset.toObject(message.respCtrlReset, options);
                if (options.oneofs)
                    object.payload = "respCtrlReset";
            }
            if (message.cmdCtrlReprov != null && message.hasOwnProperty("cmdCtrlReprov")) {
                object.cmdCtrlReprov = $root.ctrl.CmdCtrlReprov.toObject(message.cmdCtrlReprov, options);
                if (options.oneofs)
                    object.payload = "cmdCtrlReprov";
            }
            if (message.respCtrlReprov != null && message.hasOwnProperty("respCtrlReprov")) {
                object.respCtrlReprov = $root.ctrl.RespCtrlReprov.toObject(message.respCtrlReprov, options);
                if (options.oneofs)
                    object.payload = "respCtrlReprov";
            }
            return object;
        };

        /**
         * Converts this WiFiCtrlPayload to JSON.
         * @function toJSON
         * @memberof ctrl.WiFiCtrlPayload
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        WiFiCtrlPayload.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for WiFiCtrlPayload
         * @function getTypeUrl
         * @memberof ctrl.WiFiCtrlPayload
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        WiFiCtrlPayload.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/ctrl.WiFiCtrlPayload";
        };

        return WiFiCtrlPayload;
    })();

    return ctrl;
})();

$root.scan = (function() {

    /**
     * Namespace scan.
     * @exports scan
     * @namespace
     */
    var scan = {};

    scan.CmdScanStart = (function() {

        /**
         * Properties of a CmdScanStart.
         * @memberof scan
         * @interface ICmdScanStart
         * @property {boolean|null} [blocking] CmdScanStart blocking
         * @property {boolean|null} [passive] CmdScanStart passive
         * @property {number|null} [groupChannels] CmdScanStart groupChannels
         * @property {number|null} [periodMs] CmdScanStart periodMs
         */

        /**
         * Constructs a new CmdScanStart.
         * @memberof scan
         * @classdesc Represents a CmdScanStart.
         * @implements ICmdScanStart
         * @constructor
         * @param {scan.ICmdScanStart=} [properties] Properties to set
         */
        function CmdScanStart(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * CmdScanStart blocking.
         * @member {boolean} blocking
         * @memberof scan.CmdScanStart
         * @instance
         */
        CmdScanStart.prototype.blocking = false;

        /**
         * CmdScanStart passive.
         * @member {boolean} passive
         * @memberof scan.CmdScanStart
         * @instance
         */
        CmdScanStart.prototype.passive = false;

        /**
         * CmdScanStart groupChannels.
         * @member {number} groupChannels
         * @memberof scan.CmdScanStart
         * @instance
         */
        CmdScanStart.prototype.groupChannels = 0;

        /**
         * CmdScanStart periodMs.
         * @member {number} periodMs
         * @memberof scan.CmdScanStart
         * @instance
         */
        CmdScanStart.prototype.periodMs = 0;

        /**
         * Creates a new CmdScanStart instance using the specified properties.
         * @function create
         * @memberof scan.CmdScanStart
         * @static
         * @param {scan.ICmdScanStart=} [properties] Properties to set
         * @returns {scan.CmdScanStart} CmdScanStart instance
         */
        CmdScanStart.create = function create(properties) {
            return new CmdScanStart(properties);
        };

        /**
         * Encodes the specified CmdScanStart message. Does not implicitly {@link scan.CmdScanStart.verify|verify} messages.
         * @function encode
         * @memberof scan.CmdScanStart
         * @static
         * @param {scan.ICmdScanStart} message CmdScanStart message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CmdScanStart.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.blocking != null && Object.hasOwnProperty.call(message, "blocking"))
                writer.uint32(/* id 1, wireType 0 =*/8).bool(message.blocking);
            if (message.passive != null && Object.hasOwnProperty.call(message, "passive"))
                writer.uint32(/* id 2, wireType 0 =*/16).bool(message.passive);
            if (message.groupChannels != null && Object.hasOwnProperty.call(message, "groupChannels"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.groupChannels);
            if (message.periodMs != null && Object.hasOwnProperty.call(message, "periodMs"))
                writer.uint32(/* id 4, wireType 0 =*/32).uint32(message.periodMs);
            return writer;
        };

        /**
         * Encodes the specified CmdScanStart message, length delimited. Does not implicitly {@link scan.CmdScanStart.verify|verify} messages.
         * @function encodeDelimited
         * @memberof scan.CmdScanStart
         * @static
         * @param {scan.ICmdScanStart} message CmdScanStart message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CmdScanStart.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CmdScanStart message from the specified reader or buffer.
         * @function decode
         * @memberof scan.CmdScanStart
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {scan.CmdScanStart} CmdScanStart
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CmdScanStart.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.scan.CmdScanStart();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.blocking = reader.bool();
                        break;
                    }
                case 2: {
                        message.passive = reader.bool();
                        break;
                    }
                case 3: {
                        message.groupChannels = reader.uint32();
                        break;
                    }
                case 4: {
                        message.periodMs = reader.uint32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a CmdScanStart message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof scan.CmdScanStart
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {scan.CmdScanStart} CmdScanStart
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CmdScanStart.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CmdScanStart message.
         * @function verify
         * @memberof scan.CmdScanStart
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CmdScanStart.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.blocking != null && message.hasOwnProperty("blocking"))
                if (typeof message.blocking !== "boolean")
                    return "blocking: boolean expected";
            if (message.passive != null && message.hasOwnProperty("passive"))
                if (typeof message.passive !== "boolean")
                    return "passive: boolean expected";
            if (message.groupChannels != null && message.hasOwnProperty("groupChannels"))
                if (!$util.isInteger(message.groupChannels))
                    return "groupChannels: integer expected";
            if (message.periodMs != null && message.hasOwnProperty("periodMs"))
                if (!$util.isInteger(message.periodMs))
                    return "periodMs: integer expected";
            return null;
        };

        /**
         * Creates a CmdScanStart message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof scan.CmdScanStart
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {scan.CmdScanStart} CmdScanStart
         */
        CmdScanStart.fromObject = function fromObject(object) {
            if (object instanceof $root.scan.CmdScanStart)
                return object;
            var message = new $root.scan.CmdScanStart();
            if (object.blocking != null)
                message.blocking = Boolean(object.blocking);
            if (object.passive != null)
                message.passive = Boolean(object.passive);
            if (object.groupChannels != null)
                message.groupChannels = object.groupChannels >>> 0;
            if (object.periodMs != null)
                message.periodMs = object.periodMs >>> 0;
            return message;
        };

        /**
         * Creates a plain object from a CmdScanStart message. Also converts values to other types if specified.
         * @function toObject
         * @memberof scan.CmdScanStart
         * @static
         * @param {scan.CmdScanStart} message CmdScanStart
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CmdScanStart.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.blocking = false;
                object.passive = false;
                object.groupChannels = 0;
                object.periodMs = 0;
            }
            if (message.blocking != null && message.hasOwnProperty("blocking"))
                object.blocking = message.blocking;
            if (message.passive != null && message.hasOwnProperty("passive"))
                object.passive = message.passive;
            if (message.groupChannels != null && message.hasOwnProperty("groupChannels"))
                object.groupChannels = message.groupChannels;
            if (message.periodMs != null && message.hasOwnProperty("periodMs"))
                object.periodMs = message.periodMs;
            return object;
        };

        /**
         * Converts this CmdScanStart to JSON.
         * @function toJSON
         * @memberof scan.CmdScanStart
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CmdScanStart.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for CmdScanStart
         * @function getTypeUrl
         * @memberof scan.CmdScanStart
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        CmdScanStart.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/scan.CmdScanStart";
        };

        return CmdScanStart;
    })();

    scan.RespScanStart = (function() {

        /**
         * Properties of a RespScanStart.
         * @memberof scan
         * @interface IRespScanStart
         */

        /**
         * Constructs a new RespScanStart.
         * @memberof scan
         * @classdesc Represents a RespScanStart.
         * @implements IRespScanStart
         * @constructor
         * @param {scan.IRespScanStart=} [properties] Properties to set
         */
        function RespScanStart(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new RespScanStart instance using the specified properties.
         * @function create
         * @memberof scan.RespScanStart
         * @static
         * @param {scan.IRespScanStart=} [properties] Properties to set
         * @returns {scan.RespScanStart} RespScanStart instance
         */
        RespScanStart.create = function create(properties) {
            return new RespScanStart(properties);
        };

        /**
         * Encodes the specified RespScanStart message. Does not implicitly {@link scan.RespScanStart.verify|verify} messages.
         * @function encode
         * @memberof scan.RespScanStart
         * @static
         * @param {scan.IRespScanStart} message RespScanStart message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RespScanStart.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified RespScanStart message, length delimited. Does not implicitly {@link scan.RespScanStart.verify|verify} messages.
         * @function encodeDelimited
         * @memberof scan.RespScanStart
         * @static
         * @param {scan.IRespScanStart} message RespScanStart message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RespScanStart.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a RespScanStart message from the specified reader or buffer.
         * @function decode
         * @memberof scan.RespScanStart
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {scan.RespScanStart} RespScanStart
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RespScanStart.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.scan.RespScanStart();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a RespScanStart message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof scan.RespScanStart
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {scan.RespScanStart} RespScanStart
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RespScanStart.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a RespScanStart message.
         * @function verify
         * @memberof scan.RespScanStart
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        RespScanStart.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates a RespScanStart message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof scan.RespScanStart
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {scan.RespScanStart} RespScanStart
         */
        RespScanStart.fromObject = function fromObject(object) {
            if (object instanceof $root.scan.RespScanStart)
                return object;
            return new $root.scan.RespScanStart();
        };

        /**
         * Creates a plain object from a RespScanStart message. Also converts values to other types if specified.
         * @function toObject
         * @memberof scan.RespScanStart
         * @static
         * @param {scan.RespScanStart} message RespScanStart
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        RespScanStart.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this RespScanStart to JSON.
         * @function toJSON
         * @memberof scan.RespScanStart
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        RespScanStart.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for RespScanStart
         * @function getTypeUrl
         * @memberof scan.RespScanStart
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        RespScanStart.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/scan.RespScanStart";
        };

        return RespScanStart;
    })();

    scan.CmdScanStatus = (function() {

        /**
         * Properties of a CmdScanStatus.
         * @memberof scan
         * @interface ICmdScanStatus
         */

        /**
         * Constructs a new CmdScanStatus.
         * @memberof scan
         * @classdesc Represents a CmdScanStatus.
         * @implements ICmdScanStatus
         * @constructor
         * @param {scan.ICmdScanStatus=} [properties] Properties to set
         */
        function CmdScanStatus(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new CmdScanStatus instance using the specified properties.
         * @function create
         * @memberof scan.CmdScanStatus
         * @static
         * @param {scan.ICmdScanStatus=} [properties] Properties to set
         * @returns {scan.CmdScanStatus} CmdScanStatus instance
         */
        CmdScanStatus.create = function create(properties) {
            return new CmdScanStatus(properties);
        };

        /**
         * Encodes the specified CmdScanStatus message. Does not implicitly {@link scan.CmdScanStatus.verify|verify} messages.
         * @function encode
         * @memberof scan.CmdScanStatus
         * @static
         * @param {scan.ICmdScanStatus} message CmdScanStatus message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CmdScanStatus.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified CmdScanStatus message, length delimited. Does not implicitly {@link scan.CmdScanStatus.verify|verify} messages.
         * @function encodeDelimited
         * @memberof scan.CmdScanStatus
         * @static
         * @param {scan.ICmdScanStatus} message CmdScanStatus message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CmdScanStatus.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CmdScanStatus message from the specified reader or buffer.
         * @function decode
         * @memberof scan.CmdScanStatus
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {scan.CmdScanStatus} CmdScanStatus
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CmdScanStatus.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.scan.CmdScanStatus();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a CmdScanStatus message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof scan.CmdScanStatus
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {scan.CmdScanStatus} CmdScanStatus
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CmdScanStatus.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CmdScanStatus message.
         * @function verify
         * @memberof scan.CmdScanStatus
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CmdScanStatus.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates a CmdScanStatus message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof scan.CmdScanStatus
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {scan.CmdScanStatus} CmdScanStatus
         */
        CmdScanStatus.fromObject = function fromObject(object) {
            if (object instanceof $root.scan.CmdScanStatus)
                return object;
            return new $root.scan.CmdScanStatus();
        };

        /**
         * Creates a plain object from a CmdScanStatus message. Also converts values to other types if specified.
         * @function toObject
         * @memberof scan.CmdScanStatus
         * @static
         * @param {scan.CmdScanStatus} message CmdScanStatus
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CmdScanStatus.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this CmdScanStatus to JSON.
         * @function toJSON
         * @memberof scan.CmdScanStatus
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CmdScanStatus.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for CmdScanStatus
         * @function getTypeUrl
         * @memberof scan.CmdScanStatus
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        CmdScanStatus.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/scan.CmdScanStatus";
        };

        return CmdScanStatus;
    })();

    scan.RespScanStatus = (function() {

        /**
         * Properties of a RespScanStatus.
         * @memberof scan
         * @interface IRespScanStatus
         * @property {boolean|null} [scanFinished] RespScanStatus scanFinished
         * @property {number|null} [resultCount] RespScanStatus resultCount
         */

        /**
         * Constructs a new RespScanStatus.
         * @memberof scan
         * @classdesc Represents a RespScanStatus.
         * @implements IRespScanStatus
         * @constructor
         * @param {scan.IRespScanStatus=} [properties] Properties to set
         */
        function RespScanStatus(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * RespScanStatus scanFinished.
         * @member {boolean} scanFinished
         * @memberof scan.RespScanStatus
         * @instance
         */
        RespScanStatus.prototype.scanFinished = false;

        /**
         * RespScanStatus resultCount.
         * @member {number} resultCount
         * @memberof scan.RespScanStatus
         * @instance
         */
        RespScanStatus.prototype.resultCount = 0;

        /**
         * Creates a new RespScanStatus instance using the specified properties.
         * @function create
         * @memberof scan.RespScanStatus
         * @static
         * @param {scan.IRespScanStatus=} [properties] Properties to set
         * @returns {scan.RespScanStatus} RespScanStatus instance
         */
        RespScanStatus.create = function create(properties) {
            return new RespScanStatus(properties);
        };

        /**
         * Encodes the specified RespScanStatus message. Does not implicitly {@link scan.RespScanStatus.verify|verify} messages.
         * @function encode
         * @memberof scan.RespScanStatus
         * @static
         * @param {scan.IRespScanStatus} message RespScanStatus message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RespScanStatus.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.scanFinished != null && Object.hasOwnProperty.call(message, "scanFinished"))
                writer.uint32(/* id 1, wireType 0 =*/8).bool(message.scanFinished);
            if (message.resultCount != null && Object.hasOwnProperty.call(message, "resultCount"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.resultCount);
            return writer;
        };

        /**
         * Encodes the specified RespScanStatus message, length delimited. Does not implicitly {@link scan.RespScanStatus.verify|verify} messages.
         * @function encodeDelimited
         * @memberof scan.RespScanStatus
         * @static
         * @param {scan.IRespScanStatus} message RespScanStatus message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RespScanStatus.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a RespScanStatus message from the specified reader or buffer.
         * @function decode
         * @memberof scan.RespScanStatus
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {scan.RespScanStatus} RespScanStatus
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RespScanStatus.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.scan.RespScanStatus();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.scanFinished = reader.bool();
                        break;
                    }
                case 2: {
                        message.resultCount = reader.uint32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a RespScanStatus message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof scan.RespScanStatus
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {scan.RespScanStatus} RespScanStatus
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RespScanStatus.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a RespScanStatus message.
         * @function verify
         * @memberof scan.RespScanStatus
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        RespScanStatus.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.scanFinished != null && message.hasOwnProperty("scanFinished"))
                if (typeof message.scanFinished !== "boolean")
                    return "scanFinished: boolean expected";
            if (message.resultCount != null && message.hasOwnProperty("resultCount"))
                if (!$util.isInteger(message.resultCount))
                    return "resultCount: integer expected";
            return null;
        };

        /**
         * Creates a RespScanStatus message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof scan.RespScanStatus
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {scan.RespScanStatus} RespScanStatus
         */
        RespScanStatus.fromObject = function fromObject(object) {
            if (object instanceof $root.scan.RespScanStatus)
                return object;
            var message = new $root.scan.RespScanStatus();
            if (object.scanFinished != null)
                message.scanFinished = Boolean(object.scanFinished);
            if (object.resultCount != null)
                message.resultCount = object.resultCount >>> 0;
            return message;
        };

        /**
         * Creates a plain object from a RespScanStatus message. Also converts values to other types if specified.
         * @function toObject
         * @memberof scan.RespScanStatus
         * @static
         * @param {scan.RespScanStatus} message RespScanStatus
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        RespScanStatus.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.scanFinished = false;
                object.resultCount = 0;
            }
            if (message.scanFinished != null && message.hasOwnProperty("scanFinished"))
                object.scanFinished = message.scanFinished;
            if (message.resultCount != null && message.hasOwnProperty("resultCount"))
                object.resultCount = message.resultCount;
            return object;
        };

        /**
         * Converts this RespScanStatus to JSON.
         * @function toJSON
         * @memberof scan.RespScanStatus
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        RespScanStatus.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for RespScanStatus
         * @function getTypeUrl
         * @memberof scan.RespScanStatus
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        RespScanStatus.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/scan.RespScanStatus";
        };

        return RespScanStatus;
    })();

    scan.CmdScanResult = (function() {

        /**
         * Properties of a CmdScanResult.
         * @memberof scan
         * @interface ICmdScanResult
         * @property {number|null} [startIndex] CmdScanResult startIndex
         * @property {number|null} [count] CmdScanResult count
         */

        /**
         * Constructs a new CmdScanResult.
         * @memberof scan
         * @classdesc Represents a CmdScanResult.
         * @implements ICmdScanResult
         * @constructor
         * @param {scan.ICmdScanResult=} [properties] Properties to set
         */
        function CmdScanResult(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * CmdScanResult startIndex.
         * @member {number} startIndex
         * @memberof scan.CmdScanResult
         * @instance
         */
        CmdScanResult.prototype.startIndex = 0;

        /**
         * CmdScanResult count.
         * @member {number} count
         * @memberof scan.CmdScanResult
         * @instance
         */
        CmdScanResult.prototype.count = 0;

        /**
         * Creates a new CmdScanResult instance using the specified properties.
         * @function create
         * @memberof scan.CmdScanResult
         * @static
         * @param {scan.ICmdScanResult=} [properties] Properties to set
         * @returns {scan.CmdScanResult} CmdScanResult instance
         */
        CmdScanResult.create = function create(properties) {
            return new CmdScanResult(properties);
        };

        /**
         * Encodes the specified CmdScanResult message. Does not implicitly {@link scan.CmdScanResult.verify|verify} messages.
         * @function encode
         * @memberof scan.CmdScanResult
         * @static
         * @param {scan.ICmdScanResult} message CmdScanResult message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CmdScanResult.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.startIndex != null && Object.hasOwnProperty.call(message, "startIndex"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.startIndex);
            if (message.count != null && Object.hasOwnProperty.call(message, "count"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.count);
            return writer;
        };

        /**
         * Encodes the specified CmdScanResult message, length delimited. Does not implicitly {@link scan.CmdScanResult.verify|verify} messages.
         * @function encodeDelimited
         * @memberof scan.CmdScanResult
         * @static
         * @param {scan.ICmdScanResult} message CmdScanResult message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CmdScanResult.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CmdScanResult message from the specified reader or buffer.
         * @function decode
         * @memberof scan.CmdScanResult
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {scan.CmdScanResult} CmdScanResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CmdScanResult.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.scan.CmdScanResult();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.startIndex = reader.uint32();
                        break;
                    }
                case 2: {
                        message.count = reader.uint32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a CmdScanResult message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof scan.CmdScanResult
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {scan.CmdScanResult} CmdScanResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CmdScanResult.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CmdScanResult message.
         * @function verify
         * @memberof scan.CmdScanResult
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CmdScanResult.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.startIndex != null && message.hasOwnProperty("startIndex"))
                if (!$util.isInteger(message.startIndex))
                    return "startIndex: integer expected";
            if (message.count != null && message.hasOwnProperty("count"))
                if (!$util.isInteger(message.count))
                    return "count: integer expected";
            return null;
        };

        /**
         * Creates a CmdScanResult message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof scan.CmdScanResult
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {scan.CmdScanResult} CmdScanResult
         */
        CmdScanResult.fromObject = function fromObject(object) {
            if (object instanceof $root.scan.CmdScanResult)
                return object;
            var message = new $root.scan.CmdScanResult();
            if (object.startIndex != null)
                message.startIndex = object.startIndex >>> 0;
            if (object.count != null)
                message.count = object.count >>> 0;
            return message;
        };

        /**
         * Creates a plain object from a CmdScanResult message. Also converts values to other types if specified.
         * @function toObject
         * @memberof scan.CmdScanResult
         * @static
         * @param {scan.CmdScanResult} message CmdScanResult
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CmdScanResult.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.startIndex = 0;
                object.count = 0;
            }
            if (message.startIndex != null && message.hasOwnProperty("startIndex"))
                object.startIndex = message.startIndex;
            if (message.count != null && message.hasOwnProperty("count"))
                object.count = message.count;
            return object;
        };

        /**
         * Converts this CmdScanResult to JSON.
         * @function toJSON
         * @memberof scan.CmdScanResult
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CmdScanResult.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for CmdScanResult
         * @function getTypeUrl
         * @memberof scan.CmdScanResult
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        CmdScanResult.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/scan.CmdScanResult";
        };

        return CmdScanResult;
    })();

    scan.WiFiScanResult = (function() {

        /**
         * Properties of a WiFiScanResult.
         * @memberof scan
         * @interface IWiFiScanResult
         * @property {Uint8Array|null} [ssid] WiFiScanResult ssid
         * @property {number|null} [channel] WiFiScanResult channel
         * @property {number|null} [rssi] WiFiScanResult rssi
         * @property {Uint8Array|null} [bssid] WiFiScanResult bssid
         * @property {constants.WifiAuthMode|null} [auth] WiFiScanResult auth
         */

        /**
         * Constructs a new WiFiScanResult.
         * @memberof scan
         * @classdesc Represents a WiFiScanResult.
         * @implements IWiFiScanResult
         * @constructor
         * @param {scan.IWiFiScanResult=} [properties] Properties to set
         */
        function WiFiScanResult(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * WiFiScanResult ssid.
         * @member {Uint8Array} ssid
         * @memberof scan.WiFiScanResult
         * @instance
         */
        WiFiScanResult.prototype.ssid = $util.newBuffer([]);

        /**
         * WiFiScanResult channel.
         * @member {number} channel
         * @memberof scan.WiFiScanResult
         * @instance
         */
        WiFiScanResult.prototype.channel = 0;

        /**
         * WiFiScanResult rssi.
         * @member {number} rssi
         * @memberof scan.WiFiScanResult
         * @instance
         */
        WiFiScanResult.prototype.rssi = 0;

        /**
         * WiFiScanResult bssid.
         * @member {Uint8Array} bssid
         * @memberof scan.WiFiScanResult
         * @instance
         */
        WiFiScanResult.prototype.bssid = $util.newBuffer([]);

        /**
         * WiFiScanResult auth.
         * @member {constants.WifiAuthMode} auth
         * @memberof scan.WiFiScanResult
         * @instance
         */
        WiFiScanResult.prototype.auth = 0;

        /**
         * Creates a new WiFiScanResult instance using the specified properties.
         * @function create
         * @memberof scan.WiFiScanResult
         * @static
         * @param {scan.IWiFiScanResult=} [properties] Properties to set
         * @returns {scan.WiFiScanResult} WiFiScanResult instance
         */
        WiFiScanResult.create = function create(properties) {
            return new WiFiScanResult(properties);
        };

        /**
         * Encodes the specified WiFiScanResult message. Does not implicitly {@link scan.WiFiScanResult.verify|verify} messages.
         * @function encode
         * @memberof scan.WiFiScanResult
         * @static
         * @param {scan.IWiFiScanResult} message WiFiScanResult message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        WiFiScanResult.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.ssid != null && Object.hasOwnProperty.call(message, "ssid"))
                writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.ssid);
            if (message.channel != null && Object.hasOwnProperty.call(message, "channel"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.channel);
            if (message.rssi != null && Object.hasOwnProperty.call(message, "rssi"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.rssi);
            if (message.bssid != null && Object.hasOwnProperty.call(message, "bssid"))
                writer.uint32(/* id 4, wireType 2 =*/34).bytes(message.bssid);
            if (message.auth != null && Object.hasOwnProperty.call(message, "auth"))
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.auth);
            return writer;
        };

        /**
         * Encodes the specified WiFiScanResult message, length delimited. Does not implicitly {@link scan.WiFiScanResult.verify|verify} messages.
         * @function encodeDelimited
         * @memberof scan.WiFiScanResult
         * @static
         * @param {scan.IWiFiScanResult} message WiFiScanResult message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        WiFiScanResult.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a WiFiScanResult message from the specified reader or buffer.
         * @function decode
         * @memberof scan.WiFiScanResult
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {scan.WiFiScanResult} WiFiScanResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        WiFiScanResult.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.scan.WiFiScanResult();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.ssid = reader.bytes();
                        break;
                    }
                case 2: {
                        message.channel = reader.uint32();
                        break;
                    }
                case 3: {
                        message.rssi = reader.int32();
                        break;
                    }
                case 4: {
                        message.bssid = reader.bytes();
                        break;
                    }
                case 5: {
                        message.auth = reader.int32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a WiFiScanResult message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof scan.WiFiScanResult
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {scan.WiFiScanResult} WiFiScanResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        WiFiScanResult.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a WiFiScanResult message.
         * @function verify
         * @memberof scan.WiFiScanResult
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        WiFiScanResult.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.ssid != null && message.hasOwnProperty("ssid"))
                if (!(message.ssid && typeof message.ssid.length === "number" || $util.isString(message.ssid)))
                    return "ssid: buffer expected";
            if (message.channel != null && message.hasOwnProperty("channel"))
                if (!$util.isInteger(message.channel))
                    return "channel: integer expected";
            if (message.rssi != null && message.hasOwnProperty("rssi"))
                if (!$util.isInteger(message.rssi))
                    return "rssi: integer expected";
            if (message.bssid != null && message.hasOwnProperty("bssid"))
                if (!(message.bssid && typeof message.bssid.length === "number" || $util.isString(message.bssid)))
                    return "bssid: buffer expected";
            if (message.auth != null && message.hasOwnProperty("auth"))
                switch (message.auth) {
                default:
                    return "auth: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                case 6:
                case 7:
                    break;
                }
            return null;
        };

        /**
         * Creates a WiFiScanResult message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof scan.WiFiScanResult
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {scan.WiFiScanResult} WiFiScanResult
         */
        WiFiScanResult.fromObject = function fromObject(object) {
            if (object instanceof $root.scan.WiFiScanResult)
                return object;
            var message = new $root.scan.WiFiScanResult();
            if (object.ssid != null)
                if (typeof object.ssid === "string")
                    $util.base64.decode(object.ssid, message.ssid = $util.newBuffer($util.base64.length(object.ssid)), 0);
                else if (object.ssid.length >= 0)
                    message.ssid = object.ssid;
            if (object.channel != null)
                message.channel = object.channel >>> 0;
            if (object.rssi != null)
                message.rssi = object.rssi | 0;
            if (object.bssid != null)
                if (typeof object.bssid === "string")
                    $util.base64.decode(object.bssid, message.bssid = $util.newBuffer($util.base64.length(object.bssid)), 0);
                else if (object.bssid.length >= 0)
                    message.bssid = object.bssid;
            switch (object.auth) {
            default:
                if (typeof object.auth === "number") {
                    message.auth = object.auth;
                    break;
                }
                break;
            case "Open":
            case 0:
                message.auth = 0;
                break;
            case "WEP":
            case 1:
                message.auth = 1;
                break;
            case "WPA_PSK":
            case 2:
                message.auth = 2;
                break;
            case "WPA2_PSK":
            case 3:
                message.auth = 3;
                break;
            case "WPA_WPA2_PSK":
            case 4:
                message.auth = 4;
                break;
            case "WPA2_ENTERPRISE":
            case 5:
                message.auth = 5;
                break;
            case "WPA3_PSK":
            case 6:
                message.auth = 6;
                break;
            case "WPA2_WPA3_PSK":
            case 7:
                message.auth = 7;
                break;
            }
            return message;
        };

        /**
         * Creates a plain object from a WiFiScanResult message. Also converts values to other types if specified.
         * @function toObject
         * @memberof scan.WiFiScanResult
         * @static
         * @param {scan.WiFiScanResult} message WiFiScanResult
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        WiFiScanResult.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if (options.bytes === String)
                    object.ssid = "";
                else {
                    object.ssid = [];
                    if (options.bytes !== Array)
                        object.ssid = $util.newBuffer(object.ssid);
                }
                object.channel = 0;
                object.rssi = 0;
                if (options.bytes === String)
                    object.bssid = "";
                else {
                    object.bssid = [];
                    if (options.bytes !== Array)
                        object.bssid = $util.newBuffer(object.bssid);
                }
                object.auth = options.enums === String ? "Open" : 0;
            }
            if (message.ssid != null && message.hasOwnProperty("ssid"))
                object.ssid = options.bytes === String ? $util.base64.encode(message.ssid, 0, message.ssid.length) : options.bytes === Array ? Array.prototype.slice.call(message.ssid) : message.ssid;
            if (message.channel != null && message.hasOwnProperty("channel"))
                object.channel = message.channel;
            if (message.rssi != null && message.hasOwnProperty("rssi"))
                object.rssi = message.rssi;
            if (message.bssid != null && message.hasOwnProperty("bssid"))
                object.bssid = options.bytes === String ? $util.base64.encode(message.bssid, 0, message.bssid.length) : options.bytes === Array ? Array.prototype.slice.call(message.bssid) : message.bssid;
            if (message.auth != null && message.hasOwnProperty("auth"))
                object.auth = options.enums === String ? $root.constants.WifiAuthMode[message.auth] === undefined ? message.auth : $root.constants.WifiAuthMode[message.auth] : message.auth;
            return object;
        };

        /**
         * Converts this WiFiScanResult to JSON.
         * @function toJSON
         * @memberof scan.WiFiScanResult
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        WiFiScanResult.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for WiFiScanResult
         * @function getTypeUrl
         * @memberof scan.WiFiScanResult
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        WiFiScanResult.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/scan.WiFiScanResult";
        };

        return WiFiScanResult;
    })();

    scan.RespScanResult = (function() {

        /**
         * Properties of a RespScanResult.
         * @memberof scan
         * @interface IRespScanResult
         * @property {Array.<scan.IWiFiScanResult>|null} [entries] RespScanResult entries
         */

        /**
         * Constructs a new RespScanResult.
         * @memberof scan
         * @classdesc Represents a RespScanResult.
         * @implements IRespScanResult
         * @constructor
         * @param {scan.IRespScanResult=} [properties] Properties to set
         */
        function RespScanResult(properties) {
            this.entries = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * RespScanResult entries.
         * @member {Array.<scan.IWiFiScanResult>} entries
         * @memberof scan.RespScanResult
         * @instance
         */
        RespScanResult.prototype.entries = $util.emptyArray;

        /**
         * Creates a new RespScanResult instance using the specified properties.
         * @function create
         * @memberof scan.RespScanResult
         * @static
         * @param {scan.IRespScanResult=} [properties] Properties to set
         * @returns {scan.RespScanResult} RespScanResult instance
         */
        RespScanResult.create = function create(properties) {
            return new RespScanResult(properties);
        };

        /**
         * Encodes the specified RespScanResult message. Does not implicitly {@link scan.RespScanResult.verify|verify} messages.
         * @function encode
         * @memberof scan.RespScanResult
         * @static
         * @param {scan.IRespScanResult} message RespScanResult message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RespScanResult.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.entries != null && message.entries.length)
                for (var i = 0; i < message.entries.length; ++i)
                    $root.scan.WiFiScanResult.encode(message.entries[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified RespScanResult message, length delimited. Does not implicitly {@link scan.RespScanResult.verify|verify} messages.
         * @function encodeDelimited
         * @memberof scan.RespScanResult
         * @static
         * @param {scan.IRespScanResult} message RespScanResult message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RespScanResult.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a RespScanResult message from the specified reader or buffer.
         * @function decode
         * @memberof scan.RespScanResult
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {scan.RespScanResult} RespScanResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RespScanResult.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.scan.RespScanResult();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        if (!(message.entries && message.entries.length))
                            message.entries = [];
                        message.entries.push($root.scan.WiFiScanResult.decode(reader, reader.uint32()));
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a RespScanResult message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof scan.RespScanResult
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {scan.RespScanResult} RespScanResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RespScanResult.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a RespScanResult message.
         * @function verify
         * @memberof scan.RespScanResult
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        RespScanResult.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.entries != null && message.hasOwnProperty("entries")) {
                if (!Array.isArray(message.entries))
                    return "entries: array expected";
                for (var i = 0; i < message.entries.length; ++i) {
                    var error = $root.scan.WiFiScanResult.verify(message.entries[i]);
                    if (error)
                        return "entries." + error;
                }
            }
            return null;
        };

        /**
         * Creates a RespScanResult message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof scan.RespScanResult
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {scan.RespScanResult} RespScanResult
         */
        RespScanResult.fromObject = function fromObject(object) {
            if (object instanceof $root.scan.RespScanResult)
                return object;
            var message = new $root.scan.RespScanResult();
            if (object.entries) {
                if (!Array.isArray(object.entries))
                    throw TypeError(".scan.RespScanResult.entries: array expected");
                message.entries = [];
                for (var i = 0; i < object.entries.length; ++i) {
                    if (typeof object.entries[i] !== "object")
                        throw TypeError(".scan.RespScanResult.entries: object expected");
                    message.entries[i] = $root.scan.WiFiScanResult.fromObject(object.entries[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a RespScanResult message. Also converts values to other types if specified.
         * @function toObject
         * @memberof scan.RespScanResult
         * @static
         * @param {scan.RespScanResult} message RespScanResult
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        RespScanResult.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.entries = [];
            if (message.entries && message.entries.length) {
                object.entries = [];
                for (var j = 0; j < message.entries.length; ++j)
                    object.entries[j] = $root.scan.WiFiScanResult.toObject(message.entries[j], options);
            }
            return object;
        };

        /**
         * Converts this RespScanResult to JSON.
         * @function toJSON
         * @memberof scan.RespScanResult
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        RespScanResult.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for RespScanResult
         * @function getTypeUrl
         * @memberof scan.RespScanResult
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        RespScanResult.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/scan.RespScanResult";
        };

        return RespScanResult;
    })();

    /**
     * WiFiScanMsgType enum.
     * @name scan.WiFiScanMsgType
     * @enum {number}
     * @property {number} TypeCmdScanStart=0 TypeCmdScanStart value
     * @property {number} TypeRespScanStart=1 TypeRespScanStart value
     * @property {number} TypeCmdScanStatus=2 TypeCmdScanStatus value
     * @property {number} TypeRespScanStatus=3 TypeRespScanStatus value
     * @property {number} TypeCmdScanResult=4 TypeCmdScanResult value
     * @property {number} TypeRespScanResult=5 TypeRespScanResult value
     */
    scan.WiFiScanMsgType = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "TypeCmdScanStart"] = 0;
        values[valuesById[1] = "TypeRespScanStart"] = 1;
        values[valuesById[2] = "TypeCmdScanStatus"] = 2;
        values[valuesById[3] = "TypeRespScanStatus"] = 3;
        values[valuesById[4] = "TypeCmdScanResult"] = 4;
        values[valuesById[5] = "TypeRespScanResult"] = 5;
        return values;
    })();

    scan.WiFiScanPayload = (function() {

        /**
         * Properties of a WiFiScanPayload.
         * @memberof scan
         * @interface IWiFiScanPayload
         * @property {scan.WiFiScanMsgType|null} [msg] WiFiScanPayload msg
         * @property {constants.Status|null} [status] WiFiScanPayload status
         * @property {scan.ICmdScanStart|null} [cmdScanStart] WiFiScanPayload cmdScanStart
         * @property {scan.IRespScanStart|null} [respScanStart] WiFiScanPayload respScanStart
         * @property {scan.ICmdScanStatus|null} [cmdScanStatus] WiFiScanPayload cmdScanStatus
         * @property {scan.IRespScanStatus|null} [respScanStatus] WiFiScanPayload respScanStatus
         * @property {scan.ICmdScanResult|null} [cmdScanResult] WiFiScanPayload cmdScanResult
         * @property {scan.IRespScanResult|null} [respScanResult] WiFiScanPayload respScanResult
         */

        /**
         * Constructs a new WiFiScanPayload.
         * @memberof scan
         * @classdesc Represents a WiFiScanPayload.
         * @implements IWiFiScanPayload
         * @constructor
         * @param {scan.IWiFiScanPayload=} [properties] Properties to set
         */
        function WiFiScanPayload(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * WiFiScanPayload msg.
         * @member {scan.WiFiScanMsgType} msg
         * @memberof scan.WiFiScanPayload
         * @instance
         */
        WiFiScanPayload.prototype.msg = 0;

        /**
         * WiFiScanPayload status.
         * @member {constants.Status} status
         * @memberof scan.WiFiScanPayload
         * @instance
         */
        WiFiScanPayload.prototype.status = 0;

        /**
         * WiFiScanPayload cmdScanStart.
         * @member {scan.ICmdScanStart|null|undefined} cmdScanStart
         * @memberof scan.WiFiScanPayload
         * @instance
         */
        WiFiScanPayload.prototype.cmdScanStart = null;

        /**
         * WiFiScanPayload respScanStart.
         * @member {scan.IRespScanStart|null|undefined} respScanStart
         * @memberof scan.WiFiScanPayload
         * @instance
         */
        WiFiScanPayload.prototype.respScanStart = null;

        /**
         * WiFiScanPayload cmdScanStatus.
         * @member {scan.ICmdScanStatus|null|undefined} cmdScanStatus
         * @memberof scan.WiFiScanPayload
         * @instance
         */
        WiFiScanPayload.prototype.cmdScanStatus = null;

        /**
         * WiFiScanPayload respScanStatus.
         * @member {scan.IRespScanStatus|null|undefined} respScanStatus
         * @memberof scan.WiFiScanPayload
         * @instance
         */
        WiFiScanPayload.prototype.respScanStatus = null;

        /**
         * WiFiScanPayload cmdScanResult.
         * @member {scan.ICmdScanResult|null|undefined} cmdScanResult
         * @memberof scan.WiFiScanPayload
         * @instance
         */
        WiFiScanPayload.prototype.cmdScanResult = null;

        /**
         * WiFiScanPayload respScanResult.
         * @member {scan.IRespScanResult|null|undefined} respScanResult
         * @memberof scan.WiFiScanPayload
         * @instance
         */
        WiFiScanPayload.prototype.respScanResult = null;

        // OneOf field names bound to virtual getters and setters
        var $oneOfFields;

        /**
         * WiFiScanPayload payload.
         * @member {"cmdScanStart"|"respScanStart"|"cmdScanStatus"|"respScanStatus"|"cmdScanResult"|"respScanResult"|undefined} payload
         * @memberof scan.WiFiScanPayload
         * @instance
         */
        Object.defineProperty(WiFiScanPayload.prototype, "payload", {
            get: $util.oneOfGetter($oneOfFields = ["cmdScanStart", "respScanStart", "cmdScanStatus", "respScanStatus", "cmdScanResult", "respScanResult"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new WiFiScanPayload instance using the specified properties.
         * @function create
         * @memberof scan.WiFiScanPayload
         * @static
         * @param {scan.IWiFiScanPayload=} [properties] Properties to set
         * @returns {scan.WiFiScanPayload} WiFiScanPayload instance
         */
        WiFiScanPayload.create = function create(properties) {
            return new WiFiScanPayload(properties);
        };

        /**
         * Encodes the specified WiFiScanPayload message. Does not implicitly {@link scan.WiFiScanPayload.verify|verify} messages.
         * @function encode
         * @memberof scan.WiFiScanPayload
         * @static
         * @param {scan.IWiFiScanPayload} message WiFiScanPayload message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        WiFiScanPayload.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.msg != null && Object.hasOwnProperty.call(message, "msg"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.msg);
            if (message.status != null && Object.hasOwnProperty.call(message, "status"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.status);
            if (message.cmdScanStart != null && Object.hasOwnProperty.call(message, "cmdScanStart"))
                $root.scan.CmdScanStart.encode(message.cmdScanStart, writer.uint32(/* id 10, wireType 2 =*/82).fork()).ldelim();
            if (message.respScanStart != null && Object.hasOwnProperty.call(message, "respScanStart"))
                $root.scan.RespScanStart.encode(message.respScanStart, writer.uint32(/* id 11, wireType 2 =*/90).fork()).ldelim();
            if (message.cmdScanStatus != null && Object.hasOwnProperty.call(message, "cmdScanStatus"))
                $root.scan.CmdScanStatus.encode(message.cmdScanStatus, writer.uint32(/* id 12, wireType 2 =*/98).fork()).ldelim();
            if (message.respScanStatus != null && Object.hasOwnProperty.call(message, "respScanStatus"))
                $root.scan.RespScanStatus.encode(message.respScanStatus, writer.uint32(/* id 13, wireType 2 =*/106).fork()).ldelim();
            if (message.cmdScanResult != null && Object.hasOwnProperty.call(message, "cmdScanResult"))
                $root.scan.CmdScanResult.encode(message.cmdScanResult, writer.uint32(/* id 14, wireType 2 =*/114).fork()).ldelim();
            if (message.respScanResult != null && Object.hasOwnProperty.call(message, "respScanResult"))
                $root.scan.RespScanResult.encode(message.respScanResult, writer.uint32(/* id 15, wireType 2 =*/122).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified WiFiScanPayload message, length delimited. Does not implicitly {@link scan.WiFiScanPayload.verify|verify} messages.
         * @function encodeDelimited
         * @memberof scan.WiFiScanPayload
         * @static
         * @param {scan.IWiFiScanPayload} message WiFiScanPayload message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        WiFiScanPayload.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a WiFiScanPayload message from the specified reader or buffer.
         * @function decode
         * @memberof scan.WiFiScanPayload
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {scan.WiFiScanPayload} WiFiScanPayload
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        WiFiScanPayload.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.scan.WiFiScanPayload();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.msg = reader.int32();
                        break;
                    }
                case 2: {
                        message.status = reader.int32();
                        break;
                    }
                case 10: {
                        message.cmdScanStart = $root.scan.CmdScanStart.decode(reader, reader.uint32());
                        break;
                    }
                case 11: {
                        message.respScanStart = $root.scan.RespScanStart.decode(reader, reader.uint32());
                        break;
                    }
                case 12: {
                        message.cmdScanStatus = $root.scan.CmdScanStatus.decode(reader, reader.uint32());
                        break;
                    }
                case 13: {
                        message.respScanStatus = $root.scan.RespScanStatus.decode(reader, reader.uint32());
                        break;
                    }
                case 14: {
                        message.cmdScanResult = $root.scan.CmdScanResult.decode(reader, reader.uint32());
                        break;
                    }
                case 15: {
                        message.respScanResult = $root.scan.RespScanResult.decode(reader, reader.uint32());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a WiFiScanPayload message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof scan.WiFiScanPayload
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {scan.WiFiScanPayload} WiFiScanPayload
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        WiFiScanPayload.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a WiFiScanPayload message.
         * @function verify
         * @memberof scan.WiFiScanPayload
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        WiFiScanPayload.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            var properties = {};
            if (message.msg != null && message.hasOwnProperty("msg"))
                switch (message.msg) {
                default:
                    return "msg: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                    break;
                }
            if (message.status != null && message.hasOwnProperty("status"))
                switch (message.status) {
                default:
                    return "status: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                case 6:
                case 7:
                    break;
                }
            if (message.cmdScanStart != null && message.hasOwnProperty("cmdScanStart")) {
                properties.payload = 1;
                {
                    var error = $root.scan.CmdScanStart.verify(message.cmdScanStart);
                    if (error)
                        return "cmdScanStart." + error;
                }
            }
            if (message.respScanStart != null && message.hasOwnProperty("respScanStart")) {
                if (properties.payload === 1)
                    return "payload: multiple values";
                properties.payload = 1;
                {
                    var error = $root.scan.RespScanStart.verify(message.respScanStart);
                    if (error)
                        return "respScanStart." + error;
                }
            }
            if (message.cmdScanStatus != null && message.hasOwnProperty("cmdScanStatus")) {
                if (properties.payload === 1)
                    return "payload: multiple values";
                properties.payload = 1;
                {
                    var error = $root.scan.CmdScanStatus.verify(message.cmdScanStatus);
                    if (error)
                        return "cmdScanStatus." + error;
                }
            }
            if (message.respScanStatus != null && message.hasOwnProperty("respScanStatus")) {
                if (properties.payload === 1)
                    return "payload: multiple values";
                properties.payload = 1;
                {
                    var error = $root.scan.RespScanStatus.verify(message.respScanStatus);
                    if (error)
                        return "respScanStatus." + error;
                }
            }
            if (message.cmdScanResult != null && message.hasOwnProperty("cmdScanResult")) {
                if (properties.payload === 1)
                    return "payload: multiple values";
                properties.payload = 1;
                {
                    var error = $root.scan.CmdScanResult.verify(message.cmdScanResult);
                    if (error)
                        return "cmdScanResult." + error;
                }
            }
            if (message.respScanResult != null && message.hasOwnProperty("respScanResult")) {
                if (properties.payload === 1)
                    return "payload: multiple values";
                properties.payload = 1;
                {
                    var error = $root.scan.RespScanResult.verify(message.respScanResult);
                    if (error)
                        return "respScanResult." + error;
                }
            }
            return null;
        };

        /**
         * Creates a WiFiScanPayload message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof scan.WiFiScanPayload
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {scan.WiFiScanPayload} WiFiScanPayload
         */
        WiFiScanPayload.fromObject = function fromObject(object) {
            if (object instanceof $root.scan.WiFiScanPayload)
                return object;
            var message = new $root.scan.WiFiScanPayload();
            switch (object.msg) {
            default:
                if (typeof object.msg === "number") {
                    message.msg = object.msg;
                    break;
                }
                break;
            case "TypeCmdScanStart":
            case 0:
                message.msg = 0;
                break;
            case "TypeRespScanStart":
            case 1:
                message.msg = 1;
                break;
            case "TypeCmdScanStatus":
            case 2:
                message.msg = 2;
                break;
            case "TypeRespScanStatus":
            case 3:
                message.msg = 3;
                break;
            case "TypeCmdScanResult":
            case 4:
                message.msg = 4;
                break;
            case "TypeRespScanResult":
            case 5:
                message.msg = 5;
                break;
            }
            switch (object.status) {
            default:
                if (typeof object.status === "number") {
                    message.status = object.status;
                    break;
                }
                break;
            case "Success":
            case 0:
                message.status = 0;
                break;
            case "InvalidSecScheme":
            case 1:
                message.status = 1;
                break;
            case "InvalidProto":
            case 2:
                message.status = 2;
                break;
            case "TooManySessions":
            case 3:
                message.status = 3;
                break;
            case "InvalidArgument":
            case 4:
                message.status = 4;
                break;
            case "InternalError":
            case 5:
                message.status = 5;
                break;
            case "CryptoError":
            case 6:
                message.status = 6;
                break;
            case "InvalidSession":
            case 7:
                message.status = 7;
                break;
            }
            if (object.cmdScanStart != null) {
                if (typeof object.cmdScanStart !== "object")
                    throw TypeError(".scan.WiFiScanPayload.cmdScanStart: object expected");
                message.cmdScanStart = $root.scan.CmdScanStart.fromObject(object.cmdScanStart);
            }
            if (object.respScanStart != null) {
                if (typeof object.respScanStart !== "object")
                    throw TypeError(".scan.WiFiScanPayload.respScanStart: object expected");
                message.respScanStart = $root.scan.RespScanStart.fromObject(object.respScanStart);
            }
            if (object.cmdScanStatus != null) {
                if (typeof object.cmdScanStatus !== "object")
                    throw TypeError(".scan.WiFiScanPayload.cmdScanStatus: object expected");
                message.cmdScanStatus = $root.scan.CmdScanStatus.fromObject(object.cmdScanStatus);
            }
            if (object.respScanStatus != null) {
                if (typeof object.respScanStatus !== "object")
                    throw TypeError(".scan.WiFiScanPayload.respScanStatus: object expected");
                message.respScanStatus = $root.scan.RespScanStatus.fromObject(object.respScanStatus);
            }
            if (object.cmdScanResult != null) {
                if (typeof object.cmdScanResult !== "object")
                    throw TypeError(".scan.WiFiScanPayload.cmdScanResult: object expected");
                message.cmdScanResult = $root.scan.CmdScanResult.fromObject(object.cmdScanResult);
            }
            if (object.respScanResult != null) {
                if (typeof object.respScanResult !== "object")
                    throw TypeError(".scan.WiFiScanPayload.respScanResult: object expected");
                message.respScanResult = $root.scan.RespScanResult.fromObject(object.respScanResult);
            }
            return message;
        };

        /**
         * Creates a plain object from a WiFiScanPayload message. Also converts values to other types if specified.
         * @function toObject
         * @memberof scan.WiFiScanPayload
         * @static
         * @param {scan.WiFiScanPayload} message WiFiScanPayload
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        WiFiScanPayload.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.msg = options.enums === String ? "TypeCmdScanStart" : 0;
                object.status = options.enums === String ? "Success" : 0;
            }
            if (message.msg != null && message.hasOwnProperty("msg"))
                object.msg = options.enums === String ? $root.scan.WiFiScanMsgType[message.msg] === undefined ? message.msg : $root.scan.WiFiScanMsgType[message.msg] : message.msg;
            if (message.status != null && message.hasOwnProperty("status"))
                object.status = options.enums === String ? $root.constants.Status[message.status] === undefined ? message.status : $root.constants.Status[message.status] : message.status;
            if (message.cmdScanStart != null && message.hasOwnProperty("cmdScanStart")) {
                object.cmdScanStart = $root.scan.CmdScanStart.toObject(message.cmdScanStart, options);
                if (options.oneofs)
                    object.payload = "cmdScanStart";
            }
            if (message.respScanStart != null && message.hasOwnProperty("respScanStart")) {
                object.respScanStart = $root.scan.RespScanStart.toObject(message.respScanStart, options);
                if (options.oneofs)
                    object.payload = "respScanStart";
            }
            if (message.cmdScanStatus != null && message.hasOwnProperty("cmdScanStatus")) {
                object.cmdScanStatus = $root.scan.CmdScanStatus.toObject(message.cmdScanStatus, options);
                if (options.oneofs)
                    object.payload = "cmdScanStatus";
            }
            if (message.respScanStatus != null && message.hasOwnProperty("respScanStatus")) {
                object.respScanStatus = $root.scan.RespScanStatus.toObject(message.respScanStatus, options);
                if (options.oneofs)
                    object.payload = "respScanStatus";
            }
            if (message.cmdScanResult != null && message.hasOwnProperty("cmdScanResult")) {
                object.cmdScanResult = $root.scan.CmdScanResult.toObject(message.cmdScanResult, options);
                if (options.oneofs)
                    object.payload = "cmdScanResult";
            }
            if (message.respScanResult != null && message.hasOwnProperty("respScanResult")) {
                object.respScanResult = $root.scan.RespScanResult.toObject(message.respScanResult, options);
                if (options.oneofs)
                    object.payload = "respScanResult";
            }
            return object;
        };

        /**
         * Converts this WiFiScanPayload to JSON.
         * @function toJSON
         * @memberof scan.WiFiScanPayload
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        WiFiScanPayload.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for WiFiScanPayload
         * @function getTypeUrl
         * @memberof scan.WiFiScanPayload
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        WiFiScanPayload.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/scan.WiFiScanPayload";
        };

        return WiFiScanPayload;
    })();

    return scan;
})();

module.exports = $root;
