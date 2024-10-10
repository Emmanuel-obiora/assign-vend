import AmazonPage from '../pageObjects/AmazonPage';

describe('Amazon Samsung TV Filter Test', () => {
    beforeEach(() => {
        AmazonPage.visit();
    });

    it('should filter Samsung TVs and log the About This Item section', () => {
        AmazonPage.clickHamburgerMenu();
        AmazonPage.selectCategory('TV, Appliances, Electronics');
        AmazonPage.selectCategory('Televisions');
        AmazonPage.filterByBrand(':nth-child(40) > .a-unordered-list > :nth-child(4) > .a-list-item > .a-link-normal > .a-size-base');
        AmazonPage.sortByPriceHighToLow();
        AmazonPage.clickSecondHighestItem();
        AmazonPage.assertAboutThisItemSection();
    });
});
