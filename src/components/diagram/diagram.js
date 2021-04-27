class Diagram {
  constructor() {
    this.$legendEl = $('.js-legend-el ');
    this.$unitsList = $('.js-unit');
    this.hoverClass = 'diagram__hovered';
  }

  init() {
    this.$legendEl.each((i, el) => {
      this.diagramMove(el, this.$unitsList[i]);
    });
  }

  diagramMove(el, itm) {
    $(el)
      .on('mouseover', this.makeAddHovered(itm));
    $(el)
      .on('mouseout', this.makeRemoveHovered(itm));
  }

  makeAddHovered(el) {
    return () => {
      el.classList.add(this.hoverClass);
    };
  }

  makeRemoveHovered(el) {
    return () => {
      el.classList.remove(this.hoverClass);
    };
  }
}

export { Diagram };
