$(document).ready(() => {
  const buttonLike = document.querySelectorAll('.button_like');
  buttonLike.forEach((el) => {
    el.addEventListener('click', (e) => {
      const span = e.currentTarget.querySelector('span');
      const active = e.currentTarget.classList.toggle('button_like-active');
      if (active) {
        e.currentTarget.classList.add('button_like-active');
        e.currentTarget.firstElementChild.textContent = 'favorite';
        span.textContent = +span.textContent + 1;
        return;
      }
      e.currentTarget.classList.remove('button_like-active');
      e.currentTarget.firstElementChild.textContent = 'favorite_border';
      span.textContent = +span.textContent - 1;
    });
  });
});
