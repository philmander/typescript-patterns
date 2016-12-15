"use strict";
var JsonProduct = (function () {
    function JsonProduct(files) {
        var fileItems = files.map(function (file) { return ({ type: file.type, name: file.name }); });
        this.json = JSON.stringify(fileItems, null, '  ');
    }
    JsonProduct.prototype.getOutput = function () {
        return this.json;
    };
    return JsonProduct;
}());
exports.__esModule = true;
exports["default"] = JsonProduct;
