/* eslint-disable no-undef */
module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
    'plugin:jsx-a11y/recommended',
  ],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', 'import', 'simple-import-sort', 'react-hooks', 'jsx-a11y'],
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
  rules: {
    'prettier/prettier': ['error'],
    'consistent-return': ['error'],
    'import/no-duplicates': ['error'],
    'import/no-unresolved': ['error'],
    'import/no-named-as-default': ['error'],
    'import/order': 'off',
    'lines-between-class-members': ['error'],
    'no-console': ['error'],
    'no-else-return': ['error'],
    'no-lonely-if': ['error'],
    'no-nested-ternary': ['error'],
    'no-param-reassign': ['warn'],
    'no-restricted-syntax': ['warn'],
    'no-unused-expressions': ['error'],
    'no-unused-vars': 'off',
    'object-shorthand': ['error'],
    'padding-line-between-statements': [
      'error',
      { blankLine: 'always', prev: '*', next: 'return' },
      { blankLine: 'always', prev: '*', next: 'function' },
    ],
    'prefer-const': ['error'],
    'prefer-template': ['error'],
    'react/no-array-index-key': ['warn'],
    'react/jsx-boolean-value': ['error'],
    'react/jsx-wrap-multilines': ['error'],
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'sort-imports': 'off',
    'simple-import-sort/sort': [
      'error',
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
