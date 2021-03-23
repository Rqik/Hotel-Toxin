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
      .on('mouseover', () => Diagram.addHovered(itm));
    $(el)
      .on('mouseout', () => Diagram.removeHovered(itm));
  }

  static addHovered(el) {
    el.classList.add('hovered');
  }

  static removeHovered(el) {
    el.classList.remove('hovered');
  }
}

export { Diagram };
