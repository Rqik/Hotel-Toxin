$(document).ready(() => {
  $('.checkbox__expan').each(eventClick);

  function eventClick() {
    $(this).on('click', addClass);
  }

  function addClass(e) {
    if (e.target === e.currentTarget) {
      $(this).toggleClass('exp_active');
      $(this).children('.checkbox__items').slideToggle(300);
    }
  }
});
