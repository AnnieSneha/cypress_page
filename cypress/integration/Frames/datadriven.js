//DATA DRIVEN>>>fixtures
//before bloack will be executed before a describe block
before(() => {
    //I have to configure the example.json file for data driven testing
    
    cy.fixture("example").then((data)=>{

        globalThis.data= data;
    })
}); //close it before only

describe('OrangeHRM Suite', () => {
    it('Login Test1', () => {
    
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
            // I have to write locator for username and enter my username
    
    
    cy.get("input[name='username']").type(data.username)
            //write locators for password and enter my password
    
    cy.get("input[name='password']").type(data.password)
    cy.get("button[type='submit']").click()
            
    

        })
    })

    
    
