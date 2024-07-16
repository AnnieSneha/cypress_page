//From the following webpage apply wait till Hello World is displayed:
describe('Hello World', () => {
    it('Test Script 1', () => {

        cy.visit('https://the-internet.herokuapp.com/dynamic_loading/1')
         //To display Hello world
         cy.get('div[id="start"]').click();
         cy.get('#finish').should('not.be.visible');
    });
});