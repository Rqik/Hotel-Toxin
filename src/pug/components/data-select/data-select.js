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
    const el = picker.$el.siblings('.data__select_label');
    el.children('.data__select_input-left').val(fd.split(',')[0]);
    el.children('.data__select_input-right').val(fd.split(',')[1]);
  },
};

const selectDate = {};

$('.date_picker').each(addClassDatePicker);

function addClassDatePicker(i) {
  $(this).addClass(`date_picker-${i}`);
  selectDate[`date_picker-${i}`] = $(this).datepicker(props);
}

$('.data__select_label').click(showSelectLabel);

function showSelectLabel() {
  $(this).siblings('.date_picker').data('datepicker').show();
}

$('.datepicker--buttons').append(
  '<span class=" datepicker--button-apply " >Применить</span>',
);

$('.datepicker--button-apply').each(hideDatePicker);

function hideDatePicker(ind) {
  $(this).click(() => {
    $(`.date_picker-${ind}`).data('datepicker').hide();
  });
}

$('.data__select_input').mask('00.00.0000');

// попытка реализовать изменение в datepicker через инпут
let pervDay = new Date();
const nexDay = new Date();
$('.data__select_input-left').change(changeSelectInput);

$('.data__select_input-right').change(changeSelectInput);

function changeSelectInput() {
  const ss = $(this)
    .closest('.data__select_label')
    .siblings('.date_picker')
    .data('datepicker');
  const date = $(this).val().split('.').reverse();
  date[1] = +date[1] - 1;
  pervDay = new Date(...date) > new Date() ? new Date(...date) : new Date();
  ss.selectDate([pervDay, nexDay]);
}

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
$('.date__range').datepicker(propsRange);
$('.date__range').mask('00 ZZZ - 00 ZZZ', {
  translation: {
    Z: {
      pattern: /[A-zА-я]/,
    },
  },
});
