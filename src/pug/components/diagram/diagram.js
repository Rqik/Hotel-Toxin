$(
  function () {
    let unitsList = $('.unit')
    console.log(unitsList)
    $(".legend-el ").each(function (i, el) {
      $(this).on('mouseover', function () {
        unitsList[i].classList.add('hovered')
        console.log(unitsList[i]);
      })

      $(this).on('mouseout', function () {
        unitsList[i].classList.remove('hovered')
      })
    })
  }

)