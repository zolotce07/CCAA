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
const errorZero = "//span[@style]";
////////////// Tanya
const subButton = "//button[contains(text(),\'-1\')]";
const addButton = '//body//button[8]';
const deleteButton = "//button[@id='1']";
const resetButton = "//button[@class='btn-primary btn Ripple-parent reset']";
const editNameField = "//input[@id='1']";
const defaultCounter = "//div[@class]/h3";
//////////////Gena
const enterCounterTitleField = '//input[@name="name"]';
const enterInitialCountField = "//input[@name='value']";
const addCounterButton ="//button[text()='Add Counter']";
const enterCounterTitle = "//label[contains(text(),'Enter Counter Title:')]";
const enterInitialCount = "//label[contains(text(),'Enter Initial Count:')]";
/////////////Vitalyi
const secondCounterName = "//div[2]//div[1]//h3[1]";
const thirdCounterName = "//div[3]//div[1]//h3[1]";
const thirdCountValue = "//div[3]//div[2]//span[1]";
const thirdLlf = "//div[3]//div[2]//button[4]";
const thirdLlfValue ="//div[3]//div[2]//input[1]";
const thirdLeftCrossButton = "//div[3]//div[2]//button[4]";
const thirdUlf ="//div[3]//div[2]//button[5]";
const thirdUlfValue = "//div[3]/div[2]/input[@name='upper']";
const thirdRightCrossButton = "//div[3]//div[2]//button[5]";


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
    it('should right X is works',  () => {
        $(rightCrossButton).click();
        const text = $(llf).getText();
        expect(text).toEqual('CHANGE STEP OPTIONS?')
    });
    ///////////////////// Tanya
    it('should check sub Button -1 ', function () {
        const  step = $(subButton).isClickable();
        expect(step).toEqual(true);
        $(subButton).click();
        const result = $(countValue).getText();
        expect(result).toEqual('-1');
    });
    it('should check add Button 3', function () {
        const step = $(addButton).isClickable();
        expect(step).toEqual(true);
        $(addButton).click();
        const result = $(countValue).getText();
        expect(result).toEqual('2');
    });
    it('should check that Reset button returns 0 o=in count Value', function () {
        const step = $(resetButton).isClickable();
        expect(step).toEqual(true);
        $(resetButton).click();
        const result = $(countValue).getText();
        expect(result).toEqual('0');

    });
    it('should check the Edit Name Field changes name of Default counter to "New Name"', function () {
        browser.url('https://likejean.github.io/homework-5/');
        const text =  $(editNameField).getValue();
        expect(text).toEqual("Default Counter");
        $(editNameField).click();
        $(editNameField).clearValue();
        $(editNameField).click();
        const result = $(editNameField).setValue('New Name');
        const title = $(defaultCounter).getValue();
        expect(title).toEqual(result);
    });
    it('should check that Delete Button deletes default counter', function () {
        const text = $(deleteButton).getText();
        expect(text).toEqual("DELETE");
        $(addButton).click();
        $(deleteButton).click();
        const result = $(totalCount).getText();
        expect(result).toEqual('Total: 0')
    });
});
//////////////////////////////////// ADD Gena
describe("ADD section tests",function() {
    it('should have "Enter Counter Title:" field', function () {
        browser.refresh();
        const text = $(enterCounterTitle).getText();
        expect(text).toEqual("Enter Counter Title:");
    });
    it('should have "Enter Initial Count:" field',function () {
        const text = $(enterInitialCount).getText();
        expect(text).toEqual("Enter Initial Count:");
    });
    it('"Enter Counter Title" field should have "Counter Name" by default ',()=>{
        const text = $(enterCounterTitleField).getValue();
        expect(text).toEqual('Counter Name');
    });
    it('"Enter Counter Title" field should accept "My new counter" text ',()=> {
        $(enterCounterTitleField).setValue("My new counter");
        const text = $(enterCounterTitleField).getValue();
        expect(text).toEqual("My new counter");
    });
    it('initial count field should have value 50 by default',()=>{
        const result = $(enterInitialCountField).getValue();
        expect(result).toEqual('50')
    });
    it("should check that spinner increase value by 1 in initial count field",function () {
        $(enterInitialCountField).click();
        browser.keys('ArrowUp');
        const text = $(enterInitialCountField).getValue();
        expect(text).toEqual('51');
    });
    it("should check that spinner decrease value by 1 in initial count field",function () {
        $(enterInitialCountField).setValue(60);
        $(enterInitialCountField).click();
        browser.keys('ArrowDown');
        const text = $(enterInitialCountField).getValue();
        expect(text).toEqual('59');
    });
    it('initial count field should accept 45',function () {
        $(enterInitialCountField).setValue("45");
        const result = $(enterInitialCountField).getValue();
        expect(result).toEqual('45')
    });
    it('should check ADD COUNTER BUTTON is present',function () {
        const text = $(addCounterButton).getText();
        expect(text).toEqual("ADD COUNTER");
    });
    it('should check ADD COUNTER BUTTON is clickable',function () {
        $(addCounterButton).click();
        const isClickable = $(addCounterButton).isEnabled();
        expect(isClickable).toEqual(true);
    });
});
///////////// Vitaliy
describe('Counter 3', () => {
    it ('should create counter 2', ()=>{
        browser.refresh();
        $(addCounterButton).click();
        browser.waitUntil(() => $(llf).isDisplayed() === true);
        const text = $(secondCounterName).getText();
        expect(text).toEqual('2. Counter Name');
    })
    it ('should create counter3', ()=> {
        $(addCounterButton).click();
        browser.waitUntil(() => $(llf).isDisplayed() === true);
        const text1 = $(thirdCounterName).getText();
        expect(text1).toEqual('3. Counter Name');
    })
    it('should Count value is present',  () => {
        const text = $(thirdCountValue).getText();
        expect(text).toEqual('50');
    });
    it('should check thirdLlf is clickable',  () => {
        const result = $(thirdLlf).isClickable();
        expect(result).toEqual(true);
    });
    it('should chexk that 1 in LLF is present',  () => {
        $(thirdLlf).click();
        browser.waitUntil(() => $(thirdLlfValue).isDisplayed() === true);
        const text = $(thirdLlfValue).getValue();
        expect(text).toEqual('1');
    });
    it('should check that spinner increase value +1',  () => {
        $(thirdLlfValue).click();
        browser.keys('ArrowUp')
        const text = $(thirdLlfValue).getValue();
        expect(text).toEqual('2');
    });
    it('should check that spinner decrease value -1',  () => {
        browser.keys('ArrowDown')
        const text = $(thirdLlfValue).getValue();
        expect(text).toEqual('1');
    });
    it ('should check that third left X is clickable', ()=> {
        const result = $(thirdLeftCrossButton).isClickable();
        expect(result).toEqual(true);
    })
    it('should check that third left X works',  () => {
        $(thirdLeftCrossButton).click();
        const text = $(thirdLlf).getText();
        expect(text).toEqual('CHANGE STEP OPTIONS?')
    });
    it ('should check that third ulf is clickable', ()=>{
        const result = $(thirdUlf).isClickable();
        expect(result).toEqual(true);
    })
    it ('should check that third ulf consist 3',()=>{
        $(thirdUlf).click();
        const result = $(thirdUlfValue).getValue();
        expect(result).toEqual("3");
    })
    it('should check that spinner increase value +1',  () => {
        $(thirdUlfValue).click();
        browser.keys('ArrowUp')
        const text = $(thirdUlfValue).getValue();
        expect(text).toEqual('4');
    });
    it('should check that spinner decrease value -1',  () => {
        browser.keys('ArrowDown')
        const text = $(thirdUlfValue).getValue();
        expect(text).toEqual('3');
    });
    it ('should check that Red Cross is clickable', ()=> {
        const result = $(thirdRightCrossButton).isClickable();
        expect(result).toEqual(true);
    })
    it('should check that third right X works',  () => {
        $(thirdRightCrossButton).click();
        const text = $(thirdUlf).getText();
        expect(text).toEqual('CHANGE STEP OPTIONS?')
    });
})


