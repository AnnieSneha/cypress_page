class Logout_po{

//this is the logout page class
//here only the method wrt logout will be written
//also cy.visit is written only once  ***
logout(){
    
cy.get("p[class='oxd-userdropdown-name']").click()
cy.get(".oxd-dropdown-menu").find(".oxd-userdropdown-link").should("have.length",4)
cy.get("a[href='/web/index.php/auth/logout']").click();                                    //do this step and see
}


}
export default Logout_po;