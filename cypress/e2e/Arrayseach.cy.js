describe('My first test suite', function()
{
   it('My first test case', function()
{
   //test steps
   cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
   cy.get("form input").type("ca")
   cy.wait(5000)
   // parent child chaining
   cy.get('.products').as('productlocator')
   cy.get('@productlocator').find(".product").should("have.length",4)
   cy.get('@productlocator').find(".product").eq(1).contains("ADD TO CART").click() //using index

   cy.get('@productlocator').find(".product")
             .each(($el,index, $list) =>{
                var vegText = $el.find("h4.product-name").text()
                if(vegText.includes("Cashews"))
                {
                    $el.find(".product-action button[type='button']").click()  //This will click cashew item
                }

        
             })   
        cy.get('@productlocator').find(".product")
           .each(($el,index,$list)=>{
                $el.find(".product-action button[type='button']").click()  //This will click all the cart items available after typing ca
           })
  
 }

)
}
)