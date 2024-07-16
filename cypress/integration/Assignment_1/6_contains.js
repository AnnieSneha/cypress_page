describe('Big Basket ', () => {

    it('Test Scripts', () => {

        cy.visit("https://www.bigbasket.com/")

        cy.xpath("//h3[contains(text(),'Capsicum - Green (Loose)')]")
       
        cy.xpath("//h3[contains(text(),'Carrot - Orange (Loose)')]")

        cy.xpath("//h3[contains(text(),'Cauliflower')]")

        cy.xpath("//h3[contains(text(),'Onion')]")

        cy.xpath("//h3[contains(text(),'Potato')]")
    });
    
});