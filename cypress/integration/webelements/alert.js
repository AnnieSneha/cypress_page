///<reference types="cypress"/>
////<reference types="@cypress/xpath" />


describe('Alerts', () => {

    it('Test cases for alert and confirm', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')            //chaining===and
        
        cy.xpath('//input[@id="alertbtn"]').click()
        //alert the message
        cy.on('window:alert',(alertmsg)=>{

            expect(alertmsg).to.equal('Hello , share this practice page and share your knowledge')

            return true;//here,true will select ok button
        })

        //handle confirmation alert/Pop Up
        cy.get('#confirmbtn').click();

        cy.on('window:confirm',(msg)=>{
            expect(msg).to.equal('Hello , Are you sure you want to confirm?')

            return false;//it will check on cancel
        })


    });
});