import '../input/input';

$(() => {
  $('.nav__menu_item-more').append(
    '<i class="material-icons"> expand_more </i>',
  );

  $('.menu_burger').on('click', toggleMenuBurger);

  function toggleMenuBurger() {
    $(this).siblings('.nav__menu_items').toggleClass('active_burger');
  }

  $(document).click((e) => {
    if (
      $(e.target).closest('.nav__menu_items').length
            || $(e.target).closest('.menu_burger').length
    ) {
      return;
    }
    $('.nav__menu_items').removeClass('active_burger');
  });
  $('.nav__menu_item-more').hover(
    function () {
      $('ul', this).stop().slideDown(200);
    },
    function () {
      $('ul', this).stop().slideUp(200);
    },
  );
});
