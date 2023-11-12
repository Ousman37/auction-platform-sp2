describe('Auction Platform Home Page', () => {
    it('should load successfully', () => {
      // Visit the home page
      cy.visit('http://127.0.0.1:5500/index.html');
    
      // Check if the navbar exists
      cy.get('.navbar').should('exist');
    
      // Ensure the layer section is not only existing but also visible
      cy.get('.layer', { timeout: 10000 }).should('be.visible'); // waits up to 10 seconds
    
      // Check if the footer exists
      cy.get('footer').should('exist');
  
      // Check if the call-to-action button is visible
      cy.get('.btn-primary').should('be.visible').and('contain', 'View Auction Listings');
  
      // Check if the title is correct
      cy.title().should('eq', 'Auction Platform | Home');
    });
  });
  
  
 