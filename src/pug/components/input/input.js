import 'jquery-mask-plugin'
$(
  function () {
    $('.input_text_email').mask("A", {
      translation: {
        "A": { pattern: /[\w@\-.+]/, recursive: true }
      }
    })
    $('.input_text_name').mask("A", {
      translation: {
        "A": { pattern: /[\w+]/, recursive: true }
      }
    })
    $('.input_text_date').mask('00.00.0000')
  })