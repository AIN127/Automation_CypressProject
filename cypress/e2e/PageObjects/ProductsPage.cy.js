class ProductsPage
{
    getCheckOut()
    {
   return cy.get("a[class='nav-link btn btn-primary']")
    }
}

export default ProductsPage