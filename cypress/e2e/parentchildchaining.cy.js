describe('My first test suite', function()
{
   it('My first test case', function()
{
   //test steps
   cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
   cy.get("form input").type("ca")
   // parent child chaining
   cy.get(".products").find(".product").should("have.length",4)
  cy.get(".products").find(".product").eq(1).contains("ADD TO CART").click() 
  cy.contains(".product","Capsicum").contains("ADD TO CART").click()
 }

)
}
)