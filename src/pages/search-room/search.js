$(() => {
  $('.js-search-page__panel-btn')
    .on('click', () => {
      $('.js-search-page__panel')
        .toggleClass('search-page__panel_fixed');
      // $('.search-page__components').slideToggle(200)
    });

});
