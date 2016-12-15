"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var input_control_factory_1 = require("./input-control-factory");
var kiosk_text_1 = require("../products/kiosk-text");
var kiosk_checkbox_1 = require("../products/kiosk-checkbox");
var kiosk_password_1 = require("../products/kiosk-password");
var KioskInputControlFactory = (function (_super) {
    __extends(KioskInputControlFactory, _super);
    function KioskInputControlFactory() {
        return _super.apply(this, arguments) || this;
    }
    KioskInputControlFactory.prototype.createText = function (question) {
        return new kiosk_text_1["default"](question);
    };
    KioskInputControlFactory.prototype.createCheckbox = function (question) {
        return new kiosk_checkbox_1["default"](question);
    };
    KioskInputControlFactory.prototype.createPassword = function (question) {
        return new kiosk_password_1["default"](question);
    };
    return KioskInputControlFactory;
}(input_control_factory_1["default"]));
exports.__esModule = true;
exports["default"] = KioskInputControlFactory;
