const js = require('@eslint/js')
const globals = require('globals')
const react = require('eslint-plugin-react')
const reactHooks = require('eslint-plugin-react-hooks')
const jsxA11y = require('eslint-plugin-jsx-a11y')
const importPlugin = require('eslint-plugin-import')
const simpleImportSort = require('eslint-plugin-simple-import-sort')
const prettierRecommended = require('eslint-plugin-prettier/recommended')

module.exports = [
  {
    ignores: ['.next/**', 'node_modules/**', 'public/**'],
  },
  js.configs.recommended,
  react.configs.flat.recommended,
  react.configs.flat['jsx-runtime'],
  prettierRecommended,
  {
    plugins: {
      import: importPlugin,
      'simple-import-sort': simpleImportSort,
      'react-hooks': reactHooks,
      'jsx-a11y': jsxA11y,
    },
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: 'module',
      globals: {
        ...globals.browser,
      },
    },
    settings: {
      react: {
        version: 'detect',
      },
      'import/resolver': {
        typescript: {
          alwaysTryTypes: true,
        },
      },
    },
    rules: {
      ...jsxA11y.configs.recommended.rules,
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
      // Allow styled-jsx's `<style jsx>` / `<style jsx global>` attributes.
      'react/no-unknown-property': ['error', { ignore: ['jsx', 'global'] }],
      'react/prop-types': 'off',
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
      'sort-imports': 'off',
      'simple-import-sort/imports': [
        'error',
        {
          groups: [
            // Node.js builtins. You could also generate this regex if you use a `.js` config.
            [`^(${require('module').builtinModules.join('|')})(/|$)`],
            // Packages. `react` related packages come first.
            ['^react', '^@?\\w'],
            // Root imports with the `~/` alias (see jsconfig.json).
            // Parent imports. Put `..` last.
            // Other relative imports. Put same-folder imports and `.` last.
            ['^~/', '^\\.\\.(?!/?$)', '^\\.\\./?$', '^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
            // Side effect imports.
            ['^\\u0000'],
          ],
        },
      ],
    },
  },
  {
    files: ['eslint.config.js', 'postcss.config.js', 'tailwind.config.js'],
    languageOptions: {
      globals: {
        ...globals.node,
      },
    },
  },
]
