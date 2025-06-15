describe("Handling radio buttons",()=>{
    it("Radiobuttons",()=>{
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        cy.get("[value='radio3']").check()
        cy.get("[value='radio3']").should('be.checked')

        // select radio button dynamically

        cy.get("[type='Radio']").each(($el)=>{
         if($el.val()=="radio2"){
            cy.wrap($el).check()


         }
        })
            
    })
})
            
        

