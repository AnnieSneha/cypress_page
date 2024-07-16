describe('', () => {

    it('Verify the title', () => {
        cy.visit('https://books.toscrape.com/')
        cy.title().should('include','Books to Scrape')
       
    });
    it('test cases 2', () => {
        cy.visit('https://books.toscrape.com/')
        cy.get('ul > :nth-child(12)').click()
        
    });
    it('test cases 3', () => {
        cy.visit('https://books.toscrape.com/')
        cy.get('[title="A Light in the Attic"]').click()
        
    });
});
