module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['airbnb', 'airbnb/hooks'],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: { jsx: true }
  },
  rules: {
    'linebreak-style': 0,
    semi: [2, 'never'],
    eqeqeq: 0,
    'object-curly-newline': [2, { ObjectExpression: { multiline: true, minProperties: 6 }, ImportDeclaration: { multiline: true, minProperties: 5 } }],
    'no-use-before-define': 0,
    'import/no-unresolved': 0,
    'no-underscore-dangle': 0,
    'no-multiple-empty-lines': [2, { max: 2 }],
    'react/function-component-definition': 0,
    'operator-linebreak': [0, { overrides: { '?': 'ignore', ':': 'ignore' } }],
    'react/jsx-filename-extension': 0,
    'no-floating-decimal': 0,
    'react/jsx-no-useless-fragment': [0, { allowExpressions: true }],
    'react/jsx-wrap-multilines': 0,
    'jsx-quotes': [2, 'prefer-single'],
    'react/jsx-closing-bracket-location': 0,
    'react-hooks/exhaustive-deps': 0,
    'comma-dangle': 0,
    'react/prop-types': 0,
    'no-return-assign': 0,
    'no-unused-expressions': 0,
    'no-param-reassign': 0,
    'no-tabs': 0,
    indent: 0,
    'react/jsx-indent': 0,
    'react/jsx-indent-props': 0,
    'react/no-unstable-nested-components': [1, { allowAsProps: false }]
  }
}
