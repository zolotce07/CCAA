const link = 'https://likejean.github.io/homework-5/';
const namePage = 'Complex Counter App';
const headerName = 'h1.header';
const totalCount = 'h3.total-count';
const defaultCounterName = "//div[@class]/h3";
const countValue = "span.badge";
const editCounterTitle = '//div/label[text()="Edit Counter Title: "]';
const llf = "//button[@name='negative']";
const llfValue = "//input[@name='lower']";


describe('Before each describe', () => {
    it('should open url CCA',  () =>  {
        browser.maximizeWindow();
        browser.url(link);
    });
})
describe('Counter 1', () => {
    it('should return correct page',  () =>  {
        const text = browser.getTitle();
        expect(text).toEqual(namePage);
    });
    it('should Counter is present',  () => {
        const text = $(headerName).getText();
        expect(text).toEqual('Counters');
    });
    it('should Total:0 is present ', function () {
        const text = $(totalCount).getText();
        expect(text).toEqual('Total: 0');
    });
    it('should counter name is present',  () => {
        const text = $(defaultCounterName).getText();
        expect(text).toEqual('1. Default Counter');
    });
    it('should Count value is present',  () => {
        const text = $(countValue).getText();
        expect(text).toEqual('0');
    });
    it('should Edit counter title is', function () {
        const text = $(editCounterTitle).getText();
        expect(text).toEqual('Edit Counter Title:');
    });
    it('should check llf is clickable',  () => {
        const result = $(llf).isClickable();
        expect(result).toEqual(true);
    });
    it('should 1 is present',  () => {
        $(llf).click();
        browser.waitUntil(() => $(llf).isDisplayed() === true);
        const text = $(llfValue).getValue();
        expect(text).toEqual('1');
        browser.pause(5000)
    });
    it('should check that spinner increase value +1',  () => {
        $(llfValue).click();
        browser.keys('ArrowUp')
        browser.pause(5000);
    });
    it('should check that spinner increase value -1',  () => {
        $(llfValue).click();
        browser.keys('ArrowDown')
        browser.pause(5000);
    });
})