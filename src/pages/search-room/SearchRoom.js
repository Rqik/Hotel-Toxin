class SearchRoom {
  $searchPanel = null;

  $pageButton = null;

  constructor() {
    this.findSearchPageElement();
  }

  findSearchPageElement() {
    this.$pageButton = $('.js-search-page__panel-btn');
    this.$searchPanel = $('.js-search-page__panel');
  }

  init() {
    this.$pageButton.on('click', SearchRoom.onClickSearchPanel.bind(this));
  }

  static onClickSearchPanel() {
    this.$searchPanel.toggleClass('search-page__panel_fixed');
  }
}

export default SearchRoom;
