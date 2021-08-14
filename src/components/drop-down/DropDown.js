import { boundMethod } from 'autobind-decorator';

class DropDown {
  constructor() {
    this.children = {};
    this.dropDown = {};
    this.dropDownClass = '.js-drop-down__select';
    this.dropDownExtendClass = '.js-drop-down__select_extended';
    this.controlPanelClass = '.js-drop-down__control-panel';
    this.buttonClass = '.js-drop-down__button';
    this.dropItemsClass = '.js-drop-down__items';
    this.dropItemClass = '.js-drop-down__item';
    this.itemCurrentClass = '.js-drop-down__item-current';
    this.btnSubmitClass = '.js-drop-down__submit-button';
    this.btnMinusClass = '.js-btn_minus';
    this.btnResetClass = '.js-drop-down__reset-button';
    this.spanClass = '.js-drop-down__span';
    this.textCurrentClass = '.js-drop-down__text-current';
    this.itemSpanClass = '.js-drop-down__item-span';
    this.buttonDisableClass = 'drop-down__button_disabled';
    this.toggleClass = 'drop-down__select_active';
  }

  init() {
    $(this.dropDownClass).each((i, el) => {
      const className = `.js-dpd_slt-${i}`;
      const name = `js-dpd_slt-${i}`;
      this.dropDown[className] = $(el);
      el.classList.add(name);
      this.active(className);
      this.slideDrop(className);
      this.childrenCurrentVal(className);
      this.actionDropDown(className);
    });

    $(this.dropDownExtendClass).each((i, el) => {
      const className = `.js-dp_ext-${i}`;
      const name = `js-dp_ext-${i}`;
      this.dropDown[className] = $(el);
      el.classList.add(name);
      this.active(className);
      this.slideDrop(className);
      this.childrenCurrentVal(className);
      this.actionDropDownExtended(className);
      this.buttonAction(className);
    });
  }

  active(selector) {
    if (!$(selector).hasClass(this.toggleClass)) {
      $(`${selector} ${this.dropItemsClass}`).slideToggle(0);
    }
  }

  slideDrop(selector) {
    const current = this.dropDown[selector].children(
      `${this.itemCurrentClass}`,
    );
    const btn = this.dropDown[selector].find(`${this.btnSubmitClass}`);
    current.on('click', this.makeToggleDropDown(selector));
    document.addEventListener('click', this.makeCloseDropDown(selector));

    if (btn.length) {
      btn.on('click', this.makeToggleDropDown(selector));
    }
  }

  @boundMethod
  makeCloseDropDown(selector) {
    return (event) => {
      const isHave = !!event.target.closest(selector);
      if (!isHave) {
        const items = this.dropDown[selector].find(`${this.dropItemsClass}`);
        items.slideUp(300);
        this.dropDown[selector].removeClass(this.toggleClass);
      }
    };
  }

  makeToggleDropDown(selector) {
    const items = this.dropDown[selector].find(`${this.dropItemsClass}`);
    return () => {
      items.slideToggle(300);
      this.dropDown[selector].toggleClass(this.toggleClass);
    };
  }

  actionDropDown(selector) {
    this.dropDown[selector].find(this.controlPanelClass).each((i, el) => {
      $(el).children(this.buttonClass).on(
        'click',
        this.makeEventOperationSum(
          {
            selector,
            i,
            el,
          },
          this.textCurrentNew,
        ),
      );
    });
  }

  actionDropDownExtended(selector) {
    const $btnReset = this.dropDown[selector].find(this.btnResetClass);

    this.dropDown[selector].find(this.controlPanelClass).each((i, el) => {
      $(el).children(this.buttonClass).on(
        'click',
        this.makeEventOperationSum(
          {
            selector,
            i,
            el,
          },
          this.textModify,
        ),
      );
      DropDown.btnHide($btnReset, this.children[selector][i]);
    });
  }

  makeEventOperationSum(options, callBack) {
    const { selector, i, el } = options;
    const $span = $(el).find(this.spanClass);
    const $btnMinus = $(el).children(this.btnMinusClass);

    this.disableButton($btnMinus, $span);

    return (event) => {
      let item = this.children[selector][i];

      const sum = event.currentTarget.textContent;
      item += Number(`${sum}1`);
      if (item <= 0) {
        item = 0;
      }
      this.children[selector][i] = item;
      $span.text(item);
      callBack(selector);
      this.disableButton($btnMinus, $span);
    };
  }

  disableButton($btn, $span) {
    if ($span.text() <= 0) {
      $btn.addClass(this.buttonDisableClass);
    } else {
      $btn.removeClass(this.buttonDisableClass);
    }
  }

  buttonAction(selector) {
    this.dropDown[selector]
      .find(this.btnResetClass)
      .on('click', this.makeEventReset(selector));
  }

  makeEventReset(selector) {
    const $currentText = this.dropDown[selector].find(this.textCurrentClass);
    const $span = this.dropDown[selector].find(this.spanClass);
    const $btnMinus = this.dropDown[selector].find(this.btnMinusClass);
    return (event) => {
      $currentText.text('Сколько гостей');
      $span.text(0);
      $btnMinus.addClass(this.buttonDisableClass);
      this.children[selector].fill(0);
      DropDown.btnHide($(event.currentTarget), 0);
    };
  }

  dropItem(el) {
    return {
      count: $(el).find(this.spanClass).text(),
      name: $(el).children(this.itemSpanClass).text(),
    };
  }

  @boundMethod
  textCurrentNew(selector) {
    let textCurrent = '';
    let countElem = 0;
    this.dropDown[selector].find(this.dropItemClass).each((_, el) => {
      const { count, name: nameElem } = this.dropItem(el);
      if (count > 0) {
        countElem += 1;
        textCurrent = `${DropDown.getText(
          textCurrent,
          countElem,
        )} ${count} ${nameElem}`;
      }
    });
    this.dropDown[selector].find(this.textCurrentClass).text(textCurrent);
  }

  static getText(textCurrent, countElem) {
    return `${textCurrent}${countElem >= 2 ? ', ' : ' '}`;
  }

  @boundMethod
  textModify(selector) {
    let textCurrent = 'Сколько гостей';
    let adults = 0; // счетчик взрослых
    let child = 0; // счетчик младенцев
    const $btnReset = this.dropDown[selector].find(this.btnResetClass);
    this.dropDown[selector].find(`${this.dropItemClass}`).each((_, el) => {
      const { count, name } = this.dropItem(el);
      if (name === 'младенцы') {
        child = count;
      } else {
        adults += +count;
      }
      textCurrent = DropDown.countAdult(adults, child) + DropDown.countChild(child);
    });
    this.dropDown[selector].find(this.textCurrentClass).text(textCurrent);
    DropDown.btnHide($btnReset, adults, child);
  }

  static btnHide($btnReset, adults, child = 0) {
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

  childrenCurrentVal(className) {
    this.children[className] = [];
    $(`${className} ${this.spanClass}`).each((i, el) => {
      this.children[className][i] = +el.textContent;
    });
  }
}

export default DropDown;
