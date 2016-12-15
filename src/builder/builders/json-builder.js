"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var builder_1 = require("./builder");
var json_product_1 = require("../products/json-product");
var JsonBuilder = (function (_super) {
    __extends(JsonBuilder, _super);
    function JsonBuilder() {
        return _super.apply(this, arguments) || this;
    }
    JsonBuilder.prototype.build = function () {
        this.sortFiles();
        return new json_product_1["default"](this.files);
    };
    return JsonBuilder;
}(builder_1["default"]));
exports.__esModule = true;
exports["default"] = JsonBuilder;
