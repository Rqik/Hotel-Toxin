class Diagram {
  constructor() {
    this.$legendEl = $('.js-legend-el ');
    this.$unitsList = $('.js-unit');
  }

  init() {
    this.$legendEl.each((i, el) => Diagram.diagramMove(el, this.$unitsList[i]));
  }

  static diagramMove(el, itm) {
    $(el)
      .on('mouseover', Diagram.makeAddHovered(itm));
    $(el)
      .on('mouseout', Diagram.makeRemoveHovered(itm));
  }

  static makeAddHovered(el) {
    return () => {
      el.classList.add('hovered');
    };
  }

  static makeRemoveHovered(el) {
    return () => {
      el.classList.remove('hovered');
    };
  }
}

export { Diagram };
