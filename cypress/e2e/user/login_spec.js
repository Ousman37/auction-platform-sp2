describe('Login Functionality', () => {
    it('successfully logs in', () => {
      cy.visit('/login')
      cy.get('input[name=email]').type('unique.email@stud.noroff.no')
      cy.get('input[name=password]').type('UzI1NiIsInR5cCI{enter}')
      cy.url().should('include', '/dashboard')
    })
  })
  