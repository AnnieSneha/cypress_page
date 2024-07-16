describe('Amazon', () => {
    it('test scripts', () => {

        cy.visit("https://www.amazon.com/")
        cy.xpath('(//a[@class="nav-a  "])[1]')
        cy.xpath('(//a[@class="nav-a  "])[2]')
        cy.xpath('(//a[@class="nav-a  "])[3]')
        cy.xpath('(//a[@class="nav-a  "])[4]')
        cy.xpath('(//a[@class="nav-a  "])[5]')
        
    });
    
});