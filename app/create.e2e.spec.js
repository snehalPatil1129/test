describe('createBook page', function() {
    beforeEach(function(){
        //browser.get('http://localhost:9999/#/createnew');
        browser.get('http://localhost:9999/#/showbooks');
    });

    it('add a record', function() {    
        element(by.linkText('Create')).click();
        element(by.model('bdk.title')).sendKeys('sau');
        element(by.model('bdk.year')).sendKeys('1995');
        element(by.css('[value="false"]')).click();
        element(by.css('[value="Save"]')).click();
        expect(element.all(by.repeater('bdk in data')).count()).toBe(6);
    })
});


