import '../../libs/js/ion.rangeSlider.min';

class RangeSlider {
  constructor() {
    this.$slider = $('.js-range-slider__app');
  }

  init() {
    this.$slider.ionRangeSlider({
      type: 'double',
      skin: 'round',
      min: 0,
      max: 15000,
      from: 5000,
      to: 10000,
      grid_margin: true,
      hide_min_max: true,
      hide_from_to: true,
      force_edges: true,
      onChange: (data) => {
        const value = this.$slider.siblings('.range-slider__value');
        value.find('input')
          .val(`${data.from_pretty}₽ - ${data.to_pretty}₽`);
      },
      onStart: (data) => {
        const value = this.$slider.siblings('.range-slider__value');
        value.find('input')
          .val(`${data.from_pretty}₽ - ${data.to_pretty}₽`);
      },
    });
  }
}

export { RangeSlider };
