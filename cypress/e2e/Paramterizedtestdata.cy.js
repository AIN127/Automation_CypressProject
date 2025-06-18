describe('Parameterize test data',()=>{

    before('execute test data before it block',function(){
        cy.fixture('testdata','productNames').then((data)=>{
            this.data = data

        })

    })

    it('first test case', function(){
        cy.visit("https://rahulshettyacademy.com/angularpractice/")

            cy.get("a[class='nav-link']").contains('Shop').click()
            var nameofproducts = this.data.productNames
            nameofproducts.forEach(function(element){
                cy.selectProduct(element)
            })
            


    })
})


