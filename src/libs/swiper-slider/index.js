import Swiper, { EffectFade, Navigation, Pagination } from 'swiper';

Swiper.use([Pagination, EffectFade, Navigation]);

class Slider {
  constructor(options) {
    this.selector = options.selector;
    this.setDefaultOption();
  }
  setDefaultOption() {
    this.options = {
      loop: true,
      slidesPerView: 1,
      direction: 'horizontal',
      effect: 'fade',
      pagination: {
        el: '.swiper-pagination-img',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    };
  }
  init() {
    this.slider = new Swiper(this.selector, this.options);
  }
}

export { Slider };
