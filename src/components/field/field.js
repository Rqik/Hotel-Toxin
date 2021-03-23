import 'jquery-mask-plugin';

class Field {
  static init() {
    $('.js-field_text[name*=email]')
      .mask('A', {
        translation: {
          A: {
            pattern: /[\w@\-.+]/,
            recursive: true,
          },
        },
      });
    $('.js-field_text[name*=name]')
      .mask('A', {
        translation: {
          A: {
            pattern: /[\w+]/,
            recursive: true,
          },
        },
      });
    $('.js-field_text[name*=date]')
      .mask('00.00.0000');
  }
}

export { Field };
