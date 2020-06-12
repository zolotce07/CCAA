const link = 'https://likejean.github.io/homework-5/';
const namePage = 'Complex Counter App';
const headerName = 'h1.header';
const totalCount = 'h3.total-count';
const defaultCounterName = "//div[@class]/h3";
const countValue = "span.badge";
const editCounterTitle = '//div/label[text()="Edit Counter Title: "]';
const llf = "//button[@name='negative']";
const llfValue = "//input[@name='lower']";
const leftCrossButton = "//button[text()='X']";
const ulf = "//button[@name='positive']";
const ulfValue = "//input[@name='upper']";
const rightCrossButton = "//button[@class='btn-danger btn-outline-danger btn Ripple-parent close-button']";
const subButtons = "//button[@class='btn-black btn Ripple-parent']";

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
    });
    it('should check that spinner increase value +1',  () => {
        $(llfValue).click();
        browser.keys('ArrowUp');
        const text = $(llfValue).getValue();
        expect(text).toEqual('2');
    });
    it('should check that spinner increase value -1',  () => {
        browser.keys('ArrowDown');
        const text = $(llfValue).getValue();
        expect(text).toEqual('1');
    });
    it('should check that red Cross is clickable',  () =>  {
        const result = $(leftCrossButton).isClickable();
        expect(result).toEqual(true);
    });
    it('should left X is works',  () => {
        $(leftCrossButton).click();
        const text = $(llf).getText();
        expect(text).toEqual('CHANGE STEP OPTIONS?')
    });
    it('should check ulf is clickable',  () => {
        const result = $(ulf).isClickable();
        expect(result).toEqual(true);
    });
    it('should 3 is present',  () => {
        $(ulf).click();
        browser.waitUntil(() => $(ulf).isDisplayed() === true);
        const text = $(ulfValue).getValue();
        expect(text).toEqual('3');
    });
    it('should check that spinner increase value +1',  () => {
        $(ulfValue).click();
        browser.keys('ArrowUp');
        const text = $(ulfValue).getValue();
        expect(text).toEqual('4');
    });
    it('should check that spinner dicrease value -1',  () => {
        browser.keys('ArrowDown');
        const text = $(ulfValue).getValue();
        expect(text).toEqual('3');
    });
    it('should check that red Cross is clickable',  () =>  {
        const result = $(rightCrossButton).isClickable();
        expect(result).toEqual(true);
    });
    it('should left X is works',  () => {
        $(rightCrossButton).click();
        const text = $(llf).getText();
        expect(text).toEqual('CHANGE STEP OPTIONS?')
        browser.pause(5000)
    });
    it('should check SB is clickable',  () => {
        browser.$$(subButtons).includes()
        browser.pause(5000);
    });
});