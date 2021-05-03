import 'ion-rangeslider';

class IonSlider {
  constructor(options) {
    this.$slider = $(options.selector);
    this.params = {
      min: options.min ?? 0,
      max: options.max ?? 15000,
      from: options.from ?? 5000,
      to: options.to ?? 10000
    };
    this.inputClass = options.inputClass
    this.captionClass = options.captionClass
  }

  init() {
    this.$slider.ionRangeSlider({
      type: 'double',
      skin: 'round',
      min: this.params.min,
      max: this.params.max,
      from: this.params.from,
      to: this.params.to,
      grid_margin: true,
      hide_min_max: true,
      hide_from_to: true,
      force_edges: true,
      onChange: (data) => {
        const value = this.$slider.siblings(this.captionClass);
        value.find(this.inputClass)
          .val(`${data.from_pretty}₽ - ${data.to_pretty}₽`);
      },
      onStart: (data) => {
        const value = this.$slider.siblings(this.captionClass);
        value.find(this.inputClass)
          .val(`${data.from_pretty}₽ - ${data.to_pretty}₽`);
      },
    });
  }
}

export { IonSlider };
