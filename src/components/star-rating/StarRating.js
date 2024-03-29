class StarRating {
  constructor() {
    this.setDefaultClassName();
    this.setStarValue();
    this.findStar();
  }

  setDefaultClassName() {
    this.starClass = '.js-star-rating__icon';
    this.activeClass = 'star-rating__icon_active';
    this.disableClass = '.star-rating__icon_disable';
    this.radioClass = '.js-star-rating__radio';
    this.inputClass = '.js-star-rating__input';
    this.starClassList = 'star-rating__icon star-rating__icon_disable';
  }

  setStarValue() {
    this.starFill = 'star';
    this.starBorder = 'star_border';
    this.attrDate = 'data-rate';
  }

  findStar() {
    this.$star = $('.js-star-rating');
  }

  init() {
    this.$star.each((i, el) => {
      el.classList.add(`js-rate-${i}`);
      this.rateInput(`.js-rate-${i}`);
      this.starRateLaunch(`.js-rate-${i}`);
    });
  }

  starRateLaunch(selector) {
    const $child = $(selector).children(this.radioClass);
    const rating = $(selector).attr(this.attrDate);
    const florRating = Math.floor(rating); // rate cell
    const num = Math.round((rating % 1) * 100); // width
    const stars = [];

    $child.each((_, el) => {
      stars.push(el.querySelector(this.starClass));
    });

    stars.forEach((el) => {
      // eslint-disable-next-line no-param-reassign
      el.textContent = this.starBorder;
    });

    [...Array(florRating).keys()].forEach((i) => {
      stars[i].textContent = this.starFill;
      stars[i].style.width = '100%';
    });

    if (num) {
      const $starLastActive = stars[florRating];
      $starLastActive.textContent = this.starFill;
      $starLastActive.style.width = `${num}%`;
      $starLastActive.classList.add(this.activeClass);

      if (!$child[florRating].querySelector(this.disableClass)) {
        const star = document.createElement('i');
        star.classList = this.starClassList;
        star.textContent = this.starBorder;
        $starLastActive.after(star);
      }
    }
  }

  rateInput(selector) {
    const $input = $(selector).find(this.inputClass);
    $input.each((_, el) => {
      el.addEventListener('click', this.makeStarRateHandler(selector));
    });
  }

  makeStarRateHandler(selector) {
    let rate;
    return (event) => {
      rate = event.currentTarget.value;
      $(selector).attr(this.attrDate, rate);
      $(selector).data().rate = rate;
      this.starRateLaunch(selector);
    };
  }
}

export default StarRating;
