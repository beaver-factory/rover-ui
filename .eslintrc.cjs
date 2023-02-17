module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-essential',
    'plugin:@typescript-eslint/recommended',
    'airbnb-base',
    'airbnb-typescript/base',
    'prettier',
  ],
  overrides: [],
  parser: 'vue-eslint-parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json',
    extraFileExtensions: ['.vue'],
    parser: "@typescript-eslint/parser"
  },
  plugins: ['vue', '@typescript-eslint'],
  rules: {"vue/multi-word-component-names": 0, "@typescript-eslint/no-unused-vars": 1, "vue/no-setup-props-destructure": 1},
  ignorePatterns: ['vite.config.ts'],
}
