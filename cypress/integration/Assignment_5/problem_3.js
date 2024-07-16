//Handle the window from the webpage: 
describe('Window', () => {
    it('Test Scripts of windows', () => {
        cy.visit('https://the-internet.herokuapp.com/windows')

        cy.get('a[href="/windows/new"]').invoke('removeAttr','target').click()

        // cy.origin("https://the-internet.herokuapp.com/windows/new",()=>{
            
        //     cy.visit('')
        //     cy.contains('New Window')
        //     cy.wait(3000)
        // })

        cy.visit('https://the-internet.herokuapp.com/windows')


    });
});

