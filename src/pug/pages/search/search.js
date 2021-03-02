$(function () {
  $('.btn_fixed').on('click', () => {
    $('.search__panel').toggleClass('search__panel_fixed');
  });

  // $(document).click( function(e){
  //   if ($(e.target).closest('.nav__menu_items').length
  //     || $(e.target).closest('.menu_burger').length) {
  //       return;
  //   }
  //   $('.nav__menu_items').removeClass('active_burger')
  // });
});
