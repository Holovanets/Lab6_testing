module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:prettier/recommended'
  ],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': ['error', {
      'trailingComma': 'none',
      'tabWidth': 4,
      'useTabs': true,
      'semi': false,
      'singleQuote': true,
      'jsxSingleQuote': true,
      'arrowParens': 'avoid'
    }],
    // другие правила ESLint
  },
};
