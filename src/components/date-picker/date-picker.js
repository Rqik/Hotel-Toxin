import 'air-datepicker';
import 'jquery-mask-plugin';

class DatePicker {
  constructor() {
    this.props = {
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
    this.propsRange = {
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
    this.selectDate = {};
    this.nextDay = new Date();
    this.prevDay = new Date();
    this.$dateRange = $('.date-select__input_range');
  }

  init() {
    $('.js-date-picker__input,  .js-date-select__input_range ').each(this.addClassDatePicker.bind(this));
    $('.js-data-select__label').click(this.showSelectLabel);
    $('.js-data-select__input_left').change(this.changeSelectInput);
    $('.js-data-select__input_right').change(this.changeSelectInput);

    $('.js-data-select__input').mask('00.00.0000');
    this.$dateRange.datepicker(this.propsRange);
    this.$dateRange.mask('00 ZZZ - 00 ZZZ', {
      translation: {
        Z: {
          pattern: /[A-zА-я]/,
        },
      },
    });

    $('.datepicker--buttons').each(function () {
      $(this).append(
        '<span class="datepicker--button-apply js-datepicker--button-apply " >Применить</span>',
      );
    });
    $('.datepicker--button-apply').each(this.hideDatePicker);
  }

  changeSelectInput() {
    const el = $(this)
      .closest('.js-data-select__label')
      .siblings('.js-date-picker__input')
      .data('datepicker');
    const date = $(this).val().split('.').reverse();
    date[1] = +date[1] - 1;
    this.prevDay = new Date(...date) > new Date() ? new Date(...date) : new Date();
    el.selectDate([this.prevDay, this.nextDay]);
  }

  hideDatePicker(ind) {
    $(this).click(() => {
      $(`.js-date-picker-${ind}`).data('datepicker').hide();
    });
  }

  showSelectLabel() {
    $(this).siblings('.js-date-picker__input').data('datepicker').show();
  }

  addClassDatePicker(i, el) {
    $(el).addClass(`js-date-picker-${i}`);
    this.selectDate[`js-date-picker-${i}`] = $(el).datepicker(this.props);
  }
}

export { DatePicker };
