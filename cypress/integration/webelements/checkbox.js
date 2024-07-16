///<reference types="cypress"/>
////<reference types="@cypress/xpath" />


describe('Radio button', () => {

    it('Test cases using radio button', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')            //chaining===and

        cy.xpath("(//input[@class='radioButton'])[1]").check().should('be.visible').and('be.checked').and('have.attr','type','radio')
        
        cy.xpath("(//input[@class='radioButton'])[2]").check().should('be.visible').and('be.checked').and('have.attr','type','radio')

        cy.xpath("(//input[@class='radioButton'])[3]").check().should('be.visible').and('be.checked').and('have.attr','type','radio').and('have.attr','class','radioButton')


    });
    it('Checkbox', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')            //chaining===and

        //checking all the checkboxs at once.
        cy.xpath('//label/input[@type="checkbox"]').check().should('be.checked')
        cy.wait(1000);
        //unchecking at once
        cy.xpath('//label/input[@type="checkbox"]').uncheck().should('not.be.checked')

    });
    
});