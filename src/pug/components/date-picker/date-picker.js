import 'air-datepicker';
import 'jquery-mask-plugin';

const props = {
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
    const el = picker.$el.siblings('.js-data-select__label');
    el.children('.js-data-select__input_left').val(fd.split(',')[0]);
    el.children('.js-data-select__input_right').val(fd.split(',')[1]);
  },
};
const propsRange = {
  position: 'bottom center',
  range: true,
  navTitles: {
    days: 'MM <br>yyyy',
  },
  dateFormat: 'd M',
  clearButton: true,
  prevHtml: '<i class="material-icons">arrow_back</i>',
  nextHtml: '<i class="material-icons">arrow_forward</i>',
  minDate: new Date(),
  keyboardNav: false,
  multipleDates: 2,
  multipleDatesSeparator: ' - ',
};
const selectDate = {};
const nexDay = new Date();
let pervDay = new Date();
const $dateRange = $('.date-select__input_range');

$('.js-date-picker__input,  .js-date-select__input_range ').each(addClassDatePicker);
$('.data-select__label').click(showSelectLabel);
$('.js-data-select__input_left').change(changeSelectInput);
$('.js-data-select__input_right').change(changeSelectInput);

$('.data-select__input').mask('00.00.0000');

$dateRange.datepicker(propsRange);
$dateRange.mask('00 ZZZ - 00 ZZZ', {
  translation: {
    Z: {
      pattern: /[A-zА-я]/,
    },
  },
});

$('.datepicker--buttons').each(function () {
  $(this).append(
    '<span class="datepicker--button-apply " >Применить</span>',
  );
});
$('.datepicker--button-apply').each(hideDatePicker);

function changeSelectInput() {
  const ss = $(this)
    .closest('.js-data-select__label')
    .siblings('.js-date-picker__input')
    .data('datepicker');
  const date = $(this).val().split('.').reverse();
  date[1] = +date[1] - 1;
  pervDay = new Date(...date) > new Date() ? new Date(...date) : new Date();
  ss.selectDate([pervDay, nexDay]);
}

function hideDatePicker(ind) {
  $(this).click(() => {
    $(`.date-picker-${ind}`).data('datepicker').hide();
  });
}

function showSelectLabel() {
  $(this).siblings('.js-date-picker__input').data('datepicker').show();
}

function addClassDatePicker(i) {
  $(this).addClass(`date-picker-${i}`);
  selectDate[`date-picker-${i}`] = $(this).datepicker(props);
}
