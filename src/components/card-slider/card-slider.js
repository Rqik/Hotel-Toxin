/* eslint-disable no-new */
import Swiper, {EffectFade, Pagination} from 'swiper';
import '../star-rating';

Swiper.use([Pagination, EffectFade]);

class CardSlider {
  constructor(selector) {
    this.selector = selector;
    this.options = {
      loop: true,
      slidesPerView: 1,
      direction: 'horizontal',
      effect: 'fade',
      pagination: {
        el: '.swiper-pagination-img',
        clickable: true,
      },
    };
  }

  init() {
    new Swiper(this.selector, this.options);
  }
}

export { CardSlider };
