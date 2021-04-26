import 'air-datepicker';

const myDatepicker = $('.calendar')
  .datepicker({
    position: 'bottom center',
    range: true,
    navTitles: {
      days: 'MM yyyy',
    },
    clearButton: true,
    prevHtml: '<i class="date-picker__icon">arrow_back</i>',
    nextHtml: '<i class="date-picker__icon">arrow_forward</i>',
    minDate: new Date(),
    keyboardNav: false,
    multipleDates: 2,
    onSelect(formattedDate, date, picker) {
      const el = picker.$el.siblings('.js-date-picker__label');
      el.children('.js-date-picker__input_left')
        .val(formattedDate.split(',')[0]);
      el.children('.js-date-picker__input_right')
        .val(formattedDate.split(',')[1]);
    },
  })
  .data('datepicker');

myDatepicker.show();
