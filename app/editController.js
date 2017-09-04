angular.module("bookApp").controller('editController' ,function ($scope ,$http,CRUDService,$routeParams,$location) {
    $scope.bdk = {};
    $scope.edit=function(id)
    {     
        CRUDService.getSingleBook(id)
        .success(function (responce)
        {               
                $scope.bdk=responce;                  
        });
    };
    
    $scope.edit($routeParams.id);
    
    $scope.save=function(bdk)
    {   
        CRUDService.updateBook($scope.bdk)
        .success(function (data) 
        {
            //alert("Updated successfully!!");            
            $location.path('/showbooks');          
        })
        .error(function (data)
        {
            $scope.error = "An Error has occured while updating! " + data;                
        });

    };
   
});




















// angular.module("bookApp").controller('editController' ,function ($scope ,$http,$location,$routeParams) {
//      //console.log($routeParams.id);
//   $scope.edit = function (id) {          
//         $http.get('http://localhost:4000/api/book/'+ id)
//         .success(function (data) {               
//             $scope.bdk = data;          
//         })
//         .error(function () {
//             $scope.error = "An Error has occured while loading posts!";               
//         });         
//     }
//     $scope.edit($routeParams.id); 
//     $scope.save = function (bdk) {                 
//         $http.put('http://localhost:4000/api/books' , bdk )
//          .success(function (data) {
//             alert("Updated successfully!!");             
         
//             $location.path('/showbooks');          
//         }).error(function (data) {
//             $scope.error = "An Error has occured while updating! " + data;                
//         });
//     };
//  });



 //---------------------------------------------------------------------------------