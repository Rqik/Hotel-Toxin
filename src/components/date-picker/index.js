import { DatePicker } from '@/libs/datepicker';

$(() => {
  const options = {
    datepicker: '.js-date-picker',
    datepickerRange: '.js-date-picker_range',
    inputClass: '.js-date-picker__input',
    inputLeftClass: '.js-date-picker__input_left',
    inputRightClass: '.js-date-picker__input_right',
    labelClass: '.js-date-picker__label',
    btnApplyClass: '.js-datepicker--button-apply',
    iconBack: '<i class="date-picker__icon">arrow_back</i>',
    iconForward: '<i class="date-picker__icon">arrow_forward</i>',
  };
  const datePick = new DatePicker(options);
  datePick.init();
});
