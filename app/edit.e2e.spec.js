describe('editBook page', function() {
     beforeEach(function () {
       browser.get(" http://localhost:9999/#/showbooks");        
     });

     it('it should edit',function(){
         var str = element.all(by.repeater('bdk in data'));
        element.all(by.repeater('bdk in data'))
         .get(2)
        .element(by.linkText('Edit')).click();

        element(by.model('bdk.title')).clear()
        .then(function(){ 
       element(by.model('bdk.title')).sendKeys('Pune ')
       });
        
       element(by.model('bdk.year')).clear()
       .then(function(){
       element(by.model('bdk.year')).sendKeys('5678 ')  
       });   
       element(by.css('[value="false"]')).click();
       element(by.css('[value="Update"]')).click();    
       
       expect( element.all(by.repeater('bdk in data'))
       .get(2)
       .element(by.binding('bdk.title')).getText()).toEqual('Pune');    
        expect( element.all(by.repeater('bdk in data'))
        .get(2)
        .element(by.binding('bdk.year')).getText()).toEqual('5678');   
        expect( element.all(by.repeater('bdk in data'))
        .get(2)
        .element(by.binding('bdk.favorite')).getText()).toBe('false');
    });
});










































































































//     it("should redirect to edit page", function() {
         
//         // var ptor = protractor.getInstance();
//         var editButton = element(by.css('[value="Edit"]'));
//         editButton.click();
//         wait(function() {
//             return getCurrentUrl().then(function(url) {
//                 return (url.indexOf(baseUrl + '/#/editBook') );

//             });
//         });
//     });
// });  
    
    //  it('edit a record', function() {
    //     browser.get(' http://localhost:9999/#/showbooks');
        
    //     element(by.css('[value="Edit"]')).click();

    //     browser.get('http://localhost:9999/#/editBook/' );
        // element(by.model('bdk.title')).clear();
        // element(by.model('bdk.year')).clear();
        // element(by.model('bdk.favorite')).clear();
        // element(by.model('bdk.title')).sendKeys('ROBOT');
        // element(by.model('bdk.year')).sendKeys('5454');
        // element(by.model('bdk.favorite')).click();
        // var str = element.all(by.repeater('bdk in data.str'));
        // element(by.css('[value="Update"]')).click();
        // expect(str.count()).toEqual(0);
 

// it("should redirect to edit page", function() {
//     var editButton = element(by.css('[value="Edit"]'));
//     editButton.click();

//     ptor.wait(function() {
//         return ptor.getCurrentUrl().then(function(url) {
//             return (url.indexOf(ptor.baseUrl + '/#/editBook') );
//         });
//     });
// });



// //---------------------------------

// it("should link to templates", function() {
//     var continueBtn = element(by.id('continue'));
//     continueBtn.click();

//     ptor.wait(function() {
//         return ptor.getCurrentUrl().then(function(url) {
//             return (url.indexOf(ptor.baseUrl + '/templates?campaignId=') !== -1);
//         });
//     });
// });