describe('Navigation Commands', () => {
    it('test1', () => {
        
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.xpath("//a[.='Free Access to InterviewQues/ResumeAssistance/Material']").click()

        cy.go('back')  //naviagte back

        cy.go('forward')  //navigate back
    
        cy.reload(); //reload the page
    });
});