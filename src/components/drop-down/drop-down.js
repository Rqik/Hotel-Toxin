class DropDown {
  static init() {
    $('.js-dropdown__select').each((i, el) => {
      const className = `.js-dpd_slt-${i}`;
      const name = `js-dpd_slt-${i}`;
      el.classList.add(name);
      this.active(className);
      this.slideDrop(className);

      this.actionDropDown(`${className} .dropdown__control-panel`, className);
      $(`${className} .dropdown__item_current`).click(() => {
        $(className).toggleClass('dropdown_active');
      });
    });

    $('.js-dropdown__select_extended').each((i, el) => {
      const className = `.js-dp_ext-${i}`;
      const name = `js-dp_ext-${i}`;
      el.classList.add(name);
      this.active(className);
      this.slideDrop(className);
      this.actionDropDownModify(`${className} .dropdown__control-panel`, className);
      this.buttonAction(className);

      $(`${className} .dropdown__item_current`).click(() => {
        $(className).toggleClass('dropdown_active');
      });
    });
  }

  buttonAction(selector) {
    $(selector).find('.js-dropdown__button-reset').on('click', () => this.eventMain(selector));
  }

  eventMain(selector) {
    $(selector).find('.js-dropdown__text_current')
      .text('Сколько гостей');
    $(selector).find('.js-dropdown__control-panel_span')
      .text(0);
    $(selector).find('.js-control_minus')
      .addClass('disable');
    $(this).css('opacity', 0);
  }

  static count(el) {
    return {
      count: $(el).find('.js-dropdown__control-panel_span').text(),
      name: $(el).children('.dropdown__item_span').text(),
    };
  }

  static active(selector) {
    if (!$(selector).hasClass('dropdown_active')) {
      $(`${selector} .dropdown__items`).slideToggle(0);
    }
  }

  static slideDrop(selector) {
    $(`${selector} .js-dropdown__item_current`).on('click', () => {
      $(` ${selector} .js-dropdown__item_current ~ .dropdown__items`).slideToggle(300);
    });
  }

  textCurrentNew(selector) {
    let textCurrent = '';
    let countElem = 0;
    $(`${selector} .dropdown__item `).each((i, el) => {
      const { count, name: nameElem } = this.count(el);
      if (count > 0) {
        countElem += 1;
        textCurrent = `${this.getText(textCurrent, countElem)} ${count} ${nameElem}`;
      }
    });
    $(`${selector} .dropdown__item_current span`).text(textCurrent);
  }

  static getText(textCurrent, countElem) {
    return `${textCurrent}${countElem >= 2 ? ', ' : ' '}`;
  }

  textModify(selector) {
    let textCurrent = 'Сколько гостей';
    let adults = 0; // счетчик взрослых
    let child = 0; // счетчик младенцев

    $(`${selector} .dropdown__item`).each((i, el) => {
      const { count, name } = this.count(el);
      if (name === 'младенцы') {
        child = count;
      } else {
        adults += +count;
      }
      textCurrent = this.countAdult(adults, child) + this.countChild(child);
    });
    $(`${selector} .dropdown__item_current span`).text(textCurrent);

    this.btnHide(selector, adults, child);
  }

  static btnHide(selector, adults, child = 0) {
    const $btnReset = $(selector).find('.js-dropdown__button-reset');
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
    const $minus = $(el).children('.js-control_minus');
    if ($(el).children('span').text() <= 0) {
      $minus.addClass('disable');
    } else {
      $minus.removeClass('disable');
    }
  }

  actionDropDown(selector, current) {
    const that = this;
    $(selector)
      .each(function (i, el) {
        that.disableButton(el);

        $(this)
          .children('.dropdown__button')
          .on('click', (e) => {
            let text = +$(this).children('span').text();
            const sum = e.currentTarget.textContent;
            text += Number(`${sum}1`);
            text <= 0 ? text = 0 : false;
            $(this).children('span').text(text);
            that.textCurrentNew(current);
            that.disableButton(el);
          });
      });
  }

  actionDropDownModify(selector, current) {
    const that = this;
    $(selector).each(function (i, el) {
      that.disableButton(el);

      $(el).children('span').text();
      let text = +$(this).children('span').text();
      $(this).children('.dropdown__button').on('click', (e) => {
        const sum = e.currentTarget.textContent;
        text += Number(`${sum}1`);
        text <= 0 ? text = 0 : false;
        $(this).children('span').text(text);
        that.textModify(current);
        that.disableButton(el);
      });

      that.btnHide(current, text);
    });
  }
}

export { DropDown };
