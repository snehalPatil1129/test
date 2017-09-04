
//---------------------
angular.module("bookApp").controller('getTableController' ,function ($scope ,$http,CRUDService,$routeParams,$location) { 
 
    CRUDService.getTab()
    .then(function(response){
      $scope.bookArray=response.data;
    })
 
});

// $http.get("http://localhost:4000/api/books")
// .then(function(response)
//   {
//      $scope.bookArray=response.data;
//   })
// //-------------------------------

// $scope.add=function(bdk){
//   CRUDService.addBook($scope.bdk) 
//   .success(function(data)
//               {
//                   //alert("success");
//                $scope.bookArray=data;
//                   $location.path('/showbooks');      
//              })
//                  .error(function(data){
//                 $scope.error = "An error has occured while adding! " + data;  
//               });
//             };  








//-----------------------------------
// angular.module("bookApp").controller('getTableController' ,function ($scope ,$http) {
            
//                  $http.get("http://localhost:4000/api/books")
//                 .then(function(response)
//                 {
//                 $scope.bookArray=response.data;
            
//                 })
              
//              $scope.delete = function (id) {     
//               $http.delete('http://localhost:4000/api/book/' + id).success(function (data) {
//             alert("Deleted successfully!!");
//             window.location.href = '/#/showbooks';
       
//      });
//              }             
// });

