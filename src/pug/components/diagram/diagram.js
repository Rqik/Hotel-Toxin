$(() => {
  $('.legend-el ').each(diagramMove);

  const unitsList = $('.unit');
  function diagramMove(i) {
    $(this).on('mouseover', () => {
      unitsList[i].classList.add('hovered');
    });

    $(this).on('mouseout', () => {
      unitsList[i].classList.remove('hovered');
    });
  }
});
