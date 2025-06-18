describe('Framework',()=>{

    before('execute test data before it block',function(){
        cy.fixture('profile','name').then((data)=>{
            this.data = data

        })

        cy.fixture('profile').then((profile)=>{
            this.profile = profile

        })

    })

    it('first test case', function(){
        cy.visit("https://rahulshettyacademy.com/angularpractice/")
        cy.get("input[name='name']:nth-child(2)").type(this.data.name)
        cy.get("#exampleFormControlSelect1").select(this.profile.gender)
        cy.get("h4 input[name='name']").should('have.value',this.data.name)
        //verify radio button is disabled
        cy.get("#inlineRadio3").should('be.disabled')
        //verify textbox minimum length is 2
        cy.get("input[name='name']:nth-child(2)").then((el)=>{
            const attributeValue=el.attr('minlength')
                  cy.log("The value of the attribute minlength is:"+attributeValue)
            expect(attributeValue).to.equal('2')

            cy.get("a[class='nav-link']").contains('Shop').click()
            cy.selectProduct('Samsung Note 8','Nokia Edge')
            //cy.selectProduct('Nokia Edge')
        })


    })


})