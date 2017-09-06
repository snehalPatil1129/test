
 angular.module("bookApp").directive('tabDirective',function(){
    return{
        restrict:'EA',
        scope:{
            data:'='
        },
        templateUrl :'tabdirective.html',

        controller: function($scope,CRUDService,$location)
        {
            $scope.delete=function(id)
            {
                CRUDService.deleteBook(id) 
                  .then(function (data)
                    {
                        
                         $location.path('/');         
                    })
            };

        }
    }
});