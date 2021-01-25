export default class PostParams {
  types = {
    temp_regulator_button: 'getDimmerParams',
    bar_button: 'getDimmerParams',
    open_close_button: 'getSwitcherParams',
    binary_button: 'getSwitcherParams',
  };

  constructor(widget, changingParams) {
    this.widget = widget;
    this.changingParams = changingParams;
    this.type = this.types[widget.widget_type_naim];
    this.controllerOrigin = widget.controller_ip;
    if (!this.types) {
      return null;
    }
  }

  getParams(isController) {
    const params = this[this.type](isController);
    if (isController) params.params = JSON.stringify(params.params);
    return params;
  }

  getDimmerParams(isController) {
    return {
      url: isController
        ? `${this.controllerOrigin}/api/set_opwm`
        : '',
      params: isController
        ? {
          device: 0,
          addr: parseInt(this.widget.vuh_number, 10) - 1,
          value: this.changingParams.value * 100,
        }
        : {
          mode: 'set_opwm',
          controller_id: this.widget.controller_id,
          pwm_id: this.widget.vuh_number,
          value: this.changingParams.value * 100,
        },
    };
  }

  getSwitcherParams(isController) {
    return {
      url: isController
        ? `${this.controllerOrigin}/api/set_obin`
        : '',
      params: isController
        ? {
          device: 0,
          addr: parseInt(this.widget.vuh_number, 10) - 1,
          value: this.changingParams.value,
        }
        : {
          mode: 'set_bin',
          controller_id: this.widget.controller_id,
          bin_id: this.widget.vuh_number,
          value: this.changingParams.value,
        },
    };
  }
}
