describe('Handling Checkboxes', ()=>{
    it('Checkbox', ()=>{
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        cy.get("#checkBoxOption1").check().should('be.checked').and('have.value','option1')
        cy.get("#checkBoxOption1").uncheck()
        cy.get("#checkBoxOption1").should('not.be.checked')

        //select all the checkboxes
        //cy.get("label>input[type='checkbox']").check()
        //select particular checkbox
        cy.get("label>input[type='checkbox']").check(['option2','option3'])

        

    })
})