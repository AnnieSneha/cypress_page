import {Given,When,And,Then } from "cypress-cucumber-preprocessor/steps" 
//it should be the same as given,when,then,and
Given('user opens the Simple form url',()=>{
    cy.visit('https://v1.training-support.net/selenium/simple-form')

})

When('user enters firstname,lastname,email,message',()=>{

    cy.get('#firstName').type("Annie");
    cy.get('#lastName').type("Sneha");
    cy.get('#email').type('anniesneha14@gmail.com')
    cy.get('#number').type('6362895741')
    cy.xpath("//textarea").type("Hello")
   //==>// for only tagname

})
And('clicks on submit',()=>{
     cy.get('input[type="submit"]').click()  

})

Then('An alert saying successful message has to be displayed',()=>{

    cy.on('window:alert',(alertmsg)=>{

        expect(alertmsg).to.equal('Thank You for reaching out to us, Annie sneha')
        return true;
    })
    
})

