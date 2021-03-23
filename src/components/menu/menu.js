class Menu {
  static init() {
    const $menuItem = $('.js-menu__item_more');
    $('.js-menu__burger')
      .on('click', function () {
        Menu.toggleMenuBurger(this);
      });

    $menuItem.append('<i class="material-icons"> expand_more'
      + ' </i>');

    $(document)
      .click((e) => {
        if (
          $(e.target)
            .closest('.js-menu__items').length
          || $(e.target)
            .closest('.js-menu__burger').length
        ) {
          return;
        }
        $('.js-menu__items')
          .removeClass('menu__burger_active');
      });

    $menuItem.hover(
      function () {
        $('ul', this)
          .stop()
          .slideDown(200);
      },
      function () {
        $('ul', this)
          .stop()
          .slideUp(200);
      },
    );
  }

  static toggleMenuBurger(el) {
    $(el)
      .siblings('.js-menu__items')
      .toggleClass('menu__burger_active');
  }
}

export { Menu };
