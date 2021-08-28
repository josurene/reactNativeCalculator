module.exports = {
  root: true,
  env: {
    es6: true,
    node: true,
    jest: true,
  },
  parser: '@typescript-eslint/parser',
  plugins: ['react', 'react-hooks', 'prettier', '@typescript-eslint'],
  parserOptions: {
    project: './tsconfig.json',
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'plugin:react/recommended',
    '@react-native-community'
  ],
  rules: {
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    '@typescript-eslint/no-shadow': ['error'],
    'linebreak-style': ['error', 'unix'],
    'no-empty-function': 'off',
    'react/display-name': 'off',
    'react/prop-types': 'off',
    indent: ['error', 4, {SwitchCase: 1}],
    quotes: ['error', 'single', {avoidEscape: true}],
    semi: 'off',
    "no-use-before-define": "off",
    "@typescript-eslint/no-use-before-define": ["error"],
    'prettier/prettier': 0,
    "no-undef": "off",
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
