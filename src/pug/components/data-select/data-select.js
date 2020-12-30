import 'air-datepicker'
import 'jquery-mask-plugin'
let props = {
  position: "bottom center",
  range: true,
  navTitles: {
    days: 'MM <br>yyyy',
  },
  
  clearButton: true,
  prevHtml: '<i class="material-icons">arrow_back</i>',
  nextHtml: '<i class="material-icons">arrow_forward</i>',
  minDate: new Date(),
  keyboardNav: false,
  multipleDates: 2
}

let center = $('.date_picker').datepicker(props)
center.data('datepicker').hide()
$('.data__select_label').click(function () {
  $(this).siblings(".date_picker").data('datepicker').show()
})

// попытка реализовать изменение в datepicker через инпут
let pervDay =  new Date()
let nexDay  =  new Date()
$(".data__select_input-left").change(function () {
  let ss = $(this).closest('.data__select_label').siblings(".date_picker").data('datepicker')
  let date = $(this).val().split('.').reverse()
  date[1] = +date[1] - 1
  pervDay = new Date(...date) > new Date()? new Date(...date):new Date()
  ss.selectDate([pervDay, nexDay])
})
$(".data__select_input-right").change(function () {
  let ss = $(this).closest('.data__select_label').siblings(".date_picker").data('datepicker')
  let date = $(this).val().split('.').reverse()
  date[1] = +date[1] - 1
  nexDay = new Date(...date) > new Date()? new Date(...date):new Date()
  ss.selectDate([pervDay, nexDay])
})

$('.datepicker--buttons').append('<span class=" datepicker--button-apply " >Применить</span>')
$('.datepicker--button-apply').click(function (e) {
  e.preventDefault()
  center.data('datepicker').hide()
})
center.datepicker({
  onSelect: function (fd, date, picker) {
    let el = picker.$el.siblings('.data__select_label')
    console.log(fd);
    el.children(".data__select_input-left").val(fd.split(",")[0]);
    el.children(".data__select_input-right").val(fd.split(",")[1]);
  }
})

$('.data__select_input').mask('00.00.0000')