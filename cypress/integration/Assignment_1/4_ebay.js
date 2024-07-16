describe('Ebay', () => {
    it('test scripts', () => {
    cy.visit("https://www.ebay.com/")
    cy.xpath("//a[text()=' Daily Deals']")
    cy.xpath("//a[text()=' Help & Contact']")
    cy.xpath("//a[text()=' Sell']")
    cy.xpath("//a[text()='Advanced']")
    cy.xpath("//a[text()='Accessibility']")
    });
});