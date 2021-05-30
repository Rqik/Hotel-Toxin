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
    const text = el.querySelector(this.textSelector);

    el.addEventListener('click', this.makeToggleClass(text));
  }

  @boundMethod
  makeToggleClass(element) {
    const text = element;
    return (event) => {
      const target = event.currentTarget;
      const span = element.textContent;
      const active = target.classList.toggle(this.toggleSelector);
      if (active) {
        target.firstElementChild.textContent = 'favorite';
        text.textContent = Number(span) + 1;
        return;
      }
      target.classList.remove(this.toggleSelector);
      target.firstElementChild.textContent = 'favorite_border';
      text.textContent = Number(span) - 1;
    };
  }
}

export { ButtonLike };
