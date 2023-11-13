module.exports = {
  
  env: {
    browser: true,
    es2021: true,
    'cypress/globals': true, // Add this line for Cypress globals
    node: true, // Add this line to recognize Node.js global variables and scope
  },
  extends: [
    'eslint:recommended',
    'plugin:cypress/recommended' // Add this line to extend cypress recommended rules
  ],
  overrides: [
    {
      env: {
        node: true,
        jest: true, 
      },
      files: ['.eslintrc.{js,cjs}', '**/*.js'], // Apply this override to all JavaScript files and .eslintrc.js
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
};
