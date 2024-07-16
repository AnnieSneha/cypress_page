import Login_po from "../../support/PageObjects/orangehrm/loginpage";
import Link_po from "../../support/PageObjects/orangehrm/link";
import Logout_po from "../../support/PageObjects/orangehrm/logout";

//importing

describe('', () => {
//creating an object for each class
    const login_po=new Login_po();
    const link_po=new Link_po();
    const logout_po=new Logout_po();

    it('Test Cases', () => {
         //Login

         login_po.EnterURL();
         login_po.Login();


        //Clicking on admin lick

        link_po.linkclick('Admin')

        //logging out

        logout_po.logout();
    });
    
});
