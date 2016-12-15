"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var input_control_factory_1 = require("./input-control-factory");
var online_text_1 = require("../products/online-text");
var online_checkbox_1 = require("../products/online-checkbox");
var online_password_1 = require("../products/online-password");
var OnlineInputControlFactory = (function (_super) {
    __extends(OnlineInputControlFactory, _super);
    function OnlineInputControlFactory() {
        return _super.apply(this, arguments) || this;
    }
    OnlineInputControlFactory.prototype.createText = function (question) {
        return new online_text_1["default"](question);
    };
    OnlineInputControlFactory.prototype.createCheckbox = function (question) {
        return new online_checkbox_1["default"](question);
    };
    OnlineInputControlFactory.prototype.createPassword = function (question) {
        return new online_password_1["default"](question);
    };
    return OnlineInputControlFactory;
}(input_control_factory_1["default"]));
exports.__esModule = true;
exports["default"] = OnlineInputControlFactory;
