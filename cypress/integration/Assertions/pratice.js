
describe('Practice tests', () => {
    it('test1-URL assertions', () => {

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        
        //to check url is not proper or not(Asserting URL to check the endpoint(automation practice))
        cy.url().should('include','AutomationPractice')

        //assert the title of web page >>right click inspect >>click on header
        // or ctrl f,,type //title
        cy.title().should('include','Practice Page')
        
        //assert the visiblity of the below textbox

        cy.get('[name="show-hide"]').should('be.visible')                               //#show-textbox
        
        //Assert to check whether an element is invisble(perform operations)
        cy.get('#hide-textbox').click()
        cy.get('[name="show-hide"]').should('not.be.visible')

        

        //This will type the value and assert the value
        cy.get(".ui-autocomplete-input").type("Wednesday").should('have.value','Wednesday')

        //Asserting whether checkbox has been checked
        cy.xpath('//*[@id="checkBoxOption1"]').check().should('be.checked')
        cy.xpath('//*[@id="checkBoxOption2"]').check().should('be.checked')
        cy.xpath('//*[@id="checkBoxOption3"]').check().should('be.checked')
        
        cy.xpath('//*[@id="checkBoxOption3"]').uncheck().should('not.be.checked')

    });
});