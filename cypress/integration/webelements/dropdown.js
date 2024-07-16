describe('Dropdown tests', () => {
    it('test1=selected by value', () => {

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
         //first we need to handle dropdown using value attribute
        cy.get('#dropdown-class-example').select('option2').should('have.value','option2')

        cy.get('#dropdown-class-example').select('option1').should('have.value','option1')

        cy.get('#dropdown-class-example').select('option3').should('have.value','option3')
                   //use select tag
        cy.get('#dropdown-class-example').select('').should('have.value','') //select doesnt have any value
    });

    //another way to handle dropdown
    it('test2=using text', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
         //first we need to handle dropdown using value attribute
        cy.get('#dropdown-class-example').select('Option2').should('have.value','option2')

        cy.get('#dropdown-class-example').select('Option1').should('have.value','option1')

        cy.get('#dropdown-class-example').select('Option3').should('have.value','option3')
                   //use select tag
        cy.get('#dropdown-class-example').select('').should('have.value','') 
    });
    it('test3=using index', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        //first we need to handle dropdown using value attribute
       cy.get('#dropdown-class-example').select(2).should('have.value','option2')

       cy.get('#dropdown-class-example').select(1).should('have.value','option1')

       cy.get('#dropdown-class-example').select(3).should('have.value','option3')
                  
       cy.get('#dropdown-class-example').select(0).should('have.value','') //select d

        
    });
    
});