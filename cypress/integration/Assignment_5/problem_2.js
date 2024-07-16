//Fetch the 4th row 3rd column value from 1st table, 
//Fetch the 2nd row last column value from the 2nd table.
describe('WebTable', () => {
    it('Test Script of table 1', () => {
        cy.visit('https://the-internet.herokuapp.com/tables')
        
    });

    it('Test Script of table 2', () => {
        cy.visit('https://the-internet.herokuapp.com/tables')

    });
});
