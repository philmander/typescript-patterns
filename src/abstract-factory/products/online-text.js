"use strict";
var OnlineText = (function () {
    function OnlineText(question) {
        var html = "<label>" + question + " <input type=text></label>";
        var el = document.createElement('div');
        el.classList.add('form-item', 'online-form-item', 'online-text');
        el.innerHTML = html;
        this.el = el;
    }
    OnlineText.prototype.getValue = function () {
        return this.el.querySelector('input').value;
    };
    OnlineText.prototype.getElement = function () {
        return this.el;
    };
    return OnlineText;
}());
exports.__esModule = true;
exports["default"] = OnlineText;
