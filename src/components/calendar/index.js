import { DatePicker } from '@/libs/datepicker';

$(() => {
  const options = {
    datepicker: '.js-calendar',
    btnApplyClass: '.js-datepicker--button-apply',
    iconBack: 'arrow_back',
    iconForward: 'arrow_forward',
  };
  const datePick = new DatePicker(options);
  datePick.init();
});
