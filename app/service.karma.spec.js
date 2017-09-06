


/////////////--------------------------------------------------------------------
describe('Test Service', function() {
  
      var $httpBackend, service, $location;
  
      beforeEach(module('bookApp'));
  
      beforeEach(inject(function(_$httpBackend_, _CRUDService_,$location) {
          $httpBackend = _$httpBackend_;
          service = _CRUDService_;
      }));
      
  it('should get table of books', function() {
          var bookData= {
              data:[
                {
                  id: 1,
                  title: "Harry Potter", 
                  year: 2011,favorite: true
                },
                {
                  id: 2, 
                  title: 'The Hobit',  
                  year: 2010,
                  favorite: false
                },
                {
                   id: 3,
                   title: 'The Da Vinci Code', 
                   year: 2002,
                   favorite: true 
                },
                {
                   id: 4,
                   title: 'The Lord of the ring',
                   year: 2013,
                   favorite: true
                },
                {
                  id: 5,
                  title: 'Jurassic Park',
                  year: 2005, 
                  favorite: false
                }
              ]
          };
  
          $httpBackend.expectGET('http://localhost:4000/api/books')
              .respond(bookData);
  
          service.getTab().then(function(data) {
            //expect(1).toBe(2);
              expect(data).toEqual(bookData);
          });
  
          $httpBackend.flush();
      });
 
  it('should create', function(passTest) {
           var bookData= { title: "Harry Potter", year: 2001,favorite: true};
       var testBook = function(data) {
        expect(data.title).toBe(bookData.title);
        expect(data.year).toBe(bookData.year);
         expect(data.favorite).toBe(bookData.favorite);
      };
  
       var errorTest = function(error) {
        expect(error).toBeDefined();
      };
      $httpBackend.expectPOST('http://localhost:4000/api/books').respond(200,bookData);
     // expect(1).toBe(2);
      service.addBook(bookData)
        .then(testBook)
        .catch(errorTest);
  
      $httpBackend.expectPOST('http://localhost:4000/api/books').respond(500,bookData);
      service.addBook(bookData)
        .then(testBook)
        .catch(errorTest)
        .finally(passTest);
      
     $httpBackend.flush();
    });
  
  it("check if module loads", function(){
        expect(service).toBeDefined();
      })
  it('should editBooks', function(passTest) {
          var bookData= {
               
           id: 3,title: 'Unposted Letter', year: 2012,favorite: true
          };
   var testBook = function(data) {
        expect(data.title).toBe(bookData.title);
        expect(data.year).toBe(bookData.year);
         expect(data.favorite).toBe(bookData.favorite);
      };
       var errorTest = function(error) {
        expect(error).toBeUndefined();
      };
      $httpBackend.expectPUT('http://localhost:4000/api/books').respond(200,bookData);
     // expect(1).toBe(2);
      service.updateBook(bookData)
        .then(testBook)
        .catch(errorTest)
        .finally(passTest);
   
   $httpBackend.flush();
      });
  it('should delete', function(passTest) {
          var bookData= { 
           id: 3
          };
           var errorTest = function(error) {
        expect(error).toBeUndefined();
      };
      var successFunction = function(){
        //  expect(1).toBe(1);
      }
      $httpBackend.expectDELETE('http://localhost:4000/api/book/'+bookData).respond(200);
      //expect(1).toBe(2);
      service.deleteBook(bookData)
        .then(successFunction)
        .catch(errorTest)
        .finally(passTest);
    
   $httpBackend.flush();
      });
  });
  
