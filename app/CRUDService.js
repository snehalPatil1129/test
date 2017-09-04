var app=angular.module("bookApp");
    app.service('CRUDService', function ($http) {
        this.getTab=function(){
               return $http.get("http://localhost:4000/api/books");
              

        };
        this.addBook=function(bdk, successFunction, failureFunction){
              
            return $http.post('http://localhost:4000/api/books',bdk);
               
        }; 
        this.deleteBook=function(id){
            
            return $http.delete('http://localhost:4000/api/book/' + id);
            
        };
        this.getSingleBook=function(id){
           
            return $http.get('http://localhost:4000/api/book/'+ id);
            
        };
        this.updateBook=function(bdk){

           return $http.put('http://localhost:4000/api/books' , bdk); 

        };
});