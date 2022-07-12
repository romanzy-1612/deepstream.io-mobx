module.exports = {
  parser: '@typescript-eslint/parser',
  extends: ['@open-wc', 'prettier'],
  plugins: ['@typescript-eslint'],
  rules: {
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': ['off'],
    'import/no-unresolved': 'off',
    'import/extensions': [
      'error',
      'always',
      {
        ignorePackages: true,
      },
    ],
    eqeqeq: 'off',
    'no-console': 'off',
    'no-alert': 'off',
    'no-unreachable': 'off',
    'no-useless-constructor': 'warn',
    'prefer-destructuring': 'off',
    'lines-between-class-members': 'off',
    'class-methods-use-this': 'off',
    'dot-notation': 'off',
    'no-return-await': 'off',
    'max-classes-per-file': 'off',
    'wc/guard-super-call': 'off',
    'no-empty-function': 'off',
    'no-undef': 'off',
    'no-plusplus': 'off',
    'no-continue': 'off',
  },
};
