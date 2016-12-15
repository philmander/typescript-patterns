"use strict";
var KioskText = (function () {
    function KioskText(question) {
        var html = "<label>" + question + " <input type=text></label>";
        var el = document.createElement('div');
        el.classList.add('form-item', 'kiosk-form-item', 'kiosk-text');
        el.innerHTML = html;
        this.el = el;
    }
    KioskText.prototype.getValue = function () {
        return this.el.querySelector('input').value;
    };
    KioskText.prototype.getElement = function () {
        return this.el;
    };
    return KioskText;
}());
exports.__esModule = true;
exports["default"] = KioskText;
