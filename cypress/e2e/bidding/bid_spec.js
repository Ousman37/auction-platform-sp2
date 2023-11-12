describe('Bidding Functionality', () => {
    it('allows a user to place a bid on a listing', () => {
      cy.login()
      cy.listingPage() // Assuming you have a command to navigate to a listing
      cy.get('input[name=bidAmount]').type('100')
      cy.get('button[type=submit]').click()
      cy.contains('Bid placed successfully')
    })
  })
  