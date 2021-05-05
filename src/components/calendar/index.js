import { DatePicker } from '@/libs/datepicker';

$(() => {
  const options = {
    datepicker: '.js-calendar',
    btnApplyClass: '.js-datepicker--button-apply',
  };
  const datePick = new DatePicker(options);
  datePick.init();
});
