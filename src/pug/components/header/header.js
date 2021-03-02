import '../input/input.js';
$(function () {
  $('.nav__menu_item-more').append(
    '<i class="material-icons"> expand_more </i>'
  );

  $('.menu_burger').on('click', () => {
    $('.nav__menu_items').toggleClass('active_burger');
  });

  $(document).click(function (e) {
    if (
      $(e.target).closest('.nav__menu_items').length ||
      $(e.target).closest('.menu_burger').length
    ) {
      return;
    }
    $('.nav__menu_items').removeClass('active_burger');
  });
});
