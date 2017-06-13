define(["require", "exports", "aurelia-pal", "./aurelia-ion-rangeslider"], function (require, exports, aurelia_pal_1, aurelia_ion_rangeslider_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function configure(config) {
        config.globalResources(aurelia_pal_1.PLATFORM.moduleName('./aurelia-ion-rangeslider'));
    }
    exports.configure = configure;
    exports.AureliaIonRangesliderCustomElement = aurelia_ion_rangeslider_1.AureliaIonRangesliderCustomElement;
});
