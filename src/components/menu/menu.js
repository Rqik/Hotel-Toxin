class Menu {
  constructor() {
    this.toggleClass = 'menu__burger_active';
    this.menuItemListClass = '.js-menu__item_with-list';
    this.itemsClass = '.js-menu__items';
    this.burgerClass = '.js-menu__burger';
    this.burger = $(this.burgerClass);
    this.dropListClass = '.js-menu__drop-list';
    this.icon = '<i class="menu__icon"> expand_more </i>';
    this.eventDoc = this.documentEvent.bind(this);
    this.eventMenu = this.toggleMenuBurger.bind(this);
  }

  init() {
    const $menuItem = $(this.menuItemListClass);

    this.burger.each((_, el) => {
      $(el)
        .click(this.eventMenu);
    });

    $(document)
      .click(this.eventDoc);

    $menuItem.append(this.icon);
    $menuItem.hover(this.handlerIn.bind(this), this.handlerOut.bind(this));
  }

  documentEvent(event) {
    if ($(event.target)
      .closest(this.itemsClass).length
      || $(event.target)
        .closest(this.burgerClass).length
    ) {
      return;
    }
    $(this.itemsClass)
      .removeClass(this.toggleClass);
  }

  handlerIn(event) {
    $(this.dropListClass, event.currentTarget)
      .stop()
      .slideDown(200);
  }

  handlerOut(event) {
    $(this.dropListClass, event.currentTarget)
      .stop()
      .slideUp(200);
  }

  toggleMenuBurger(event) {
    $(event.currentTarget)
      .siblings(this.itemsClass)
      .toggleClass(this.toggleClass);
  }
}

export { Menu };
