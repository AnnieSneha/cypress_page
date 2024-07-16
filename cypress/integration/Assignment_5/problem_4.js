//Handle all the alerts in: https://the-internet.herokuapp.com/javascript_alerts 
describe('Alerts', () => {
    it('Test Scripts on Alert', () => {
        cy.visit(" https://the-internet.herokuapp.com/javascript_alerts ")
        cy.xpath('//button[@onclick="jsAlert()"]').click()
        cy.on('window:alert',(alertmsg)=>{

            expect(alertmsg).to.equal('I am a JS Alert')
            
            return true;
    }) 
    cy.xpath('//button[@onclick="jsConfirm()"]').click()
        cy.on('window:confirm',(confirmsg)=>{

            expect(confirmsg).to.equal('I am a JS Confirm')
            
            return true;
    }) 
    cy.xpath('//button[@onclick="jsPrompt()"]').click()
        cy.on('window:prompt',(promptmsg)=>{

            expect(promptmsg).to.equal('I am a JS prompt').type("Hello")
            
            return true;
    }) 
        

        
    });
});
          
        
