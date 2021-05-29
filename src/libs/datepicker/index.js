import 'air-datepicker';
import 'jquery-mask-plugin';
import { boundMethod } from 'autobind-decorator';

class DatePicker {
  constructor(options) {
    this.props = {
      position: 'bottom center',
      range: true,
      navTitles: {
        days: 'MM yyyy',
      },
      clearButton: true,
      prevHtml: options.iconBack,
      nextHtml: options.iconForward,
      minDate: new Date(),
      keyboardNav: false,
      multipleDates: 2,
      onSelect(formattedDate, date, picker) {
        const el = picker.$el.siblings(options.labelClass);
        el.children(options.inputLeftClass).val(formattedDate.split(',')[0]);
        el.children(options.inputRightClass).val(formattedDate.split(',')[1]);
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
      prevHtml: options.iconBack,
      nextHtml: options.iconForward,
      minDate: new Date(),
      keyboardNav: false,
      multipleDates: 2,
      multipleDatesSeparator: ' - ',
    };
    this.selectDate = {};
    this.prevDay = new Date();
    this.btnClass = '.datepicker--buttons';
    this.datepickerRangeClass = options.datepickerRange;
    this.datepickerClass = options.datepicker;
    this.inputClass = options.inputClass;
    this.inputLeftClass = options.inputLeftClass;
    this.inputRightClass = options.inputRightClass;
    this.labelClass = options.labelClass;
    this.btnApplyClass = options.btnApplyClass;
    this.$datepickerRange = $(this.datepickerRangeClass);
    this.$datepicker = $(
      `${this.datepickerClass}, ${this.datepickerRangeClass}`,
    );
  }

  init() {
    this.$datepicker.each(this.addClassDatePicker);

    if (this.labelClass) {
      $(this.labelClass).each((_, el) => {
        const $datePicker = $(el).siblings(this.datepickerClass);
        $(el).click(this.makeShowSelectLabel($datePicker));
      });
    }

    if (this.inputLeftClass) {
      $(this.inputLeftClass).each((_, el) => {
        const $datePicker = $(el)
          .closest(this.labelClass)
          .siblings(this.datepickerClass);
        $(el).change(this.makeChangeSelectInput($datePicker, el));
      });
    }

    if (this.inputRightClass) {
      $(this.inputRightClass).each((_, el) => {
        const $datePicker = $(el)
          .closest(this.labelClass)
          .siblings(this.datepickerClass);
        $(el).change(this.makeChangeSelectInput($datePicker, el));
      });
    }

    this.$datepickerRange.datepicker(this.propsRange);
    $(this.inputClass).mask('00.00.0000');
    this.$datepickerRange.mask('00 ZZZ - 00 ZZZ', {
      translation: {
        Z: {
          pattern: /[A-zА-я]/,
        },
      },
    });
    if (this.btnClass) {
      $(this.btnClass).each((_, el) => {
        if (!$(el).find('.datepicker--button-apply').length) {
          $(el).find('span.datepicker--button').remove();
          $(el).append(
            `<button class="datepicker--button" data-action="clear">
               Очистить
            </button>
            <button class="datepicker--button-apply
            ${this.btnApplyClass.replace(/^\./, '')}">
              Применить
            </button>`,
          );
        }
      });
    }

    this.$datepicker.each((ind, el) => {
      $(el)
        .data('datepicker')
        .$datepicker.find(this.btnApplyClass)
        .on('click', this.makeHideDatePicker(ind));
    });
  }

  @boundMethod
  makeChangeSelectInput($datepicker, input) {
    const el = $datepicker.data('datepicker');
    return () => {
      // eslint-disable-next-line prefer-const
      let [year, month, day] = $(input).val().split('.').reverse();
      month = +month - 1;
      this.prevDay =
        new Date(year, month, day) > new Date()
          ? new Date(year, month, day)
          : new Date();
      el.selectDate(this.prevDay);
    };
  }

  makeHideDatePicker(ind) {
    return () => {
      $(this.$datepicker[ind]).data('datepicker').hide();
    };
  }

  makeShowSelectLabel($el) {
    return () => {
      $el.data('datepicker').show();
    };
  }

  @boundMethod
  addClassDatePicker(i, el) {
    $(el).addClass(`js-date-picker-${i}`);
    this.selectDate[`js-date-picker-${i}`] = $(el).datepicker(this.props);
  }
}

export { DatePicker };
