describe('handling webtables',()=>{
    it('webtables',()=>{
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        //get all the texts in 2nd column
        cy.get("table[name='courses'] tbody tr td:nth-child(2)").each(($el,index,$list)=>{
            const columntext = $el.text()
            cy.log("The column text is :"+columntext)
        })
        //get all the prices in 3rd column
        cy.get("table[name='courses'] tbody tr td:nth-child(2)").each(($el,index,$list)=>{
        cy.get("table[name='courses'] tbody tr td:nth-child(2)").eq(index).next().then((price)=>{
             
            const columnprices = price.text()
            cy.log("The column prices are:"+columnprices)

        })

        //verify row count including header
        cy.get("table[name='courses'] tr").should('have.length','11')

        //verify row count excluding header (one way: Exclude <tr>s that contain <th>)
        cy.get("table[name='courses'] tr").not(':has(th)').should('have.length','10')
        //2nd way: Skip the first row
        cy.get("table[name='courses'] tr").then(($rows)=>{
            const datarows = $rows.slice(1)
            expect(datarows.length).to.equal(10)
        })

        //get column count
        cy.get("table[name='courses'] tr th").should('have.length','3')

        //extract and print all values
        cy.get("table[name='courses'] tr td").each(($el,index,$list)=>{
            const celldata = $el.text()
            cy.log("The data in the cells are:"+celldata)
        })


    
    })
            

    })
})