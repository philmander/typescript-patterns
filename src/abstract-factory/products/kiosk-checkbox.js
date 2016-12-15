"use strict";
var KioskCheckbox = (function () {
    function KioskCheckbox(question) {
        var html = "<label>" + question + " <input type=checkbox></label>";
        var el = document.createElement('div');
        el.classList.add('form-item', 'kiosk-form-item', 'kiosk-checkbox');
        el.innerHTML = html;
        this.el = el;
    }
    KioskCheckbox.prototype.getValue = function () {
        return this.el.querySelector('input').checked;
    };
    KioskCheckbox.prototype.getElement = function () {
        return this.el;
    };
    return KioskCheckbox;
}());
exports.__esModule = true;
exports["default"] = KioskCheckbox;
