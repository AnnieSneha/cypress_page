describe('Scroll', () => {
    it('Google Test', () => {

      cy.visit("https://www.google.com/")
      cy.get('[title="Search"]').type('Masai{enter}')//tyoe masai in the search box and hit enter in the keyboard
      cy.scrollTo(0,1000)//x is horizontal,y is vertical
      cy.scrollTo(0,-1000)//+y =>scrol down ,-y=>scroll up
      cy.contains('Maasai people').scrollIntoView().wait(2000).click()
      
    });
});