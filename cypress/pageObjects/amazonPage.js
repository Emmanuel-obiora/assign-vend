// cypress/pageObjects/AmazonPage.js
class AmazonPage {
    visit() {
        cy.visit('https://www.amazon.in/');
    }

    clickHamburgerMenu() {
        cy.get('.hm-icon').click();
    }

    
}

export default new AmazonPage();
