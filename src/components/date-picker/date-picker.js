import 'air-datepicker';
import 'jquery-mask-plugin';

class DatePicker {
  constructor() {
    this.props = {
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
    };
    this.propsRange = {
      position: 'bottom center',
      range: true,
      navTitles: {
        days: 'MM yyyy',
      },
      dateFormat: 'd M',
      clearButton: true,
      prevHtml: '<i class="date-picker__icon">arrow_back</i>',
      nextHtml: '<i class="date-picker__icon">arrow_forward</i>',
      minDate: new Date(),
      keyboardNav: false,
      multipleDates: 2,
      multipleDatesSeparator: ' - ',
    };
    this.selectDate = {};
    this.nextDay = new Date();
    this.prevDay = new Date();
    this.$datepickerRange = $('.js-date-picker_range');
    this.$datepicker = $('.js-date-picker, .js-date-picker_range');
    this.inputClass = '.js-date-picker__input';
    this.inputLeftClass = '.js-date-picker__input_left';
    this.inputRightClass = '.js-date-picker__input_right';
    this.labelClass = '.js-date-picker__label';
    this.btnApplyClass = '.js-datepicker--button-apply';
  }

  init() {
    this.$datepicker.each(this.addClassDatePicker.bind(this));
    $(this.labelClass)
      .each((_, el) => {
        const $datePicker = $(el)
          .siblings('.js-date-picker');
        $(el)
          .click(this.makeShowSelectLabel($datePicker));
      });

    $(this.inputLeftClass)
      .each((_, el) => {
        const $datePicker = $(el)
          .closest(this.labelClass)
          .siblings('.js-date-picker');
        $(el)
          .change(this.makeChangeSelectInput($datePicker, el)
            .bind(this));
      });
    $(this.inputRightClass)
      .each((_, el) => {
        const $datePicker = $(el)
          .closest(this.labelClass)
          .siblings('.js-date-picker');
        $(el)
          .change(this.makeChangeSelectInput($datePicker, el)
            .bind(this));
      });

    $(this.inputClass)
      .mask('00.00.0000');
    this.$datepickerRange.datepicker(this.propsRange);
    this.$datepickerRange.mask('00 ZZZ - 00 ZZZ', {
      translation: {
        Z: {
          pattern: /[A-zА-я]/,
        },
      },
    });

    $('.datepicker--buttons')
      .each((_, el) => {
        $(el)
          .append(
            `<span class="datepicker--button-apply js-datepicker--button-apply">
              Применить
             </span>`,
          );
      });

    this.$datepicker.each((ind, el) => {
      $(el)
        .data('datepicker')
        .$datepicker
        .find(this.btnApplyClass)
        .on('click', this.makeHideDatePicker(ind));
    });
  }

  makeChangeSelectInput($datepicker, input) {
    const el = $datepicker.data('datepicker');
    return () => {
      // eslint-disable-next-line prefer-const
      let [year, month, day] = $(input)
        .val()
        .split('.')
        .reverse();
      month = +month - 1;
      this.prevDay = new Date(year, month, day) > new Date()
        ? new Date(year, month, day)
        : new Date();
      el.selectDate(this.prevDay);
    };
  }

  makeHideDatePicker(ind) {
    return () => {
      $(this.$datepicker[ind])
        .data('datepicker')
        .hide();
    };
  }

  makeShowSelectLabel($el) {
    return () => {
      $el.data('datepicker')
        .show();
    };
  }

  addClassDatePicker(i, el) {
    $(el)
      .addClass(`js-date-picker-${i}`);
    this.selectDate[`js-date-picker-${i}`] = $(el)
      .datepicker(this.props);
  }
}

export { DatePicker };
