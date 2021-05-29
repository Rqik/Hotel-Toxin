import { boundMethod } from 'autobind-decorator';

class Menu {
  constructor() {
    this.toggleClass = 'menu__burger_active';
    this.menuItemListClass = '.js-menu__item_with-list';
    this.itemsClass = '.js-menu__items';
    this.burgerClass = '.js-menu__burger';
    this.burger = $(this.burgerClass);
    this.dropListClass = '.js-menu__drop-list';
    this.icon = '<i class="menu__icon"> expand_more </i>';
  }

  init() {
    const $menuItem = $(this.menuItemListClass);

    this.burger.each((_, el) => {
      $(el).click(this.toggleMenuBurger);
    });

    $(document).click(this.documentEvent);

    $menuItem.append(this.icon);
    $menuItem.hover(this.handlerIn, this.handlerOut);
  }

  @boundMethod
  documentEvent(event) {
    if (
      $(event.target).closest(this.itemsClass).length
      || $(event.target).closest(this.burgerClass).length
    ) {
      return;
    }
    $(this.itemsClass).removeClass(this.toggleClass);
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
  toggleMenuBurger(event) {
    $(event.currentTarget)
      .siblings(this.itemsClass)
      .toggleClass(this.toggleClass);
  }
}

export { Menu };
