System.register(["aurelia-pal", "./aurelia-ion-rangeslider"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function configure(config) {
        config.globalResources(aurelia_pal_1.PLATFORM.moduleName('./aurelia-ion-rangeslider'));
    }
    exports_1("configure", configure);
    var aurelia_pal_1;
    return {
        setters: [
            function (aurelia_pal_1_1) {
                aurelia_pal_1 = aurelia_pal_1_1;
            },
            function (aurelia_ion_rangeslider_1_1) {
                exports_1({
                    "AureliaIonRangesliderCustomElement": aurelia_ion_rangeslider_1_1["AureliaIonRangesliderCustomElement"]
                });
            }
        ],
        execute: function () {
        }
    };
});
