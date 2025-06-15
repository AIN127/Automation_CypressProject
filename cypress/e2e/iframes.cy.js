describe('Handling iframes',()=>{
    it('iframes',()=>{
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        cy.frameLoaded("#courses-iframe")
        cy.iframe().find("a[href='mentorship']:visible").click()
        cy.wait(10000)
        cy.iframe().find("h1[class*='pricing-title text-white ls-1']").should('have.length','2')
        cy.get("#checkBoxOption1").check()
  });
});