
class AmazonPage {

    visit() {
        const baseUrl = Cypress.config('baseUrl');
        cy.visit(baseUrl);
    }

    clickHamburgerMenu() {
        cy.get('.hm-icon').click();
    }

    selectCategory(categoryName) {
        cy.wait(3000);
        cy.contains(categoryName).invoke('show').click({force: true});
    }

    filterByBrand(brand) {
        cy.wait(3000);
        cy.get(brand).click();
    }

    sortByPriceHighToLow() {
        cy.wait(3000);
        cy.get('#a-autoid-0-announce').click();
        cy.get('#s-result-sort-select_2').scrollIntoView().should('be.visible').click({force: true});
    }

    clickSecondHighestItem() {
        cy.get('[data-asin="B0928K7LKW"] > .sg-col-inner > .s-widget-container > [data-action="puis-card-container-declarative"] > [data-cy="asin-faceout-container"] > .a-spacing-base > [data-cy="image-container"] > .rush-component > .a-link-normal > .a-section').parents().should('have.attr', 'href')             // Ensure it has an href attribute
        .then((newWindowUrl) => {
          // Visit the new window's URL in the same tab
          cy.visit(newWindowUrl);   // Pass the captured URL to cy.visit()
        });
    }

    assertAboutThisItemSection() {
        cy.contains('About this item').should('exist').parents().then(($section) => {
            console.log($section.text());
        });
    } 
}

export default new AmazonPage();
