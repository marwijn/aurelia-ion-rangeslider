"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var aurelia_pal_1 = require("aurelia-pal");
function configure(config) {
    config.globalResources(aurelia_pal_1.PLATFORM.moduleName('./aurelia-ion-rangeslider'));
}
exports.configure = configure;