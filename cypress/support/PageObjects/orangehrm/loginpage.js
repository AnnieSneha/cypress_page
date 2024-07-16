class Login_po{   //class is a container
  //Login Page Class-All the methods related to Login in this class
EnterURL(){
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login') //enter url is a method 
}

Login(){
    cy.get('input[name="username"]').type("Admin");
    cy.get('input[name="password"]').type('admin123');
    cy.get('button[type="submit"]').click()
}

clickforgotpassword(){

    cy.get('.orangehrm-login-forgot-header').click();
}




} 

export default Login_po;  //**mandatory **// login_po is the class name and under that we have the method