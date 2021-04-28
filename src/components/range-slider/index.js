import { IonSlider } from '@/libs/ion-rangeslider';

$(() => {
  const options = {
    selector: '.js-range-slider__app',
    captionClass: '.js-range-slider__caption-head',
    inputClass: '.js-range-slider__input',
    min: 0,
    max: 15000,
    from: 5000,
    to: 10000,
  };
  const rangeSlider = new IonSlider(options);
  rangeSlider.init();
});
