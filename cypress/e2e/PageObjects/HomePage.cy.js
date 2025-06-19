class HomePage
{
    getEditBox()
    {
        return cy.get("input[name='name']:nth-child(2)")
    }

    getGender()
    {
        return cy.get("#exampleFormControlSelect1")
    }

    getTwoWayDataBinding()
    {
        return cy.get("h4 input[name='name']")
    }

    getEntrepreneurRadioButton()
    {
        return cy.get("#inlineRadio3")
    }

    getShop()
    {
        return cy.get("a[class='nav-link']")
    }

}

export default HomePage