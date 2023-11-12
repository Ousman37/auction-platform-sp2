describe('Profile Update', () => {
    it('allows a user to update their profile', () => {
      cy.login(); // Custom command to log in.
      cy.visit('/profile');
  
      // Chain the clear and type commands separately
      cy.get('input[name="username"]').clear();
      cy.get('input[name="username"]').type('newusername');
  
      cy.get('input[name="bio"]').clear();
      cy.get('input[name="bio"]').type('New bio here');
  
      // Submit the form
      cy.get('button[type="submit"]').click();
  
      // Assert that the profile was updated
      cy.contains('Profile updated successfully');
  
      // Additional assertions can be added here as needed
    });
  });
  