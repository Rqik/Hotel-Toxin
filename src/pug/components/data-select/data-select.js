import 'air-datepicker'
$.fn.datepicker.language['ru'] =  {
  days: ['Воскресенье','Понедельник','Вторник','Среда','Четверг','Пятница','Суббота'],
  daysShort: ['Вос','Пон','Вто','Сре','Чет','Пят','Суб'],
  daysMin: ['Вс','Пн','Вт','Ср','Чт','Пт','Сб'],
  months: ['Январь','Февраль','Март','Апрель','Май','Июнь','Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь'],
  monthsShort: ['Янв','Фев','Мар','Апр','Май','Июн','Июл','Авг','Сен','Окт','Ноя','Дек'],
  today: 'Применить',
  clear: 'Очистить',
  dateFormat: 'dd.mm.yyyy',
  timeFormat: 'hh:ii',
  firstDay: 1
};

let props = {
  position: "bottom center",
  range: true,
  navTitles: {
    days: 'MM <br>yyyy',
  },
  clearButton: true,
  prevHtml: '<i class="material-icons">arrow_back</i>',
  nextHtml: '<i class="material-icons">arrow_forward</i>',
  todayButton: true,
}
$('.data__select').datepicker(props)

function swapButton(selector) {
  $(selector).html(function (i, el) {
    console.log($(this).data('action'))
    if ($(this).data('action') == 'prev') {
      return '<i class="material-icons">arrow_back</i>'
    }
    return '<i class="material-icons">arrow_forward</i>'
  })

}

// let start = $('.data__select_input-left').datepicker(props).data('datepicker')
// let end = $('.data__select_input-right').datepicker(props).data('datepicker')