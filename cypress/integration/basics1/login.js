///<reference types="cypress"/>

describe('OrangeHRM Suite', () => {
    // it('Login Test1', () => {

    //     cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    //     // I have to write locator for username and enter my username


    //     cy.get("input[name='username']").type('Admin')
    //     //write locators for password and enter my password

    //     cy.get("input[name='password']").type('admin123')


    //     //Locators for clicking on login button
    //     cy.get("button[type='submit']").click()


    // });
    // it('facebook login', () => {
    //     cy.visit('https://www.facebook.com/')

    //     cy.get('#email').type('anniesneha14@gmail.com')

    //     cy.get('#pass').type('annie14sneha')

    //     cy.get('#loginbutton').click()
        
    // });
    // it('using xpath test', () => {
    //     cy.visit('https://the-internet.herokuapp.com/login')    //it.only

    //     cy.xpath('//input[@id="username"]').type('admin')

    //     cy.xpath('//input[@id="password"]').type("asdfgh")

    //     cy.xpath('//button[@class="radius"]').click()
    // });
    // it('Ebay link', () => {

    //     cy.visit("https://www.ebay.com/b/Brand-Outlet/bn_7115532402")

        

    //     cy.xpath('//a[.="Help & Contact"]').click()
        
    // });
    it('Rahul Shetty', () => {
        
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        cy.xpath("//a[contains(text(),'Free Access')]").click()

        //cy.xpath("//button[contains(text(),'Home')]").click()

        cy.xpath("//button[contains(text(),'Practice')]").click()

        cy.xpath("//button[contains(text(),'Login')]").click()

        cy.xpath("//button[contains(text(),'Signup')]").click()

        
    
   
        cy.xpath("(//button[@class='btn btn-primary'])[1]").click()
        cy.xpath("(//button[@class='btn btn-primary'])[2]").click()
   

  
     
        cy.xpath("//input[@name='radioButton' and @value='radio1' and @type='radio']").click()
        // cy.xpath("//input[@name='radioButton' and @value='radio2' and @type='radio']").click()
    });
});