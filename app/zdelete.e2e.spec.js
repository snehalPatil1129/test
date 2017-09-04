 describe('deleteBook page', function() {
   
     it('It should delete a book',function(){
         browser.get(" http://localhost:9999/#/showbooks");
        
         
         element.all(by.repeater('bdk in data'))
         .get(2)
         .element(by.linkText('Delete')).click();

         expect(element.all(by.repeater('bdk in data')).count()).toBe(5);
        
         var names = $$('.table1  .title').getText();
         expect(names).not.toContain('monu');
       
                
    });
});
//https://stackoverflow.com/questions/28464730/delete-a-record-in-ng-repeat-protractor