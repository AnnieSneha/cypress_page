describe('Test Suite - Heroku Test suite(Collection of tests)', () => {
    //describe is a blaock,where you will write multiple test scripts

    //Describe and it block are from Mocha library
    //This is how we write test cases in cypress
    //This file is also called as Spec


    it('Test1', () => {
        // it block is your test script-1 Test

        //cy is my cypress object
        // using cy i can write my cypress commands
        //cy.visit is used to enter the URL inside the browser.

        cy.visit('https://the-internet.herokuapp.com/login')
        
    });
    
});