///<reference types="cypress"/>
////<reference types="@cypress/xpath" />
describe('Drag and Drop', () => {
    it('test1', () => {
        cy.visit("https://v1.training-support.net/selenium/drag-drop")
        //trigger -mouse operations
        //which: 1-->left button of the mouse
        //which:2 -->right button of the mouse
        cy.get('#draggable').trigger('mousedown',{which: 1})
        // 1 will move to drop
        cy.get('#droppable').trigger("mousemove").trigger('mouseup',{force:true})//release the left button
        //cy.get('#draggable').trigger('mousedown',{which:2})
        // cy.get('#dropzone2').trigger('mousedown',{which:3})
        // 

    });
    it('Test 2', () => {
        cy.visit("https://v1.training-support.net/selenium/drag-drop")
        cy.get('#draggable').trigger('mousedown',{which: 3})
        cy.get('#dropzone2').trigger("mousemove").trigger('mouseup',{force:true})//release the left button
        
    });
    it('Test 3', () => {
        cy.visit("https://v1.training-support.net/selenium/drag-drop")
        cy.get('#draggable').trigger('mousedown',{which: 3})
        cy.get('#dropzone2').trigger("mousemove").trigger('mouseup',{force:true})//release the left button


        
    });
});