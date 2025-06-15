
describe('My first test suite', function()
{
   it('My first test case', function()
{
   //test steps
   cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
   cy.get(".container .brand").then((logoElement)=>{
    cy.log("The logo displayed is:" + logoElement.text())

   })

   // Assert if logo text is correctly displayed
   cy.get(".container .brand").should('have.text','GREENKART')
  

 }

)
}
)