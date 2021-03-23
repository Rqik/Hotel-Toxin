class RangeSlider {
  constructor() {
    this.$slider = $('.js-range-slider__app');
  }

  init() {
    this.$slider.slider({
      range: true,
      min: 0,
      max: 15000,
      values: [5000, 10000],
      slide(event, ui) {
        const value = $(this).siblings('.range-slider__value');
        value.find('input').val(`${ui.values[0]}₽ - ${ui.values[1]}₽`);
      },
    });

    $('.range-slider__value').find('input')
      .val(`${this.$slider.slider('values', 0)}₽ - ${this.$slider.slider('values', 1)}₽`);
  }
}

export { RangeSlider };
