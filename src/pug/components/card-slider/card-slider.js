/* eslint-disable no-new */
import Swiper, { Pagination, EffectFade } from 'swiper';
import '../star-rate/star-rate';

Swiper.use([Pagination, EffectFade]);

new Swiper('.img__slider', {
  loop: true,
  slidesPerView: 1,
  direction: 'horizontal',
  effect: 'fade',
  pagination: {
    el: '.swiper-pagination-img',
    clickable: true,
  },
});
