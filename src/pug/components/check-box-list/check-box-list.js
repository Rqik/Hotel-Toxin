$(document).ready(() => {
  $('.js-check-box_expanded').each(eventClick);

  function eventClick() {
    $(this).on('click', addClass);
  }

  function addClass(e) {
    if (e.target === e.currentTarget) {
      $(this).toggleClass('expanded_active');
      $(this).children('.js-check-box__items').slideToggle(300);
    }
  }
});
