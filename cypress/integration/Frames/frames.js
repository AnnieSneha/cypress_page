///<reference types="cypress"/>
////<reference types="@cypress/xpath" />
describe('Handling Frames', () => {
    it('Frames', () => {

     cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
     
     //Step1--load the frame with Locator for the frame using frameloadd method 
     cy.frameLoaded('#courses-iframe');

     //Step--to interact with elements inside the frame we use iframe()

     cy.iframe().contains('Blog').click()

    });
    
});