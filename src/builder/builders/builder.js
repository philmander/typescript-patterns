"use strict";
var Builder = (function () {
    function Builder() {
        this.files = [];
    }
    Builder.prototype.addFiles = function (files, type) {
        files.forEach(function (file) { return file.type = type; });
        this.files = this.files.concat(files);
        return this;
    };
    Builder.prototype.sortFiles = function () {
        this.files.sort(function (a, b) {
            if (a.name < b.name) {
                return -1;
            }
            if (a.name > b.name) {
                return 1;
            }
            return 0;
        });
    };
    return Builder;
}());
exports.__esModule = true;
exports["default"] = Builder;
