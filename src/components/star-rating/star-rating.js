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
      $child[i].querySelector('.star-rating__icon').textContent = 'star_border';
    }

    for (let i = 0; i < florRating; i += 1) {
      $child[i].querySelector('.star-rating__icon').textContent = 'star';
      $child[i].querySelector('.star-rating__icon').style.width = '100%';
    }

    if (num) {
      const $starLastActive = $child[florRating].querySelector(
        '.star-rating__icon',
      );
      $starLastActive.textContent = 'star';
      $starLastActive.style.width = `${num}%`;
      $starLastActive.classList.add('star-rating__icon_active');

      if (!$child[florRating].querySelector('.star-rating__icon_disable')) {
        const el = document.createElement('i');
        el.classList = 'star-rating__icon star-rating__icon_disable';
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
