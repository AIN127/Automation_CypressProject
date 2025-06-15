describe('Handling static dropdown', ()=>{
    it('Static dropdown', ()=>{
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        //selecting by value
        cy.get("#dropdown-class-example").select("option1").should("have.value","option1") 
        //selecting by name
        cy.get("#dropdown-class-example").select("Option1")

        //selecting by index
        cy.get("select option").eq(2).then($option=>{
            const value = $option.val()
            cy.get("select").select(value)
        })

    })
})