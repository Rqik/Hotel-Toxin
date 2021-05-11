class Diagram {
  constructor() {
    this.$legendEl = $('.js-legend-el ');
    this.$votes = $('.js-votes');
    this.$unitsList = $('.js-unit');
    this.$numberList = $('.js-number');
    this.hoverClass = 'diagram__hovered';
    this.hideNumberClass = 'diagram__chart-number_hidden';
  }

  init() {
    this.$legendEl.each((i, el) => {
      this.diagramMove(el, i);
    });
  }

  diagramMove(el, i) {
    $(el)
      .on('mouseover', this.makeAddHovered(i).bind(this));
    $(el)
      .on('mouseout', this.makeRemoveHovered(i).bind(this));
  }

  makeAddHovered(i) {
    return () => {
      this.$votes.addClass(this.hideNumberClass);
      this.$numberList[i].classList.remove(this.hideNumberClass);
      this.$unitsList[i].classList.add(this.hoverClass);
    };
  }

  makeRemoveHovered(i) {
    return () => {
      this.$votes.removeClass(this.hideNumberClass);
      this.$numberList[i].classList.add(this.hideNumberClass);
      this.$unitsList[i].classList.remove(this.hoverClass);
    };
  }
}

export { Diagram };
