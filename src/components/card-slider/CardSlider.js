import { boundMethod } from 'autobind-decorator';

class CardSlider {
  constructor() {
    this.isRatedDate = 'data-is-rated';
    this.cardReviewClassName = '.js-card-slider_review';
    this.$cardPrice = $('.js-card-slider_price');
    this.$cardReview = $(this.cardReviewClassName);
    this.$cardRating = $('.js-star-rating');
  }

  init() {
    this.$cardPrice.each((_, e) => {
      e.textContent = e.textContent
        .toString()
        .replace(/(\d)(?=(\d{3}\D+)+$)/g, '$1 ');
    });
    this.$cardRating.on('click', this.changeReviews);
  }

  @boundMethod
  changeReviews(e) {
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

export { CardSlider };
