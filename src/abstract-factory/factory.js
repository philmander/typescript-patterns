"use strict";
var kiosk_input_control_factory_1 = require("./factories/kiosk-input-control-factory");
var online_input_control_factory_1 = require("./factories/online-input-control-factory");
function getFactory(env) {
    if (env === Channels.ONLINE) {
        return new online_input_control_factory_1["default"]();
    }
    else if (env === Channels.KIOSK) {
        return new kiosk_input_control_factory_1["default"]();
    }
    else {
        throw new Error('Environment not supported');
    }
}
exports.__esModule = true;
exports["default"] = getFactory;
var Channels;
(function (Channels) {
    Channels[Channels["KIOSK"] = 0] = "KIOSK";
    Channels[Channels["ONLINE"] = 1] = "ONLINE";
})(Channels || (Channels = {}));
exports.Channels = Channels;
