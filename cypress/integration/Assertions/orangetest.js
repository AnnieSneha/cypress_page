describe('Orange test', () => {
    it('test 1', () => {


        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        
        // Asser username using expect and then
        cy.get('input[name="username"]').then(($username)=>{
            //expect is a method used for assertion
            expect($username).to.have.attr('placeholder','Username')

            //directly if we try to clock on username
            //it will not work-Jquery
            //To convert jquery variable to cypress object we have to wrap it
            cy.wrap($username).type("Admin")

            //callback using then method and verify that 
        });

        cy.get('input[name="password"]').then(($password)=>{       //lamba expression a way to write functions =>

            expect($password).to.have.attr('placeholder','Password')

            cy.wrap($password).type('admin123')

        });
        // cy.get('button[class="oxd-button oxd-button--medium oxd-button--main orangehrm-login-button"]').then(($submit)=>{
        //     expect($submit).to.have.attr('type','submit')  //text('Login')
        //     cy.wrap($submit).click()
           
            cy.get('button[type="submit"]').then(($submit)=>{
             expect($submit).to.have.text(' Login ')  //text('Login')
            cy.wrap($submit).click()
        
        });

        //logout
        //clicking on the name so that dropdown appears
        
        cy.get(".oxd-userdropdown-name").click()

         //using find() i will find my logout from the parent class
         //Looping -iterate over each element and check the text of each element
         //using each()--is a jqury method

        cy.wait(2000) //wait command

        cy.get('ul[class="oxd-dropdown-menu"]').find('.oxd-userdropdown-link').each(($dropdown_ele)=>{
            //looping will start

            if($dropdown_ele.text()=='Logout'){
                cy.wrap($dropdown_ele).click();
            }
        });
    });
    
});