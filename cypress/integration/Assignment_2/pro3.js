///<reference types="cypress"/>
////<reference types="@cypress/xpath" />


describe('Google', () => {
    it('Assertion on google', () => {

        cy.visit('https://www.google.com/')
        cy.get('[title="Search"]').type("Masai").should('include','Masai')
        
    });
});