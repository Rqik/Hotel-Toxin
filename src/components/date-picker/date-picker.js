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
      prevHtml: '<i class="icon">arrow_back</i>',
      nextHtml: '<i class="icon">arrow_forward</i>',
      minDate: new Date(),
      keyboardNav: false,
      multipleDates: 2,
      onSelect(fd, date, picker) {
        const el = picker.$el.siblings('.js-date-picker__label');
        el.children('.js-date-picker__input_left').val(fd.split(',')[0]);
        el.children('.js-date-picker__input_right').val(fd.split(',')[1]);
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
      prevHtml: '<i class="icon">arrow_back</i>',
      nextHtml: '<i class="icon">arrow_forward</i>',
      minDate: new Date(),
      keyboardNav: false,
      multipleDates: 2,
      multipleDatesSeparator: ' - ',
    };
    this.selectDate = {};
    this.nextDay = new Date();
    this.prevDay = new Date();
    this.$datepickerRange = $('.js-date-picker_range');
    this.$datepicker = $(
      '.js-date-picker,  .js-date-picker_range ',
    );
  }

  init() {
    this.$datepicker.each(this.addClassDatePicker.bind(this));
    $('.js-date-picker__label').click(this.showSelectLabel);
    $('.js-date-picker__input_left').change(this.changeSelectInput);
    $('.js-date-picker__input_right').change(this.changeSelectInput);

    $('.js-date-picker__input').mask('00.00.0000');
    this.$datepickerRange.datepicker(this.propsRange);
    this.$datepickerRange.mask('00 ZZZ - 00 ZZZ', {
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

    this.$datepicker.each((ind, el) => {
      $(el)
        .data('datepicker')
        .$datepicker.find('.datepicker--button-apply')
        .click(() => {
          this.hideDatePicker(ind);
        });
    });
  }

  changeSelectInput() {
    const el = $(this)
      .closest('.js-date-picker__label')
      .siblings('.js-date-picker')
      .data('datepicker');
    const date = $(this).val().split('.').reverse();
    date[1] = +date[1] - 1;
    this.prevDay = new Date(...date) > new Date() ? new Date(...date) : new Date();
    el.selectDate([this.prevDay, this.nextDay]);
  }

  hideDatePicker(ind) {
    $(this.$datepicker[ind]).data('datepicker').hide();
  }

  showSelectLabel() {
    $(this).siblings('.js-date-picker').data('datepicker').show();
  }

  addClassDatePicker(i, el) {
    $(el).addClass(`js-date-picker-${i}`);
    this.selectDate[`js-date-picker-${i}`] = $(el).datepicker(this.props);
  }
}

export { DatePicker };
