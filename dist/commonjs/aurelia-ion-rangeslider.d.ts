import "ion-rangeslider";
export declare class AureliaIonRangesliderCustomElement {
    private slider;
    private itemsToSet;
    private sliderRef;
    only_on_finished: any;
    type: any;
    min: any;
    max: any;
    from: any;
    from_percent: any;
    from_value: any;
    to: any;
    to_percent: any;
    to_value: any;
    step: any;
    min_interval: any;
    max_interval: any;
    drag_interval: any;
    values: any;
    p_values: any;
    from_fixed: any;
    from_min: any;
    from_max: any;
    from_shadow: any;
    to_fixed: any;
    to_min: any;
    to_max: any;
    to_shadow: any;
    prettify_enabled: any;
    prettify_separator: any;
    prettify: any;
    force_edges: any;
    keyboard: any;
    keyboard_step: any;
    grid: any;
    grid_margin: any;
    grid_num: any;
    grid_snap: any;
    hide_min_max: any;
    hide_from_to: any;
    prefix: any;
    postfix: any;
    max_postfix: any;
    decorate_both: any;
    values_separator: any;
    input_values_separator: any;
    disable: any;
    constructor();
    attached(): void;
    private updateValues(x);
    propertyChanged(name: string, newValue: any, oldValue: any): void;
}
