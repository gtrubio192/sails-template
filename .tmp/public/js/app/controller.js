angular.module('controllers', [])
.controller('homeCtrl', function($scope){
    $scope.test = "Home";
})
.controller('loginCtrl', function($scope){
    
      if(validator.isEmail('$scope.userName')){
          
      }

})
.controller('registerCtrl', function($scope){
    
})
.controller('dashboardCtrl', function($scope, $http){
    $scope.assignments = [];
    
    $http.get('/assignment?sort=id DESC')
    .success(function(assignments){
        $scope.assignments = assignments;
    })
    .error(function(err){
        console.log('err');
        console.log(err);
    });
});
