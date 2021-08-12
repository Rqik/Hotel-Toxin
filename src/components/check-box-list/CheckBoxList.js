import { boundMethod } from 'autobind-decorator';

class CheckBoxList {
  constructor() {
    this.checkBoxClass = '.js-check-box_expanded';
    this.captionClass = '.js-check-box__caption';
    this.itemsClass = '.js-check-box__items';
    this.toggleClass = 'check-box_active';
    this.$checkBox = $(this.checkBoxClass);
  }

  init() {
    this.$checkBox.find(this.captionClass).each(this.eventClick);
    this.$checkBox.each((_, el) => {
      if (el.classList.contains(this.toggleClass)) {
        $(el).find(this.itemsClass).slideToggle(300);
      }
    });
  }

  @boundMethod
  eventClick(_, el) {
    const $checkBox = $(el).closest(this.checkBoxClass);
    const $child = $(el).siblings(this.itemsClass);
    $(el).on('click', this.makeToggleClass($checkBox, $child));
  }

  @boundMethod
  makeToggleClass($node, $items) {
    return (event) => {
      if (event.target === event.currentTarget) {
        $node.toggleClass(this.toggleClass);
        $items.slideToggle(300);
      }
    };
  }
}

export default CheckBoxList;
