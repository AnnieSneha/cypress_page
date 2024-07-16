describe('Date picker', () => {
    it('test1', () => {
        cy.visit("https://jqueryui.com/datepicker/")
        cy.frameLoaded('.demo-frame');
        cy.iframe().contains('Date:').type('07/07/2024{enter}');
        //or cy.iframe().xpath()
        
    });
});
before(() => {
    cy.fixture('exapmlr').thrn((data)=>{
        globalThis.data=data;
    })
});