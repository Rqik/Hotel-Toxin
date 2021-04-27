class CheckBoxList {
  constructor() {
    this.checkBoxClass = '.js-check-box_expanded';
    this.captionClass = '.js-check-box__caption';
    this.itemsClass = '.js-check-box__items';
    this.toggleClass = 'check-box_expanded_active';
    this.$checkBox = $(this.checkBoxClass);
  }

  init() {
    this.$checkBox.find(this.captionClass)
      .each(this.eventClick.bind(this));
  }

  eventClick(_, el) {
    const $checkBox = $(el)
      .closest(this.checkBoxClass);
    const $child = $(el)
      .siblings(this.itemsClass);
    $(el)
      .on('click', this.makeToggleClass($checkBox, $child)
        .bind(this));
  }

  makeToggleClass($node, $items) {
    return (e) => {
      if (e.target === e.currentTarget) {
        $node.toggleClass(this.toggleClass);
        $items.slideToggle(300);
      }
    };
  }
}

export { CheckBoxList };
