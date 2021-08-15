import { boundMethod } from 'autobind-decorator';

class CardRoom {
  constructor() {
    this.findCardRoom();
    this.findInput();
    this.setDefaultClassName();
  }

  findCardRoom() {
    this.$card = $('.js-card-room');
  }

  findInput() {
    this.$input = this.$card.find('.js-date-picker');
  }

  setDefaultClassName() {
    this.buttonApplyClass = '.js-datepicker--button-apply';
    this.roomInfoClass = '.js-card-room__info';
    this.roomDataClass = '.js-card-room__data';
    this.totalAmountClass = '.js-card-room__total-amount';
    this.saleClass = '.js-card-room__sale';
    this.priceDayClass = '.js-card-room__price-day';
    this.totalPriceClass = '.js-card-room__total-price';
    this.additionalClass = '.js-card-room__additional';
    this.infoSumClass = '.js-card-room__info-sum';
    this.infoNameClass = '.js-card-room__info-name';
    this.priceNumberClass = '.js-card-room_ _price-number';
  }

  init() {
    const buttons = [];
    this.$input.each((_, el) => {
      buttons.push(
        $(el).data('datepicker').$datepicker.find(this.buttonApplyClass),
      );
    });

    buttons.forEach(this.handleButtonApply);

    $(this.infoSumClass).text((_, el) => CardRoom.replace(el));
    $(this.infoNameClass).text((_, el) => CardRoom.replace(el));
    $(this.totalPriceClass).text((_, el) => CardRoom.replace(el));
    $(this.priceNumberClass).text((_, el) => CardRoom.replace(el));
  }

  @boundMethod
  handleButtonApply(el, ind) {
    const $currentDP = $(this.$input[ind]);
    const $block = $currentDP
      .closest(this.roomDataClass)
      .siblings(this.roomInfoClass);
    const $pay = $block.find(this.totalAmountClass);
    const $dop = $block.find(this.additionalClass);
    const $sale = $block.find(this.saleClass);
    const $price = $block.find(this.priceDayClass);
    const $resultSum = $block.find(this.totalPriceClass);

    $(el).on(
      'click',
      CardRoom.makeEventHandler({
        $currentDP,
        $pay,
        $dop,
        $sale,
        $price,
        $resultSum,
      }),
    );
  }

  @boundMethod
  static makeEventHandler(options) {
    const {
      $currentDP, $pay, $dop, $sale, $price, $resultSum,
    } = options;
    return () => {
      const [to, from] = $currentDP.data('datepicker').selectedDates;
      let date = Math.ceil((from - to) / 1000 / 60 / 60 / 24);
      if (!date) {
        date = 1;
      }

      let pay = CardRoom.priceReg($pay);
      let dop = CardRoom.priceReg($dop);
      let sale = CardRoom.priceReg($sale);

      $pay.text(`${pay} ₽  * ${date} суток`);

      pay = parseInt(pay[0].replace(/\s+/g, ''), 10) * date;
      dop = parseInt(dop[0].replace(/\s+/g, ''), 10);
      sale = parseInt(sale[0].replace(/\s+/g, ''), 10);

      $price.text(`${CardRoom.replace(pay)} ₽`);
      $resultSum.text(`${CardRoom.replace(+pay + dop - sale)}₽`);
    };
  }

  static priceReg($jq) {
    return $jq.text().match(/[\d+\s?]+(?=₽)/m);
  }

  static replace(el) {
    return el.toString().replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g, '$1 ');
  }
}

export default CardRoom;
