describe('Test Module', function () {
  var httpBackend, service;
  beforeEach(module('bookApp'));
  beforeEach(inject(function (_$httpBackend_, _CRUDService_) {
    httpBackend = _$httpBackend_;
    service = _CRUDService_;
  }));

  it('get', function () {
    var mockResponse = {
      data: [
        { id: 1, title: "Harry Potter", year: 2011, favorite: true },
        { id: 2, title: 'The Hobit', year: 2010, favorite: false },
        { id: 3, title: 'The Da Vinci Code', year: 2002, favorite: true },
        { id: 4, title: 'The Lord of the ring', year: 2013, favorite: true },
        { id: 5, title: 'Jurassic Park', year: 2005, favorite: false }
      ]
    };
    httpBackend.expectGET("http://localhost:4000/api/books")
      .respond(mockResponse);

var xyz = service.getTab();/*.then(function (data) {
      console.log("\n\n\n\nCHEck if this is working\n\n\n\n");
      expect(data).toEqual(mockResponse);
    });*/
    expect(xyz).toEqual(mockResponse.data);
    //expect(1).toBe(2);
  });
  it('add', function () {
    var mockResponse = { title: 'snehal', year: '1995', favorite: 'true' };
    httpBackend.expectPOST('http://localhost:4000/api/books', mockResponse);
    service.addBook().then(function (data) {
      expect(data).toEqual(mockResponse);
    })
  });
  it('put', function () {
    var mockResponse = { title: " Potter", year: 2061, favorite: true };
    httpBackend.expectPUT('http://localhost:4000/api/books', mockResponse);
    service.updateBook().then(function (data) {
      expect(data).toEqual(mockResponse);
    })
  });
  it('delete', function () {
    var mockResponse = { id: 1 };
    httpBackend.expectDELETE('http://localhost:4000/api/book/' + mockResponse);
    service.deleteBook().then(function (id) {
      expect(data).not.toEqual(mockResponse);
    })
  });
});








