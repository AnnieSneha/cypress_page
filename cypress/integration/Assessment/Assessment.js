describe('Automation Store', () => {
    it('Test Cases on Automation ', () => {
        cy.visit("https://automationteststore.com/")
         //"Apparel & Accessories" and select "T-shirts".
        cy.get('a[href="https://automationteststore.com/index.php?rt=product/category&path=68"]').click() //it will take us to url page 
        cy.get('//img[@alt="T-shirts"]').click()  
         //It will select the third shirt
        cy.get('a[title="Designer Men Casual Formal Double Cuffs Grandad Band Collar Shirt Elegant Tie"]').click()
        //the colour, size, and quantity by selecting dropdowns and adding to cart.
        //cy.xpath('//select[@name="option[350]"]').select('White  (998745 In Stock)')
        cy.xpath('//select[@name="option[351]"]').select('Medium')
        //adding to the cart, click on "Checkout".
        cy.xpath('//a[@class="cart"]').click()
        //"Guest Checkout" and complete the registration.
        cy.get('#cart_checkout1').click()
        cy.xpath('//input[@id="accountFrm_accountguest"]').check().should('be.visible').and('be.checked')
        cy.get('button[type="submit"][title="Continue"]').click()
        cy.get('#guestFrm_firstname').type('Annie')
        cy.get('#guestFrm_lastname').type('Sneha')
        cy.get('#guestFrm_email').type('anniesneha14@gmail.com')
        cy.get('#guestFrm_telephone').type('6362785636')
        cy.get('#guestFrm_address_1').type('Nealliahudikeri,Sidapur')
        cy.get('#guestFrm_city').type('Kodagu')
        cy.get('#guestFrm_postcode').type('275526')
        cy.xpath('//select[@id="guestFrm_country_id"]').select('India')
        cy.xpath('//select[@id="guestFrm_zone_id"]').select('Karnataka')
        cy.get('button[title="Continue"]').click()
        cy.get('#checkout_btn').click()

        //Assert the success message.
        cy.get('span[class="maintext"]').should('contain.text',' Your Order Has Been Processed!')

        
    });
});