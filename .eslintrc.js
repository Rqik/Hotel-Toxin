module.exports = {
  env: {
    browser: true,
    es6: true,
    jquery: true,
  },
  extends: ['airbnb-base', 'plugin:import/recommended'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: '@babel/eslint-parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  settings: {
    'import/resolver': {
      webpack: {
        config: 'webpack.config.js',
      },
    },
  },

  plugins: ['pug', 'prettier'],
  rules: {
    'object-curly-newline': 'off',
    'max-classes-per-file': 'off',
    'linebreak-style': ['error', 'unix'],
    'import/prefer-default-export': 'off',
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    'no-use-before-define': 'off',
  },
};
