"use strict";
var html_builder_1 = require("./builders/html-builder");
var json_builder_1 = require("./builders/json-builder");
var director_1 = require("./director");
var htmlOut = document.querySelector('#html');
var jsonOut = document.querySelector("#json");
var htmlDirector = new director_1["default"](new html_builder_1["default"]());
htmlDirector.construct().then(function (html) {
    htmlOut.innerHTML = html.getOutput();
});
var jsonDirector = new director_1["default"](new json_builder_1["default"]());
jsonDirector.construct().then(function (json) {
    jsonOut.textContent = json.getOutput();
});
