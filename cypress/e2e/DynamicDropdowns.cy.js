describe('Handling Dynamic dropdown', ()=>{
    it('Dynamicdropdown', ()=>{
        cy.visit("https://demoqa.com/auto-complete")
        //selecting by value
        // Type slowly to trigger autocomplete correctly
    cy.get('#autoCompleteSingleContainer').type("i")

    // Wait for suggestions to load and be visible
    cy.get("div [class='auto-complete__menu-list css-11unzgr'] div").should('be.visible')
    // Click on the correct suggestion
    cy.get("div [class='auto-complete__menu-list css-11unzgr'] div").each(($el) => {
      if ($el.text().includes('White')) {
        cy.wrap($el).click();
      }
    });

    // Verify the input now contains 'India'
    cy.wait(2000)
    cy.get('#autoCompleteSingleContainer').should('contain.text', 'White')
  });
});