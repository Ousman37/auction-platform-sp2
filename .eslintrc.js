module.exports = {
  env: {
    browser: true,
    es2021: true,
    'cypress/globals': true, // Add this line for Cypress globals
  },
  extends: [
    'eslint:recommended',
    'plugin:cypress/recommended' // Add this line to extend cypress recommended rules
  ],
  overrides: [
    {
      env: {
        node: true,
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    // ... your other rules
  },
  globals: {
    toastr: 'readonly',
    // ... any other globals you have
  },
  plugins: [
    'cypress' // Add this line to include the cypress plugin
  ]
}
