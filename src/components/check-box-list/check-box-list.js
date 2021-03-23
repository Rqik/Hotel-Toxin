class CheckBoxList {
  init() {
    $('.js-check-box_expanded')
      .each(this.eventClick.bind(this));
  }

  eventClick(_, el) {
    $(el)
      .on('click', this.addClass);
  }

  addClass(e) {
    if (e.target === e.currentTarget) {
      $(this)
        .toggleClass('expanded_active');
      $(this)
        .children('.js-check-box__items')
        .slideToggle(300);
    }
  }
}

export { CheckBoxList };
