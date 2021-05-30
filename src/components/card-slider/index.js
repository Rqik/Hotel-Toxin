import { Slider } from '@/libs/swiper-slider';
import '../star-rating';

$(() => {
  const options = {
    selector: '.js-card-slider__gallery',
  };

  const cardSlider = new Slider(options);
  cardSlider.init();
});
