describe('My first test suite', function()
{
   it('My first test case', function()
{
   //test steps
   cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
   cy.get("form input").type("ca")
   cy.get(".product:visible").should("have.length",4) //:visible class looks for only visible products and excludes hidden elements

   cy.get(".product:visible").then((products)=>{
    //cy.log("Number of visible products:", products.length)
    const productlength = products.length
    cy.task("logToTerminal", "Number of visible products:" + productlength)

   }
)
 }

)
}
)