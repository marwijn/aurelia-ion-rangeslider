import { autoinject, bindable, bindingMode, inlineView } from "aurelia-framework";
import * as $ from "jquery";
import "ion-rangeslider";

@autoinject
@inlineView('<template><input ref="sliderRef" /></template>')
export class AureliaIonRangesliderCustomElement {

  private slider: any;
  private itemsToSet: any = {};
  private sliderRef: Element;

  @bindable only_on_finished;
  
  @bindable type;

  @bindable min;
  @bindable max;

  @bindable({ defaultBindingMode: bindingMode.twoWay }) from;
  @bindable({ defaultBindingMode: bindingMode.twoWay }) from_percent;
  @bindable({ defaultBindingMode: bindingMode.twoWay }) from_value;
  @bindable({ defaultBindingMode: bindingMode.twoWay }) to;
  @bindable({ defaultBindingMode: bindingMode.twoWay }) to_percent;
  @bindable({ defaultBindingMode: bindingMode.twoWay }) to_value;

  @bindable step;

  @bindable min_interval;
  @bindable max_interval;
  @bindable drag_interval;

  @bindable values;
  @bindable p_values;

  @bindable from_fixed;
  @bindable from_min;
  @bindable from_max;
  @bindable from_shadow;

  @bindable to_fixed;
  @bindable to_min;
  @bindable to_max;
  @bindable to_shadow;

  @bindable prettify_enabled;
  @bindable prettify_separator;
  @bindable prettify;

  @bindable force_edges;

  @bindable keyboard;
  @bindable keyboard_step;

  @bindable grid;
  @bindable grid_margin;
  @bindable grid_num;
  @bindable grid_snap;

  @bindable hide_min_max;
  @bindable hide_from_to;

  @bindable prefix;
  @bindable postfix;
  @bindable max_postfix;
  @bindable decorate_both;
  @bindable values_separator;

  @bindable input_values_separator;

  @bindable disable;

  constructor() {
  }

  attached() {
	if (this.only_on_finished) {
		this.itemsToSet.onFinish = (x) => this.updateValues(x);
	} else {
		this.itemsToSet.onChange = (x) => this.updateValues(x);
		this.itemsToSet.onUpdate = (x) => this.updateValues(x);
	}
    
    $(this.sliderRef).ionRangeSlider(this.itemsToSet);
    this.slider = $(this.sliderRef).data('ionRangeSlider');
  }

  private updateValues(x: any): void {
    this.to = x.to;
    this.to_percent = x.to_percent;
    this.to_value = x.to_value;
    this.from = x.from;
    this.from_percent = x.from_percent;
    this.from_value = x.from_value;
  }

  propertyChanged(name: string, newValue, oldValue) {
    if (!this.slider) {
      this.itemsToSet[name] = newValue;
      return;
    }
    if (this.slider.result[name] == newValue) return;
    let data = {};
    data[name] = newValue;
    this.slider.update(data);
  }
}
