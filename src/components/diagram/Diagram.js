import { boundMethod } from 'autobind-decorator';

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
    this.$legendEl.each(this.diagramMove);
    this.$unitsList.each(this.diagramMove);
  }

  @boundMethod
  diagramMove(i, el) {
    $(el)
      .on(
        'mouseover', this.makeAddHovered(i),
      );
    $(el)
      .on('mouseout', this.makeRemoveHovered(i));
  }

  @boundMethod
  makeAddHovered(i) {
    return () => {
      this.$votes.addClass(this.hideNumberClass);
      this.$numberList[i].classList.remove(this.hideNumberClass);
      this.$unitsList[i].classList.add(this.hoverClass);
    };
  }

  @boundMethod
  makeRemoveHovered(i) {
    return () => {
      this.$votes.removeClass(this.hideNumberClass);
      this.$numberList[i].classList.add(this.hideNumberClass);
      this.$unitsList[i].classList.remove(this.hoverClass);
    };
  }
}

export { Diagram };
