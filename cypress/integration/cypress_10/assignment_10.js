///<reference types="cypress"/>
///<reference types="@cypress/xpath" />



// const { it } = require("mocha");

describe('letskodeit', () => {
    it('Test Cases on Radio button', () => {
        cy.visit("https://www.letskodeit.com/practice")
        cy.xpath('//input[@id="bmwradio"]').check().should('be.visible').and('be.checked')
        cy.xpath('//input[@id="benzradio"]').check().should('be.visible').and('be.checked').and('have.attr','type','radio')
        cy.xpath('//input[@id="hondaradio"]').check().should('be.visible').and('be.checked').and('have.attr','type','radio')
    });
    it('Test Cases on CheckBox button', () => {
        cy.visit("https://www.letskodeit.com/practice")
        cy.xpath("//input[@type='checkbox' and @value='bmw']").check().should('be.visible').and('be.checked');
        cy.xpath('//input[@id="benzcheck"]').check().should('be.visible').and('be.checked')
        cy.xpath('//input[@id="hondacheck"]').check().should('be.visible').and('be.checked')
    });
    it('Test Cases on Window Switch', () => {
        cy.visit("https://www.letskodeit.com/practice")
        cy.xpath('//button[@id="openwindow"]').invoke('remove','onclick').click()    /***************/
        cy.visit("https://www.letskodeit.com/courses",()=>{
            
            
            cy.contains("All Courses").click()
            cy.wait(2000)
        })
        cy.visit("https://www.letskodeit.com/practice")
    });
    it('Test cases on multiple Tabs', () => {
        cy.visit("https://www.letskodeit.com/practice")
        cy.get('#opentab').invoke('remove','target').click()
        cy.visit('https://www.letskodeit.com/courses' ,()=>{

            cy.contains("All Courses").click()
            cy.wait(2000)
            
        })
       
        cy.visit("https://www.letskodeit.com/practice")
    });

    it('Drop Down', () => {

        cy.visit("https://www.letskodeit.com/practice")
        cy.get('#carselect').select('bmw').should('have.value','bmw')  //
        cy.get("#carselect").select('benz').should('have.value','benz')
        cy.get('#carselect').select('honda').should('have.value','honda')
         //  cy.get('#dropdown-class-example').select('').should('have.value','')

    });
    it('Hide and Show', () => {
        cy.visit("https://www.letskodeit.com/practice")
        cy.get('#show-textbox').should('be.visible');
        cy.get('#hide-textbox').click();
        cy.wait(2000)
        cy.get('#displayed-text').should('not.be.visible')     //text box be careful        /*********************** */
    });
    it('Alert and Confirm', () => {
        cy.visit("https://www.letskodeit.com/practice")
        cy.xpath('//input[@name="enter-name"]')
        cy.get('#alertbtn').click()
        cy.on('window:alert',(alertmsg)=>{                         /***********************see the bracket of window alert */
            expect(alertmsg).to.equal('Hello , share this practice page and share your knowledge')
            return true;
        })
        cy.get('#confirmbtn').click()
        cy.on('window:confirm',(confrmsg)=>{
            expect(confrmsg).to.equal('Hello , Are you sure you want to confirm?')
            return false;
        })

    });
    it('Mouse Over', () => {
        cy.visit("https://www.letskodeit.com/practice")
        cy.wait(8000);
        cy.get('#mousehover').invoke('show')
        cy.contains('Top').click({force:true})
    });
    it('Table', () => {
        cy.visit("https://www.letskodeit.com/practice")
        cy.wait(7000)
        cy.xpath('//table[@name="courses"]/tbody/tr[3]/td[2]').should('include.text','Python Programming Language').click()
    });
        
});

       
       
   