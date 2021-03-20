$(() => {
  function rep(el) {
    return el.replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g, '$1 ');
  }

  $('.card__info_sum').text((i, el) => rep(el));
  $('.card__info_name').text((i, el) => rep(el));
  $('.card__info_result_sum').text((i, el) => rep(el));
  $('.card__header .price span').text((i, el) => rep(el));

  $('.date-picker--button-apply').each(buttonApply);

  function buttonApply(ind) {
    let date = 0;
    let select = [];
    $(this).click(() => {
      console.log('222');
      select = $(`.date_picker-${ind}`).data('datepicker').selectedDates;
      if ($(`.date_picker-${ind}`).closest('.card__reg').length) {
        date = Math.ceil((select[1] - select[0]) / 1000 / 60 / 60 / 24);
        const block = $(`.date_picker-${ind}`).closest('.card__block');
        let pay = block
          .find('.card-pay1')
          .text()
          .match(/[\d+\s?]+(?=₽)/m);
        let dop = block
          .find('.card-dop2')
          .text()
          .match(/[\d+\s?]+(?=₽)/m);
        let sale = block
          .find('.card-sale1')
          .text()
          .match(/[\d+\s?]+(?=₽)/m);

        block.find('.card-pay1').text(`${pay} ₽  * ${date} суток`);

        pay = parseInt(pay[0].replace(/\s+/g, ''), 10) * date;
        dop = parseInt(dop[0].replace(/\s+/g, ''), 10);
        sale = parseInt(sale[0].replace(/\s+/g, ''), 10);

        block.find('.card-pay2').text(`${pay} ₽`);
        block.find('.card__info_result_sum').text(`${+pay + dop - sale}₽`);
      }
    });
  }
});
