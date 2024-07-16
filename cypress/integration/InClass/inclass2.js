describe('Orange test', () => {
    it('test 1', () => {


        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get('input[name="username"]').then(($username)=>{
            expect($username).to.have.attr('placeholder','Username')
            cy.wrap($username).type("Admin")
        });

        cy.get('input[name="password"]').then(($password)=>{       
        expect($password).to.have.attr('placeholder','Password')
        cy.wrap($password).type('admin123')

        });
        cy.get('button[type="submit"]').then(($submit)=>{
        expect($submit).to.have.text(' Login ')  
        cy.wrap($submit).click()
        
        });
        cy.get('a[href="/web/index.php/admin/viewAdminModule"]').click()
        cy.get('.oxd-autocomplete-wrapper').type("ann")
        cy.get('.oxd-table-filter').each(($option)=>{
        if($option.text()=='Rosanna'){  //try to use contains
        cy.wrap($option).click();
      }
  
  
      })

    });
});