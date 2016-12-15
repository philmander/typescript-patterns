"use strict";
var HtmlProduct = (function () {
    function HtmlProduct(files) {
        var fileItems = files.map(function (file) { return "<li class=\"" + file.type + "\"><b>" + file.name + "</b> (" + file.type + ")</li>"; });
        this.html = "<ul class=file-list>" + fileItems.join('') + "</ul>";
    }
    HtmlProduct.prototype.getOutput = function () {
        return this.html;
    };
    return HtmlProduct;
}());
exports.__esModule = true;
exports["default"] = HtmlProduct;
