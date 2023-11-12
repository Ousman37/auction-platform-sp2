describe('View Bids', () => {
    it('allows a user to view bids on a listing', () => {
      cy.login()
      cy.createListing() // Assuming you have a command to create a listing
      cy.visit('/mylistings')
      cy.contains('View Bids').click()
      cy.url().should('include', '/bids')
    })
  })
  