// Example content of e2e.js
import './commands'

// This is an example of adding a global beforeEach hook
beforeEach(() => {
  // Runs before every test block
  cy.log('Global beforeEach hook from support/e2e.js')
})

// You can put other global configurations here...
