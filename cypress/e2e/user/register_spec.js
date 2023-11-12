describe('Registration Functionality', () => {
    it('registers a new user', () => {
      cy.visit('/register')
      cy.get('input[name=email]').type('unique.email@stud.noroff.no')
      cy.get('input[name=password]').type('UzI1NiIsInR5cCI')
      cy.get('input[name=confirmPassword]').type('UzI1NiIsInR5cCI{enter}')
      cy.url().should('include', '/dashboard')
    })
  })
  