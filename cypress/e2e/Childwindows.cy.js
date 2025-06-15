describe('Handling childwindows',()=>{
    it('childwindows',()=>{
         cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
         cy.get("a[id='opentab']").then((el)=>{
            const url = el.prop('href')
            cy.log(url)
            cy.visit(url)
            cy.url().should('have.value','qaclickacademy')
         })
    })
})