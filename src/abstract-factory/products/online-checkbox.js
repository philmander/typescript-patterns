"use strict";
var OnlineCheckbox = (function () {
    function OnlineCheckbox(question) {
        var html = "<label>" + question + " <input type=checkbox></label>";
        var el = document.createElement('div');
        el.classList.add('form-item', 'online-form-item', 'online-checkbox');
        el.innerHTML = html;
        this.el = el;
    }
    OnlineCheckbox.prototype.getValue = function () {
        return this.el.querySelector('input').checked;
    };
    OnlineCheckbox.prototype.getElement = function () {
        return this.el;
    };
    return OnlineCheckbox;
}());
exports.__esModule = true;
exports["default"] = OnlineCheckbox;
