import AmazonPage from '../pageObjects/AmazonPage'

describe('Amazon Samsung TV Filter Test', () => {
    beforeEach(() => {
        AmazonPage.visit();
    });

    it('should filter Samsung TVs and log the About This Item section', () => {
        AmazonPage.clickHamburgerMenu();
       
    });
});
