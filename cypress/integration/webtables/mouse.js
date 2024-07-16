///<reference types="cypress"/>
////<reference types="@cypress/xpath" />
describe('Mouse handling', () => {
    it.skip('Right Click ', () => {
       cy.visit("https://demo.guru99.com/test/simple_context_menu.html")
       
       cy.xpath("//*[.='right click me']").rightclick();  // * is used instead of tagname
       cy.xpath('//ul[@class="context-menu-list context-menu-root"]').contains('Quit').click()
       cy.xpath('//button').dblclick();
    
    });
    it('Mouse Hover', () => {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
       //to mouse hover we need to call a speacial method
        //this will invoke the element and show what the element is contained
        cy.wait(7000)
        cy.get("#mousehover").invoke('show')
        
        //In cypress when an element is not clicking using only click()
        //we can tell cypress to click on it foreably
        cy.contains('Top').click({force:true}); 
        cy.url().should('include','top')//asserting


   
        
    });
    it('Mouse Hover2', () => {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
       //mouse hover an element
        //trigger is a method to work with your mouse actions
        cy.get("#mousehover").trigger('mouseover')
        
        
        cy.contains('Top').click({force:true}); 
        cy.url().should('include','top')//asserting


    });


});