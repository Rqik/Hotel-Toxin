import { boundMethod } from 'autobind-decorator';

class CardSlider {
  constructor() {
    this.setDefaultClassName();
    this.findCardElement();
  }

  setDefaultClassName() {
    this.isRatedDate = 'data-is-rated';
    this.cardReviewClassName = '.js-card-slider_review';
  }

  findCardElement() {
    this.$cardPrice = $('.js-card-slider_price');
    this.$cardRating = $('.js-star-rating');
  }

  init() {
    this.$cardPrice.each(CardSlider.localeText);
    this.$cardRating.on('click', this.handleChangeReviews);
  }

  static localeText(_, el) {
    // eslint-disable-next-line no-param-reassign
    el.textContent = el.textContent
      .toString()
      .replace(/(\d)(?=(\d{3}\D+)+$)/g, '$1 ');
  }

  @boundMethod
  handleChangeReviews(e) {
    const $target = $(e.currentTarget);
    if (!$target.attr(this.isRatedDate)) {
      $target.attr(this.isRatedDate, true);
      $target
        .next()
        .children(this.cardReviewClassName)
        .text((_, text) => Number(text) + 1);
    }
  }
}

export default CardSlider;
