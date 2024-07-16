describe('Google test cases', () => {
    it('Test on different browsers', () => {
        cy.visit('https://www.google.com/')
        cy.title().should('include','Google')
        
    });
});