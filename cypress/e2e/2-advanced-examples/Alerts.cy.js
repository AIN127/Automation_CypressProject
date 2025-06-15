describe("Handling Alerts",()=>{
    it("Alerts",()=>{
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        //clicks alert button
        cy.get("#alertbtn").click()
        //clicks confirm button
        cy.get("#confirmbtn").click()

        //verify text on alert pop-up
        cy.on('window:alert',(str)=>{
            expect(str).to.equal("Hello , share this practice page and share your knowledge")
        })

        cy.on('window:confirm',(str)=>{
            expect(str).to.equal("Hello , Are you sure you want to confirm?")
        })

    })
})