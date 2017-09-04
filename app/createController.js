angular.module("bookApp").controller("createController",function($scope,$http,CRUDService,$location){
  $scope.add=function(bdk){
    CRUDService.addBook($scope.bdk, $scope.successFunction, $scope.failureFunction) 
    .success(function(data)
                {
                 $scope.bookArray=data;
                    $location.path('/showbooks');      
               })
                   .error(function(data){
                  $scope.error = "An error has occured while adding! " + data;  
                });
              };  
    // $scope.successFunction();
    // $scope.failureFunction();
 
    // $scope.successFunction = function(data){
    //   $scope.bookArray=data;
    //   $location.path('/showbooks');  
    // }
    // $scope.failureFunction = function(data){
    //   $scope.error = "An error has occured while adding! " + data;  
    // }
  
});




























//  angular.module("bookApp").controller('createController' ,function ($scope ,$http) {
//              $scope.add=function(bdk){
//                $http.post("http://localhost:4000/api/books",bdk)
//                .success(function(data){
//                   // alert("success");
//                    $scope.bookArray=data;
//                    window.location.href = '/#/showbooks';
                  
//                }).error(function(data){
//                  $scope.error = "An error has occured while adding! " + data;  
//                });
//              };           
// });


//-------------------------------------------------------------



 