describe("Handling visible invisible elements",()=>{
    it("Visible Invisible elements",()=>{
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        //verify element is visible
        cy.get("#displayed-text").should('be.visible')
        //click on hide button
        cy.get("#hide-textbox").click()
        // verify element is invisible
        cy.get("#displayed-text").should('not.be.visible')
        //click on show button
        cy.get("#show-textbox").click()
        //verify element is visible
        cy.get("#displayed-text").should('be.visible')

    })
})