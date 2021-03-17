/* eslint-disable no-new */
import Swiper, { EffectFade, Pagination } from 'swiper';
import '../star-rating/star-rating';

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
