class CheckBoxList {
  constructor() {
    this.$checkBox = $('.js-check-box_expanded');
  }

  init() {
    this.$checkBox.find('.js-check-box__caption')
      .each(this.eventClick.bind(this));
  }

  eventClick(_, el) {
    $(el)
      .on('click', this.addClass.bind(this));
  }

  addClass(e) {
    if (e.target === e.currentTarget) {
      this.$checkBox
        .toggleClass('check-box_expanded_active');
      this.$checkBox
        .children('.js-check-box__items')
        .slideToggle(300);
    }
  }
}

export { CheckBoxList };
