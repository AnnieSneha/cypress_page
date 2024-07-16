class Link_po{

//method to click on any link in the webpage
 //parameter is passed ,the text in the parameter

//Generic method to click on any link

    linkclick(link){
        cy.contains(link).click(); //this will click on any link with the text being passed from at test case
    }
}
export default Link_po;//this is mandatory for every class



//instead of using 1000 times ,using a class will easy 