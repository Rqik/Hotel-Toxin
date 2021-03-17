$(() => {
  $('.js-star-rating').each((i, el) => {
    el.classList.add(`js-rate-${i}`);
    rateInput(`.js-rate-${i}`);
    starRateLaunch(`.js-rate-${i}`);
  });

  function starRateLaunch(selector) {
    const rating = $(selector).data().rate;
    const florRating = Math.floor(rating); // rate cell
    const num = Math.round((rating % 1) * 100); // width
    const $child = $(selector).children('.js-star-rating__radio');

    for (let i = 0; i < $child.length; i += 1) {
      $child[i].querySelector('.material-icons').textContent = 'star_border';
    }

    for (let i = 0; i < florRating; i += 1) {
      $child[i].querySelector('.material-icons').textContent = 'star';
      $child[i].querySelector('.material-icons').style.width = '100%';
    }

    if (num) {
      const $starLastActive = $child[florRating].querySelector(
        '.material-icons',
      );
      $starLastActive.textContent = 'star';
      $starLastActive.style.width = `${num}%`;
      $starLastActive.classList.add('star');

      if (!$child[florRating].querySelector('.star_border')) {
        const el = document.createElement('i');
        el.classList = 'material-icons star_border';
        el.textContent = 'star_border';
        $starLastActive.after(el);
      }
    }
  }

  function rateInput(selector) {
    const $input = $(selector).find('.js-star-rating__input');

    $input.each((i, el) => {
      el.addEventListener('click', () => {
        $(selector).attr('data-rate', el.value);
        $(selector).data().rate = el.value;
        starRateLaunch(selector);
      });
    });
  }
});
