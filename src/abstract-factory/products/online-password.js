"use strict";
var OnlinePassword = (function () {
    function OnlinePassword(question) {
        var html = "<label>" + question + " <input type=password></label>";
        var el = document.createElement('div');
        el.classList.add('form-item', 'online-form-item', 'online-password');
        el.innerHTML = html;
        this.el = el;
    }
    OnlinePassword.prototype.getValue = function () {
        return this.el.querySelector('input').value;
    };
    OnlinePassword.prototype.getElement = function () {
        return this.el;
    };
    return OnlinePassword;
}());
exports.__esModule = true;
exports["default"] = OnlinePassword;
