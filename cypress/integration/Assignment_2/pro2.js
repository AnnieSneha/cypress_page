describe('Perform Action On the Selected', () => {
    it('test script', () => {
        cy.visit("http://automationpractice.com/index.php")
        cy.get('a[href="https://www.inmotionhosting.com"]').click() 
        //
        cy.origin('https://www.inmotionhosting.com', () => {
        cy.get("#wordpressDropDown").find('WordPress on cPanel').then($link=>{
            cy.wrap($link).click();
        })
    
       

        })
        
    });
});


     