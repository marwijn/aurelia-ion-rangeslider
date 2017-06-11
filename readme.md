# aurelia wrapper for ion-rangeslider

## Install
```bash
npm i jquery ion-rangeslider aurelia-ion-rangeslider
```

## Aurelia CLI config

skinModern theme is used here but you can use whatever theme you like.

```json
"jquery",
{
    "name": "ion-rangeslider",
    "path": "../node_modules/ion-rangeslider",
    "main": "js/ion.rangeSlider",
    "deps": ["jquery"],
    "resources": [
        "css/ion.rangeSlider.css",
        "css/ion.rangeSlider.skinModern.css"
    ]
},
{
    "name": "aurelia-ion-rangeslider",
    "path": "../node_modules/aurelia-ion-rangeslider/dist/amd",
    "main": "index",
    "deps": ["ion-rangeslider"]
}
```

## Copy images
```json
"copyFiles": {
    "node_modules/ion-rangeslider/img/*.*": "ion-rangeslider/img"
}
```

## Useage

```html
<require from="ion-rangeslider/css/ion.rangeSlider.css"></require>
<require from="ion-rangeslider/css/ion.rangeSlider.skinModern.css"></require>

<aurelia-ion-rangeslider></aurelia-ion-rangeslider>
```
