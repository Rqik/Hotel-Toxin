import { Slider } from '@/libs/swiper-slider';
import { CardSlider } from './CardSlider';
import '../star-rating';

$(() => {
  const options = {
    selector: '.js-card-slider__gallery',
  };

  const cardSlider = new CardSlider();
  const slider = new Slider(options);
  cardSlider.init();
  slider.init();
});
