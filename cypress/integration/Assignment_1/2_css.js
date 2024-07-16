describe("Flipcart", () => {
    it('Test Cases on Flipcart', () => {

        cy.visit('https://www.flipkart.com/')

        cy.get('a[href="/account/login?ret=/"]')
        cy.get('._1TOQfO > span').click()
        cy.get('input[class="r4vIwl BV+Dqf"]').type("6362785636")
        cy.get('button[class="QqFHMw twnTnD _7Pd1Fp"]').click()
        cy.get('div[class="XDRRi5"]').type(234567)
        cy.get('a[class="_1ch8e_"][aria-label="Mobiles"]').click()
        cy.go('back')
        cy.get('div[class="_1ch8e_ _1mZ8pZ"][aria-label="Fashion"]').click()
        cy.get('')
    });
});