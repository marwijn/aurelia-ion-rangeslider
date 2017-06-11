define(["require", "exports", "aurelia-pal"], function (require, exports, aurelia_pal_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function configure(config) {
        config.globalResources(aurelia_pal_1.PLATFORM.moduleName('./aurelia-ion-rangeslider'));
    }
    exports.configure = configure;
});
