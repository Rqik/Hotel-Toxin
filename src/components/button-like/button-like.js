class ButtonLike {
  constructor() {
    this.buttonLike = document.querySelectorAll('.js-button-like');
  }

  init() {
    this.buttonLike.forEach(ButtonLike.eventHandler);
  }

  static eventHandler(el) {
    el.addEventListener('click', ButtonLike.toggleClass);
  }

  static toggleClass(e) {
    const span = e.currentTarget.querySelector('.js-button-like__text');
    const active = e.currentTarget.classList.toggle('button-like_active');
    if (active) {
      e.currentTarget.firstElementChild.textContent = 'favorite';
      span.textContent = +span.textContent + 1;
      return;
    }
    e.currentTarget.classList.remove('button-like_active');
    e.currentTarget.firstElementChild.textContent = 'favorite_border';
    span.textContent = +span.textContent - 1;
  }
}

export { ButtonLike };
