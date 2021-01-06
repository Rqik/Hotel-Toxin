$(() => {
    // ratind
    $('.rate').each(
      (i, el) => {
        el.classList.add(`rate-${i}`)
        rate_input(`.rate-${i}`)
        rate_instal(`.rate-${i}`)
      }
    )

    function rate_instal(selector) {
      let rating = $(selector).data().rate
      let flor_rating = Math.floor(rating) // rate cell
      let num = Math.round((rating % 1) * 100) // width 
      let child = $(selector).children('label')
      for (let i = 0; i < child.length; i++) {
        child[i].querySelector('i').textContent = 'star_border'
      }

      for (let i = 0; i < flor_rating; ++i) {
        child[i].querySelector('i').textContent = 'star'
        child[i].querySelector('i').style.width = '100%'
      }

      if (num) {

        let rating_last = child[flor_rating].querySelector('i')
        rating_last.textContent = 'star'
        rating_last.style.width = `${num}%`
        rating_last.classList.add('star')

        if (!child[flor_rating].querySelector('.star_border')) {
          let el = document.createElement('i')
          el.classList = 'material-icons star_border'
          el.textContent = 'star_border'
          rating_last.after(el)
        }

      }
    }

    function rate_input(selector) {
      let input = $(selector).find('input')

      input.each((i, el) => {

        el.addEventListener('click', () => {
          $(selector).attr('data-rate', el.value)
          $(selector).data().rate = el.value
          rate_instal(selector)
        })

      })
    }
  }
)