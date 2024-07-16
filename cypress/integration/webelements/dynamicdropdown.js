///<reference types="cypress"/>
describe('Dynamic Drop down', () => {
    it('drop down based on search', () => {

    cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

    cy.get('.ui-autocomplete-input').type('aus') //anything can be given here 
    //locator of the text when im writing
    
    //iterate over all the options,comapre the text and click on it

    cy.get('.ui-menu-item').each(($option)=>{

          //this is the location of the list that appears when something is written in text

    if($option.text()=='Australia'){ //we should make changes here as well

        cy.wrap($option).click();
    }


    })

        
    });

    it('Easy way of DD', () => {

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

        cy.get('#autocomplete').type('in')
        cy.get('.ui-menu-item').contains('Finland').click();
    });
});