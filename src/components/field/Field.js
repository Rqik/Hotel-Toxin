import 'jquery-mask-plugin';

class Field {
  static init() {
    $('.js-field__input[name*=email]').mask('A', {
      translation: {
        A: {
          pattern: /[\w@\-.+]/,
          recursive: true,
        },
      },
    });
    $('.js-field__input[name*=name]').mask('A', {
      translation: {
        A: {
          pattern: /[\w+]/,
          recursive: true,
        },
      },
    });
  }
}

export default Field;
