describe('Controller tests', function() {
    beforeEach(module('bookApp'));
  
    var $controller,$location;
  
    beforeEach(inject(function (_$httpBackend_, _$route_, _$location_, $rootScope,_$controller_) {
      
      $httpBackend = _$httpBackend_;
      $route = _$route_;
      $location = _$location_;
       $controller = _$controller_;
      $scope = $rootScope.$new();
  
    }));
  
    it('should load the table', function(){
    var controller = $controller('createController', { $scope: $scope }); 
          $scope.add();
        //expect(1).toBe(2);
         expect($location.path()).toBe('/showbooks');     
  });
  it('should load the table', function(){
      var controller = $controller('editController', { $scope: $scope });
            $scope.save();      
          //expect(1).toBe(2);
           expect($location.path()).toBe('/showbooks');
        
    });
    
      });
  