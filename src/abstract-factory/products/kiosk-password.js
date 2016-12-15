"use strict";
var KioskPassword = (function () {
    function KioskPassword(question) {
        var html = "<label>" + question + " <input type=password></label>";
        var el = document.createElement('div');
        el.classList.add('form-item', 'kiosk-form-item', 'kiosk-password');
        el.innerHTML = html;
        this.el = el;
    }
    KioskPassword.prototype.getValue = function () {
        return this.el.querySelector('input').value;
    };
    KioskPassword.prototype.getElement = function () {
        return this.el;
    };
    return KioskPassword;
}());
exports.__esModule = true;
exports["default"] = KioskPassword;
