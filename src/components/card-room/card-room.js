import '@/components/date-picker';
import '@/components/drop-down';

class CardRoom {
  constructor() {
    this.card = $('.js-card-room');
    this.$input = this.card.find('.js-date-picker');
  }

  init() {
    const button = [];
    this.$input.each((_, el) => {
      button.push(
        $(el)
          .data('datepicker')
          .$datepicker.find('.js-datepicker--button-apply'),
      );
    });
    button.forEach(this.buttonApply.bind(this));

    $('.js-card-room__info-sum').text((_, el) => CardRoom.replace(el));
    $('.js-card-room__info-name').text((_, el) => CardRoom.replace(el));
    $('.js-card-room__info-sum_result').text((_, el) => CardRoom.replace(el));
    $('.js-card-room__price_bold').text((_, el) => CardRoom.replace(el));
  }

  buttonApply(el, ind) {
    let date = 0;
    let select = [0, 0];
    const $currentDP = $(this.$input[ind]);
    $(el).click(() => {
      select = $currentDP.data('datepicker').selectedDates;

      date = Math.ceil((select[1] - select[0]) / 1000 / 60 / 60 / 24);
      if (!date) {
        date = 1;
      }
      const $block = $currentDP
        .closest('.card-room__data')
        .siblings('.js-card-room__info');
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

      $block.find('.js-card-room__pay1').text(`${pay} ₽  * ${date} суток`);

      pay = parseInt(pay[0].replace(/\s+/g, ''), 10) * date;
      dop = parseInt(dop[0].replace(/\s+/g, ''), 10);
      sale = parseInt(sale[0].replace(/\s+/g, ''), 10);
      $block.find('.js-card-room__pay2').text(`${CardRoom.replace(pay)} ₽`);
      $block
        .find('.js-card-room__info-sum_result')
        .text(`${CardRoom.replace(+pay + dop - sale)}₽`);
    });
  }

  static replace(el) {
    return el.toString().replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g, '$1 ');
  }
}

export { CardRoom };
