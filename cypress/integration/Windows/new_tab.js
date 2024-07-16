///<reference types="cypress"/>
////<reference types="@cypress/xpath" />
describe('Windows and tabs', () => {
    it('tab test', () => {

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
         //invoke() is used to remove attribute

        cy.xpath("//*[.='Open Tab']").invoke('removeAttr','target').click()

        //origin()==>when we work on diff URL
        
        
        cy.origin("https://www.qaclickacademy.com/",()=>{
        //whatever actions that I have to perform in this url
        //that code I am going to write in this function
        cy.visit("")
        cy.contains("Access all our Courses").click();  

        })
    });
    it('Window', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

        cy.xpath("//*[.='Open Window']").invoke('removeAttr','onclick').click()
        
        cy.origin("https://www.qaclickacademy.com/",()=>{
            
            cy.visit("")
            cy.contains("Access all our Courses").click();
            cy.wait(2000)
            
        })
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')//back to the parent tab
        

    });


});