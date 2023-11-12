describe('User Listings', () => {
    it('displays listings created by the user', () => {
      cy.login()
      cy.visit('/mylistings')
      cy.contains('Your Listings')
    })
  })
  