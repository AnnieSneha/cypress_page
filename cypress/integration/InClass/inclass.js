describe('Automation Store', () => {
it('Contact US', () => {
    cy.visit("https://automationteststore.com/")

    cy.get('a[href="https://automationteststore.com/index.php?rt=content/contact"]').click()

    cy.get('input[id="ContactUsFrm_first_name"]').type("Annie")

    cy.get('input[id="ContactUsFrm_email"]').type("anniesneha14@gmail.com")

    cy.get('textarea[id="ContactUsFrm_enquiry"]').type("I have to enquiry about my makeup ")
    
    cy.get('button[title="Submit"]').click()

    cy.xpath('//p[text()="Your enquiry has been successfully sent to the store owner!"]').should('include.text','Your enquiry has been successfully sent to the store owner!')

});

    
});