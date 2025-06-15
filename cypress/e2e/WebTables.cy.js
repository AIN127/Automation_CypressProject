describe('Handling webtables',()=>{
    it('webtables',()=>{
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

        cy.get("table[name='courses'] tbody tr td:nth-child(2)").each(($el, index, $list)=>{
            const colText = $el.text()
            if(colText.includes('Python'))
            {
                cy.get("table[name='courses'] tbody tr td:nth-child(2)").eq(index).next().then((price)=>{
                    
                            const priceText=price.text()
                            expect(priceText).to.equal("25")
                })
            }
        })

    })
})