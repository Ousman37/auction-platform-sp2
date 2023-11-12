describe('Create Listing', () => {
    it('allows a user to create a new listing', () => {
      cy.login()
      cy.visit('/listings/new')
      cy.get('input[name=title]').type('New Listing Title')
      cy.get('textarea[name=description]').type('Listing description here')
      cy.get('button[type=submit]').click()
      cy.contains('Listing created successfully')
    })
  })
  