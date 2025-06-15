describe('My first test suite', function()
{
   it('My first test case', function()
{
   //test steps
   cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
   cy.get("form input").type("ca")
   cy.wait(2000)
   // parent child chaining
   cy.get('.products').as('productlocator')

   cy.get('@productlocator').find(".product")
             .each(($el,index, $list) =>{
                var vegText = $el.find("h4.product-name").text()
                if(vegText.includes("Cashews"))
                {
                    $el.find(".product-action button[type='button']").click()  //This will click cashew item
                }

        
             })   

             cy.get("img[alt='Cart']").click()   // clicks on cart image
                cy.contains('PROCEED TO CHECKOUT').click() // clicks on proceed to checkout button
                cy.contains('Place Order').click()  // clicks on place order button
  
 }

)
}
)