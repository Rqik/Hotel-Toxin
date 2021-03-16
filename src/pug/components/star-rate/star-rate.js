$(() => {
  $('.rate').each((i, el) => {
    el.classList.add(`rate-${i}`);
    rateInput(`.rate-${i}`);
    rateInstall(`.rate-${i}`);
  });

  function rateInstall(selector) {
    const rating = $(selector).data().rate;
    const florRating = Math.floor(rating); // rate cell
    const num = Math.round((rating % 1) * 100); // width
    const child = $(selector).children('label');
    for (let i = 0; i < child.length; i += 1) {
      child[i].querySelector('i').textContent = 'star_border';
    }

    for (let i = 0; i < florRating; i += 1) {
      child[i].querySelector('i').textContent = 'star';
      child[i].querySelector('i').style.width = '100%';
    }

    if (num) {
      const ratingLast = child[florRating].querySelector('i');
      ratingLast.textContent = 'star';
      ratingLast.style.width = `${num}%`;
      ratingLast.classList.add('star');

      if (!child[florRating].querySelector('.star_border')) {
        const el = document.createElement('i');
        el.classList = 'material-icons star_border';
        el.textContent = 'star_border';
        ratingLast.after(el);
      }
    }
  }

  function rateInput(selector) {
    const input = $(selector).find('input');

    input.each((i, el) => {
      el.addEventListener('click', () => {
        $(selector).attr('data-rate', el.value);
        $(selector).data().rate = el.value;
        rateInstall(selector);
      });
    });
  }
});
