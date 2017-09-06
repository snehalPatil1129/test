var app=angular.module("bookApp");
    app.service('CRUDService', function ($http) {
        this.getTab=function(){
              var promise=$http.get("http://localhost:4000/api/books").then(function(response){
                  return response.data;
              });
              return promise;

        };
        this.addBook=function(bdk){
            books=bdk;
              
           var promise = $http.post('http://localhost:4000/api/books',books).then(function (response){
               return response.books;
           });
           return promise;       
        }; 
        this.deleteBook=function(id){
            
           var promise= $http.delete('http://localhost:4000/api/book/' + id).then(function (response){
               return response.data;
           });
             return promise;
        };
        this.getSingleBook=function(id){
           
           
            var promise=$http.get('http://localhost:4000/api/book/'+ id).then(function(response){
                return response.data;
            });
            return promise;
        };
        this.updateBook=function(bdk){
            data=bdk;
         
           var promise= $http.put('http://localhost:4000/api/books' , data).then(function(response){
               return response.data;
           },
           function(response)
           {
               return response.data;
           }); 
           return promise;
        };
});