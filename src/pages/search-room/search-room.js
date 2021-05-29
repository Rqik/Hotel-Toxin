$(() => {
  $('.js-search-page__panel-btn').on('click', disableSearchPanel);

  function disableSearchPanel() {
    $('.js-search-page__panel').toggleClass('search-page__panel_fixed');
  }
});
