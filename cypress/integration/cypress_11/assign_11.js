//const { it } = require("mocha");

describe('Validate', () => {
    it('Login', () => {
       cy.visit(' https://demo.openmrs.org/openmrs/login.htm');
       cy.get('input[name="username"]').type('admin');
       cy.get('input[name="password"]').type('Admin123');
       cy.get('li[id="Registration Desk"]').click()
       cy.get('input[type="submit"]').click()
    });
    it('Registration', () => {
        cy.get('i[class="icon-user"]').click()
        cy.get('input[name="givenName"]').type('Annie')
        cy.get('input[name="familyName"]').type('Ambani')
        cy.get('#next-button').click();
        cy.get('select[id="gender-field"]').select('Female')
        cy.get('#next-button').click();
        cy.get('')
    });
});