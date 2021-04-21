class StarRating {
  constructor() {
    this.$star = $('.js-star-rating');
  }

  init() {
    this.$star.each((i, el) => {
      el.classList.add(`js-rate-${i}`);
      StarRating.rateInput(`.js-rate-${i}`);
      StarRating.starRateLaunch(`.js-rate-${i}`);
    });
  }

  static starRateLaunch(selector) {
    const rating = $(selector)
      .data().rate;
    const florRating = Math.floor(rating); // rate cell
    const num = Math.round((rating % 1) * 100); // width
    const $child = $(selector)
      .children('.js-star-rating__radio');

    for (let i = 0; i < $child.length; i += 1) {
      $child[i].querySelector('.icon').textContent = 'star_border';
    }

    for (let i = 0; i < florRating; i += 1) {
      $child[i].querySelector('.icon').textContent = 'star';
      $child[i].querySelector('.icon').style.width = '100%';
    }

    if (num) {
      const $starLastActive = $child[florRating].querySelector(
        '.icon',
      );
      $starLastActive.textContent = 'star';
      $starLastActive.style.width = `${num}%`;
      $starLastActive.classList.add('star');

      if (!$child[florRating].querySelector('.star_border')) {
        const el = document.createElement('i');
        el.classList = 'icon star_border';
        el.textContent = 'star_border';
        $starLastActive.after(el);
      }
    }
  }

  static rateInput(selector) {
    const $input = $(selector)
      .find('.js-star-rating__input');
    $input.each((i, el) => {
      el.addEventListener('click', StarRating.makeStarRateEvent(selector));
    });
  }

  static makeStarRateEvent(selector) {
    return (event) => {
      $(selector)
        .attr('data-rate', event.currentTarget.value);
      $(selector)
        .data().rate = event.currentTarget.value;
      StarRating.starRateLaunch(selector);
    };
  }
}

export { StarRating };
