var app = angular.module("bookApp", ["ngRoute"]);
app.config(function($routeProvider) {
    $routeProvider 
    .when("/showbooks", {
        templateUrl : "getTable.html" ,
        controller :"getTableController"
        
    })
     .when("/createnew", {
         templateUrl : "createBook.html",
         controller : "createController"
    })
     .when("/editBook/:id", {
         templateUrl : "editBook.html",
        controller :"editController"
    })
      .when("/deleteBook", {
          templateUrl:"getTable.html",
          controller :"getTableController"
    })
    
    .otherwise({redirectTo:'/showbooks'
})
    });
