import '@assets/css/main.scss';
import '@/libs/js/jquery-ui.min';
import '@/components/card-slider';
import '@/components/card-room';
import '@/components/card-auth';
import '@/components/card-registration';
import '@/components/field';

const myDatepicker = $('.calendar')
  .datepicker({
    position: 'bottom center',
    range: true,
    navTitles: {
      days: 'MM <br>yyyy',
    },
    clearButton: true,
    prevHtml: '<i class="material-icons">arrow_back</i>',
    nextHtml: '<i class="material-icons">arrow_forward</i>',
    minDate: new Date(),
    keyboardNav: false,
    multipleDates: 2,
    onSelect(fd, date, picker) {
      const el = picker.$el.siblings('.js-date-picker__label');
      el.children('.js-date-picker__input_left').val(fd.split(',')[0]);
      el.children('.js-date-picker__input_right').val(fd.split(',')[1]);
    },
  })
  .data('datepicker');
myDatepicker.show();
