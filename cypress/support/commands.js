Cypress.Commands.add('login', () => {
    cy.visit('/login')
    cy.get('input[name=email]').type('unique.email@stud.noroff.no')
    cy.get('input[name=password]').type('UzI1NiIsInR5cCI')
    cy.get('form').submit()
  })
  