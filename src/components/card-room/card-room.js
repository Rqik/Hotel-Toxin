import '@/components/date-picker';
import '@/components/drop-down';

class CardRoom {
  static init() {
    $('.js-card-room__info-sum')
      .text((i, el) => CardRoom.replace(el));
    $('.js-card-room__info-name')
      .text((i, el) => CardRoom.replace(el));
    $('.js-card-room__info-sum_result')
      .text((i, el) => CardRoom.replace(el));
    $('.js-card-room__price_bold')
      .text((i, el) => CardRoom.replace(el));
    $('.js-datepicker--button-apply')
      .each(CardRoom.buttonApply);
  }

  static buttonApply(ind, el) {
    let date = 0;
    let select = [];
    $(el)
      .click(() => {
        select = $(`.js-date-picker-${ind}`)
          .data('datepicker').selectedDates;
        if ($(`.js-date-picker-${ind}`)
          .closest('.card-room__data').length) {
          date = Math.ceil((select[1] - select[0]) / 1000 / 60 / 60 / 24);
          const $block = $(`.js-date-picker-${ind}`)
            .closest(
              '.card-room__data',
            )
            .siblings('.js-card-room__info');
          console.log($block);

          let pay = $block
            .find('.js-card-room__pay1')
            .text()
            .match(/[\d+\s?]+(?=₽)/m);
          let dop = $block
            .find('.js-card-room__dop2')
            .text()
            .match(/[\d+\s?]+(?=₽)/m);
          let sale = $block
            .find('.js-card-room__sale1')
            .text()
            .match(/[\d+\s?]+(?=₽)/m);

          $block.find('.js-card-room__pay1')
            .text(`${pay} ₽  * ${date} суток`);

          pay = parseInt(pay[0].replace(/\s+/g, ''), 10) * date;
          dop = parseInt(dop[0].replace(/\s+/g, ''), 10);
          sale = parseInt(sale[0].replace(/\s+/g, ''), 10);
          $block.find('.js-card-room__pay2')
            .text(`${CardRoom.replace(pay)} ₽`);
          $block
            .find('.js-card-room__info-sum_result')
            .text(`${CardRoom.replace(+pay + dop - sale)}₽`);
        }
      });
  }

  static replace(el) {
    return el.toString()
      .replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g, '$1 ');
  }
}

export { CardRoom };
