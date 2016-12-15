"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var builder_1 = require("./builder");
var html_product_1 = require("../products/html-product");
var HtmlBuilder = (function (_super) {
    __extends(HtmlBuilder, _super);
    function HtmlBuilder() {
        return _super.apply(this, arguments) || this;
    }
    HtmlBuilder.prototype.build = function () {
        this.sortFiles();
        return new html_product_1["default"](this.files);
    };
    return HtmlBuilder;
}(builder_1["default"]));
exports.__esModule = true;
exports["default"] = HtmlBuilder;
