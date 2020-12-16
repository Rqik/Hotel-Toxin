var $ = require('jquery')

$(document).ready(
  () => {
    $('.checkbox__expan')
      .each(function(i, el)  {
        
        $(this).on('click', function (e) {
          
          e.preventDefault
          
         if ( e.target == e.currentTarget){
            $(this).toggleClass('exp_active')
           $(this).children('.checkbox__items').slideToggle(300)
           
          } 
           
          })

      }
    )
  }
)


