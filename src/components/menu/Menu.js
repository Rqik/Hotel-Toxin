import { boundMethod } from 'autobind-decorator';

class Menu {
  constructor() {
    this.setDefaultClassName();
    this.findMenuItem();
  }

  setDefaultClassName() {
    this.toggleClass = 'menu__burger_active';
    this.menuItemListClass = '.js-menu__item_with-list';
    this.itemsClass = '.js-menu__items';
    this.burgerClass = '.js-menu__burger';
    this.closeClass = '.js-menu__close';
    this.dropListClass = '.js-menu__drop-list';
  }

  findMenuItem() {
    this.$burger = $(this.burgerClass);
    this.$menu = $(this.itemsClass);
    this.$closeButton = $(this.closeClass);
  }

  showBurgerMenu(_, el) {
    $(el).on('click', this.handleToggleMenuBurgerClick);
  }

  init() {
    this.$burger.each(this.showBurgerMenu);

    this.$closeButton.on('click', this.handlerHideBurgerMenuClick);
    $(document).on('click', this.handlerDocumentClick);

    $(this.menuItemListClass).hover(this.handlerIn, this.handlerOut);
  }

  @boundMethod
  handlerDocumentClick(event) {
    if (
      $(event.target).closest(this.itemsClass).length
      || $(event.target).closest(this.burgerClass).length
    ) {
      return;
    }
    this.handlerHideBurgerMenuClick();
  }

  @boundMethod
  handlerHideBurgerMenuClick() {
    this.$menu.removeClass(this.toggleClass);
  }

  @boundMethod
  handlerIn(event) {
    $(this.dropListClass, event.currentTarget).stop().slideDown(200);
  }

  @boundMethod
  handlerOut(event) {
    $(this.dropListClass, event.currentTarget).stop().slideUp(200);
  }

  @boundMethod
  handleToggleMenuBurgerClick(event) {
    $(event.currentTarget)
      .siblings(this.itemsClass)
      .toggleClass(this.toggleClass);
  }
}

export default Menu;
