class DropDown {
  constructor() {
    this.children = {};
  }

  init() {
    $('.js-dropdown__select')
      .each((i, el) => {
        const className = `.js-dpd_slt-${i}`;
        const name = `js-dpd_slt-${i}`;
        el.classList.add(name);
        DropDown.active(className);
        DropDown.slideDrop(className);
        this.childrenCurrentVal(className);
        this.actionDropDown(`${className} .dropdown__control-panel`, className);
      });

    $('.js-dropdown__select_extended')
      .each((i, el) => {
        const className = `.js-dp_ext-${i}`;
        const name = `js-dp_ext-${i}`;
        el.classList.add(name);
        DropDown.active(className);
        DropDown.slideDrop(className);
        this.childrenCurrentVal(className);
        this.actionDropDownExtended(`${className} .dropdown__control-panel`, className);
        this.buttonAction(className);
      });
  }

  buttonAction(selector) {
    $(selector)
      .find('.js-dropdown__button-reset')
      .on('click', this.makeEventReset(selector));
  }

  makeEventReset(selector) {
    return (e) => {
      const el = e.currentTarget.closest('.js-dropdown__select_extended');
      $(el)
        .find('.js-dropdown__text-current')
        .text('Сколько гостей');
      $(el)
        .find('.js-dropdown__span')
        .text(0);
      $(el)
        .find('.js-control_minus')
        .addClass('disable');
      this.children[selector].fill(0);
      $(this)
        .css('opacity', 0);
    };
  }

  static dropItem(el) {
    return {
      count: $(el)
        .find('.js-dropdown__span')
        .text(),
      name: $(el)
        .children('.js-dropdown__item-span')
        .text(),
    };
  }

  static active(selector) {
    if (!$(selector)
      .hasClass('dropdown_active')) {
      $(`${selector} .dropdown__items`)
        .slideToggle(0);
    }
  }

  static slideDrop(selector) {
    $(`${selector} .js-dropdown__item-current`)
      .on('click', DropDown.makeToggleDropDown(selector));
    $(`${selector} .js-dropdown__button-submit`)
      .on('click', DropDown.makeToggleDropDown(selector));
  }

  static makeToggleDropDown(selector) {
    return () => {
      $(`${selector} .dropdown__items`)
        .slideToggle(300);
      $(selector)
        .toggleClass('dropdown_active');
    };
  }

  static textCurrentNew(selector) {
    let textCurrent = '';
    let countElem = 0;
    $(`${selector} .dropdown__item `)
      .each((i, el) => {
        const { count, name: nameElem } = DropDown.dropItem(el);
        if (count > 0) {
          countElem += 1;
          textCurrent = `${DropDown.getText(
            textCurrent,
            countElem,
          )} ${count} ${nameElem}`;
        }
      });
    $(`${selector} .dropdown__item-current .js-dropdown__text-current`)
      .text(textCurrent);
  }

  static getText(textCurrent, countElem) {
    return `${textCurrent}${countElem >= 2 ? ', ' : ' '}`;
  }

  static textModify(selector) {
    let textCurrent = 'Сколько гостей';
    let adults = 0; // счетчик взрослых
    let child = 0; // счетчик младенцев

    $(`${selector} .dropdown__item`)
      .each((i, el) => {
        const { count, name } = DropDown.dropItem(el);
        if (name === 'младенцы') {
          child = count;
        } else {
          adults += +count;
        }
        textCurrent = DropDown.countAdult(adults, child) + DropDown.countChild(child);
      });
    $(`${selector} .dropdown__item-current .js-dropdown__text-current`)
      .text(textCurrent);
    DropDown.btnHide(selector, adults, child);
  }

  static btnHide(selector, adults, child = 0) {
    const $btnReset = $(selector)
      .find('.js-dropdown__button-reset');
    if (adults <= 0 && child <= 0) {
      $btnReset.css('opacity', 0);
    } else {
      $btnReset.css('opacity', 1);
    }
  }

  static countAdult(count, child) {
    const s = child > 0 ? ', ' : ' ';
    switch (true) {
      case count <= 0:
        return ' ';
      case count <= 1:
        return `${count} гость${s}`;
      case count <= 4:
        return `${count} гостя${s}`;
      default:
        return `${count} гостей${s}`;
    }
  }

  static countChild(count) {
    switch (true) {
      case count <= 0:
        return '';
      case count <= 1:
        return `${count} младенец`;
      case count <= 4:
        return `${count} младенца`;
      default:
        return `${count} младенцев`;
    }
  }

  static disableButton(el) {
    const $minus = $(el)
      .children('.js-control_minus');
    if ($(el)
      .children('span')
      .text() <= 0) {
      $minus.addClass('disable');
    } else {
      $minus.removeClass('disable');
    }
  }

  childrenCurrentVal(className) {
    this.children[className] = [];
    $(`${className} .js-dropdown__span`)
      .each((i, el) => {
        this.children[className][i] = +el.textContent;
      });
  }

  actionDropDown(selector, current) {
    $(selector)
      .each((i, el) => {
        DropDown.disableButton(el);
        $(el)
          .children('.js-dropdown__button')
          .on('click', this.makeEventOperationSum(current, i, el, DropDown.textCurrentNew));
      });
  }

  actionDropDownExtended(selector, current) {
    $(selector)
      .each((i, el) => {
        DropDown.disableButton(el);
        $(el)
          .children('.js-dropdown__button')
          .on('click', this.makeEventOperationSum(current, i, el, DropDown.textModify));
        DropDown.btnHide(current, this.children[current][i]);
      });
  }

  makeEventOperationSum(current, i, el, callBack) {
    return (e) => {
      const sum = e.currentTarget.textContent;
      this.children[current][i] += Number(`${sum}1`);
      if (this.children[current][i] <= 0) {
        this.children[current][i] = 0;
      }
      $(e.currentTarget)
        .siblings('.js-dropdown__span')
        .text(this.children[current][i]);
      callBack(current);
      DropDown.disableButton(el);
    };
  }
}

export { DropDown };
