import Swiper, { Navigation, Pagination , Scrollbar, EffectFade} from 'swiper';
import '../star-rate/star-rate.js'
Swiper.use([Pagination , EffectFade]);

new Swiper('.img__slider', {
    loop: true,
    slidesPerView: 1,
    direction: 'horizontal',
    effect: 'fade',
    pagination: {
        el: '.swiper-pagination-img',
        clickable: true
    },
})