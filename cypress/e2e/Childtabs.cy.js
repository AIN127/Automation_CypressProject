describe("Handling Childtabs",()=>{
    it("Childtabs",()=>{
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        //clicks alert button
        cy.get("#opentab:visible").invoke('removeAttr','target').click()

        cy.origin("https://qaclickacademy.com/", ()=>{
            cy.url().should('include','qaclickacademy')
        })
        cy.go('back')
        

    })
})