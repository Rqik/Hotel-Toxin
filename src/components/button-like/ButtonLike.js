import { boundMethod } from 'autobind-decorator';

class ButtonLike {
  constructor() {
    this.buttonLike = document.querySelectorAll('.js-button-like');
    this.textSelector = '.js-button-like__text';
    this.toggleSelector = 'button-like_active';
  }

  init() {
    this.buttonLike.forEach(this.eventHandler);
  }

  @boundMethod
  eventHandler(el) {
    const text = el.querySelector(this.textSelector).textContent;
    el.addEventListener('click', this.makeToggleClass(text));
  }

  @boundMethod
  makeToggleClass(text) {
    let span = text;
    return (event) => {
      const element = event.currentTarget;
      const active = element.classList.toggle(this.toggleSelector);
      if (active) {
        element.firstElementChild.textContent = 'favorite';
        span = +span + 1;
        return;
      }
      element.classList.remove(this.toggleSelector);
      element.firstElementChild.textContent = 'favorite_border';
      span = +span - 1;
    };
  }
}

export { ButtonLike };
