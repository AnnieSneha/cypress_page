describe('Red Bus', () => {
    it('Test Suites', () => {

        cy.visit("https://www.redbus.com/")
         cy.xpath('//div[@class="rdc-login"]').click()

         cy.xpath('//li[text()="Sign In/Sign Up"]').click()

         cy.xpath('//span[@id="button-label"]').click()

         cy.xpath('//div[@data-email="anniesneha14@gmail.com"]').click()

         cy.xpath('//input[@type="password"]').type('iloveyouannie')

         cy.xpath('//span[text()="Next"]').click()
        

         cy.xpath('')

         cy.xpath('')

         cy.xpath('')
        
    });
});