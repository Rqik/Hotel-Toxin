class Diagram {
  constructor() {
    this.$legendEl = $('.js-legend-el ');
    this.$unitsList = $('.js-unit');
  }

  init() {
    this.$legendEl.each((i, el) => this.diagramMove(el, this.$unitsList[i]));
  }

  diagramMove(el, itm) {
    $(el).on('mouseover', () => this.addHovered(itm));
    $(el).on('mouseout', () => this.removeHovered(itm));
  }

  static addHovered(el) {
    el.classList.add('hovered');
  }

  static removeHovered(el) {
    el.classList.remove('hovered');
  }
}

export { Diagram };
