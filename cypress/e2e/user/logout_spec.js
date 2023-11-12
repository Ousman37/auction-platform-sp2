describe('Logout Functionality', () => {
    it('successfully logs out', () => {
      // assuming you have a login command set up
      cy.login()
      cy.visit('/dashboard')
      cy.get('#logoutButton').click()
      cy.url().should('include', '/login')
    })
  })
  