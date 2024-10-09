// cypress/pageObjects/AmazonPage.js
class AmazonPage {

    visit() {
        cy.visit('https://www.amazon.in/');
    }

    clickHamburgerMenu() {
        cy.get('.hm-icon').click();
    }

    selectCategory(categoryName) {
        cy.wait(3000);
        cy.contains(categoryName).invoke('show').click({force: true});
    }
    // .scrollIntoView().should('be.visible')

    filterByBrand(brand) {
        cy.wait(5000);
        cy.get(brand).click();
    }

    sortByPriceHighToLow() {
        cy.get('#a-autoid-26-announce').select('Price: High to Low');
    }

   

    
}

export default new AmazonPage();
