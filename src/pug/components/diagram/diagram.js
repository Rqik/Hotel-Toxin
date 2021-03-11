$(() => {
  const $legendEl = $('.js-legend-el ');

  $legendEl.each(diagramMove);

  const unitsList = $('.js-unit');
  function diagramMove(i) {
    $(this).on('mouseover', () => {
      unitsList[i].classList.add('hovered');
    });

    $(this).on('mouseout', () => {
      unitsList[i].classList.remove('hovered');
    });
  }
});
