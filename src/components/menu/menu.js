class Menu {
  static init() {
    const $menuItem = $('.js-menu__item_more');
    $('.js-menu__burger')
      .on('click', Menu.toggleMenuBurger);

    $menuItem.append('<i class="icon"> expand_more </i>');

    $(document).click(Menu.documentEvent);

    $menuItem.hover(Menu.handlerIn, Menu.handlerOut);
  }

  static documentEvent(e) {
    if ($(e.target).closest('.js-menu__items').length
      || $(e.target).closest('.js-menu__burger').length
    ) { return; }
    $('.js-menu__items')
      .removeClass('menu__burger_active');
  }

  static handlerIn(event) {
    $('ul', event.currentTarget)
      .stop()
      .slideDown(200);
  }

  static handlerOut(event) {
    $('ul', event.currentTarget)
      .stop()
      .slideUp(200);
  }

  static toggleMenuBurger(event) {
    $(event.currentTarget)
      .siblings('.js-menu__items')
      .toggleClass('menu__burger_active');
  }
}

export { Menu };
