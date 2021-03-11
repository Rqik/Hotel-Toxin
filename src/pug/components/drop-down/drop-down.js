/* eslint-disable no-plusplus */
/* eslint-disable no-unused-expressions */
/* eslint-disable indent */
$(() => {
  $('.dropdown__select').each((i, el) => {
    el.classList.add(`dropdown__select-${i}`);
    active(`.dropdown__select-${i}`);
    slideDrop(`.dropdown__select-${i} .dropdown__select_current`);
    actionDropDown(
      ` .dropdown__select-${i} .dropdown__control`,
      ` .dropdown__select-${i}`,
    );
    $(`.dropdown__select-${i} .dropdown__select_current`).click(() => {
      $(`.dropdown__select-${i}`).toggleClass('drop_active');
    });
  });

  $('.dropdown__select_modify').each((i, el) => {
    el.classList.add(`dropdown__select_modify-${i}`);
    active(`.dropdown__select_modify-${i}`);
    slideDrop(`.dropdown__select_modify-${i} .dropdown__select_current`);

    actionDropDownModify(
      ` .dropdown__select_modify-${i} .dropdown__control`,
      ` .dropdown__select_modify-${i}`,
    );
    buttonAction(`.dropdown__select_modify-${i}`);

    $(`.dropdown__select_modify-${i} .dropdown__select_current`).click(() => {
      $(`.dropdown__select_modify-${i}`).toggleClass('drop_active');
    });
  });

  function buttonAction(selector) {
    $(selector).find('.dropdown__select_button-reset').on('click', eventMain);
    function eventMain() {
      $(selector)
        .find('.dropdown__select_current > span')
        .text('Сколько гостей');
      $(selector).find('.dropdown__control > span').text(0);
      $(selector)
        .find('.dropdown__control_button.control_minus')
        .addClass('disable');
      $(this).css('opacity', 0);
    }
  }

  function active(selector) {
    if (!$(selector).hasClass('drop_active')) {
      $(`${selector} .dropdown__select_items`).slideToggle(0);
    }
  }

  function slideDrop(selector) {
    $(selector).on('click', () => {
      $(` ${selector} ~ .dropdown__select_items`).slideToggle(300);
    });
  }

  function textCurentNew(selector) {
    let textCurrent = '';
    let length = 0;
    $(` ${selector} .dropdown__select_item `).each((i, el) => {
      const text = el.querySelector(`${selector} .dropdown__control > span`)
        .textContent;
      text > 0 ? length++ : false;
      text > 0
        ? (textCurrent = `${textCurrent}${length >= 2 ? ', ' : ' '}${text} ${
            el.querySelector(' span').textContent
          }`)
        : ' s';
    });

    $(`${selector} .dropdown__select_current span`).text(textCurrent);
  }

  function textModify(selector) {
    let textCurrent = 'Сколько гостей';
    let length = 0;
    let child = 0;

    $(` ${selector} .dropdown__select_item `).each((i, el) => {
      const text = el.querySelector(`${selector} .dropdown__control > span`)
        .textContent;
      const name = el.querySelector(`${selector} .dropdown__select_item span`)
        .textContent;

      if (name === 'младенцы') {
        text > 0 ? (child = text) : false;
      } else {
        text > 0 ? (length += +text) : false;
      }
      text > 0
        ? (textCurrent =
            `${length}` +
            `${length <= 1 ? ' гость' : length <= 4 ? ' гостя' : ' гостей'} ` +
            `${
              child > 0
                ? `, ${child}${
                    child <= 1
                      ? ' младенец'
                      : child <= 4
                      ? ' младенца'
                      : ' младенцев'
                  } `
                : ''
            } `)
        : '';
    });

    if (length <= 0) {
      $(selector).find('.dropdown__select_button-reset').css('opacity', 0);
    } else {
      $(selector).find('.dropdown__select_button-reset').css('opacity', 1);
    }
    $(`${selector} .dropdown__select_current span`).text(textCurrent);
  }

  function disableButton(el) {
    if (el.querySelector('span').textContent <= 0) {
      el.querySelector('.dropdown__control_button.control_minus').classList.add(
        'disable',
      );
    } else {
      el.querySelector(
        '.dropdown__control_button.control_minus',
      ).classList.remove('disable');
    }
  }

  function actionDropDown(selector, current) {
    $(selector).each(function (i, el) {
      disableButton(el);
      if (el.querySelector('span').textContent <= 0) {
        el.querySelector(
          '.dropdown__control_button.control_minus',
        ).classList.add('disable');
      } else {
        el.querySelector(
          '.dropdown__control_button.control_minus',
        ).classList.remove('disable');
      }

      $(this)
        .children('.dropdown__control_button')
        .on('click', (e) => {
          let text = $(this).children('span').text();
          const sum = e.currentTarget.textContent;

          sum === '+' ? text++ : text--;
          if (text <= 0) {
            text = 0;
            $(this)
              .children('.dropdown__control_button.control_minus')
              .addClass('disable');
          } else {
            $(this)
              .children('.dropdown__control_button.control_minus')
              .removeClass('disable');
          }

          $(this).children('span').text(text);

          textCurentNew(current);
        });
    });
  }

  function actionDropDownModify(selector, current) {
    $(selector).each(function (i, el) {
      disableButton(el);

      el.querySelector('span').textContent <= 0
        ? el
            .querySelector('.dropdown__control_button.control_minus')
            .classList.add('disable')
        : el
            .querySelector('.dropdown__control_button.control_minus')
            .classList.remove('disable');

      // textCurentNew(current)
      let text = $(this).children('span').text();
      $(this)
        .children('.dropdown__control_button')
        .on('click', (e) => {
          const sum = e.currentTarget.textContent;

          sum === '+' ? ++text : --text;

          if (text <= 0) {
            text = 0;
            $(this)
              .children('.dropdown__control_button.control_minus')
              .addClass('disable');
          } else {
            $(this)
              .children('.dropdown__control_button.control_minus')
              .removeClass('disable');
          }

          $(this).children('span').text(text);

          textModify(current);
        });

      if (text >= 0) {
        $(current).find('.dropdown__select_button-reset').css('opacity', 0);
      } else {
        $(current).find('.dropdown__select_button-reset').css('opacity', 1);
      }
    });
  }
});
