module.exports = {
  extends: ['airbnb', 'plugin:prettier/recommended'],
  parser: 'babel-eslint',
  env: {
    jest: true,
    browser: true,
    node: true,
  },
  globals: {
    __DEV__: true,
    Promise: true,
  },
  settings: {
    'import/resolver': {
      'babel-plugin-root-import': [
        {
          rootPathPrefix: '~',
          rootPathSuffix: './',
        },
      ],
    },
  },
  plugins: ['babel', 'prettier', 'react', 'react-hooks', 'simple-import-sort'],
  rules: {
    'prettier/prettier': 'error',
    curly: ['error', 'all'],
    'spaced-comment': [2, 'always'],
    'no-use-before-define': 0,
    'no-unused-vars': 'error',
    'import/no-extraneous-dependencies': 0,
    'one-var': [2, { uninitialized: 'always', initialized: 'never' }],
    'import/prefer-default-export': 'off',
    'babel/new-cap': 1,
    'object-curly-newline': 0,
    'operator-linebreak': 0,
    'one-var-declaration-per-line': 0,
    'prefer-destructuring': [0, { object: true, array: false }],
    'padding-line-between-statements': [
      'error',
      { blankLine: 'always', prev: '*', next: 'return' },
      { blankLine: 'always', prev: '*', next: 'function' },
      { blankLine: 'always', prev: 'import', next: '*' },
      { blankLine: 'any', prev: 'import', next: 'import' },
    ],
    'no-console': 'error',

    'react/no-did-update-set-state': 0,
    'react/button-has-type': 0,
    'react/jsx-uses-react': 2,
    'react/jsx-uses-vars': 2,
    'react/jsx-one-expression-per-line': 0,
    'react/jsx-filename-extension': 0,
    'react/react-in-jsx-scope': 0,
    'react/prop-types': 2,
    'react/require-default-props': 0,
    'react/destructuring-assignment': [0, 'always'],
    'react/forbid-prop-types': 0,

    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',

    'jsx-a11y/label-has-associated-control': 0,
    'jsx-a11y/label-has-for': 0,
    'jsx-a11y/anchor-is-valid': 0,
    'jsx-a11y/alt-text': 0,
    'simple-import-sort/sort': [
      'warn',
      {
        groups: [
          // Node.js builtins. You could also generate this regex if you use a `.js` config.
          [`^(${require('module').builtinModules.join('|')})(/|$)`],
          // Packages. `react` related packages come first.
          ['^react', '^@?\\w'],
          // Root imports with babel-plugin-root-import (~/).
          // Parent imports. Put `..` last.
          // Other relative imports. Put same-folder imports and `.` last.
          ['^~/', '^\\.\\.(?!/?$)', '^\\.\\./?$', '^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
          // Side effect imports.
          ['^\\u0000'],
        ],
      },
    ],
  },
}
