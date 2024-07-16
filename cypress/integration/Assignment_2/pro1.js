describe('Assertions', () => {
    it('Test Cases on Assertions', () => {
        cy.visit("https://the-internet.herokuapp.com")

        //assert on title

        cy.title().should('include','The Internet')

        
    });
    it('Test Scprit 2', () => {

        cy.visit('https://the-internet.herokuapp.com/dynamic_loading/1')

        //assert on hidden element
        cy.get('div[id="start"]').click()
        cy.get('#finish').should('not.be.visible');

        
    });
})

