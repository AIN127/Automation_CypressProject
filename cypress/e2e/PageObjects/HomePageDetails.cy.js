import HomePage from '../PageObjects/HomePage.cy.js'
import ProductsPage from '../PageObjects/ProductsPage.cy.js'

describe('HomePageDetails',()=>{

    before('execute test data before it block',function(){
        cy.fixture('profile').then((profile)=>{
            this.profile = profile

        })

    })

    it('first test case', function(){
        const homePage = new HomePage()
        const productsPage = new ProductsPage()
        cy.visit("https://rahulshettyacademy.com/angularpractice/")
        homePage.getEditBox().type(this.profile.name)
        homePage.getGender().select(this.profile.gender)
        homePage.getTwoWayDataBinding().should('have.value',this.profile.name)
        //verify radio button is disabled
        homePage.getEntrepreneurRadioButton().should('be.disabled')

        homePage.getShop().contains('Shop').click()
        cy.selectProduct('Nokia Edge','Blackberry')
        productsPage.getCheckOut().click()
        })




    })
