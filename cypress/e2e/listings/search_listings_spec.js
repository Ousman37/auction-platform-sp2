describe('Search Listings', () => {
    it('allows a user to search for listings', () => {
      cy.visit('/listings')
      cy.get('input[name=search]').type('Vintage{enter}')
      cy.contains('Vintage')
    })
  })
  