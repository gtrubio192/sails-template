angular.module('controllers', [app.services])
.controller('homeCtrl', function($scope){
    $scope.test = "Home";
})
.controller('loginCtrl', function($scope){    
    $scope.email = false;
    $scope.passwordExist = false;

    $scope.userValidation = function(){
        console.log("User Valid function");
        if($scope.userName.indexOf('.com') === -1){
//            console.log("keep checking");
        }
        else if(validator.isEmail($scope.userName)){
            console.log("Valid email");
            $scope.email = true;
        }
    }
    $scope.passValidation = function(){
        // password has to be a minimum of 6
        if(validator.isNull($scope.password)){
            console.log("Password not long enough");       
        }
        else{
            $scope.passwordExist = true;
        }
    }
    $scope.validation = function(){
        if($scope.email && $scope.passwordExist){
            var validLogin = {
                username: $scope.userName,
                password: $scope.password
            };
            console.log(validLogin);
        }
        else
            console.log("Errrrorr");
    }
})
.controller('registerCtrl', function($scope){
    $scope.userNameExist = false;
    $scope.email = false;
    $scope.passwordExist = false;

    $scope.emailValidation = function(){
        console.log("User Valid function");
        if($scope.emailName.indexOf('.com') === -1){
//            console.log("keep checking");
        }
        else if(validator.isEmail($scope.emailName)){
            console.log("Valid email");
            $scope.email = true;
        }
    }
    $scope.userValidation = function(){
        if(validator.isNull($scope.userName)){
            console.log("User name not long enough");       
        }
        else{
            $scope.userNameExist = true;
        }
    }
    $scope.passValidation = function(){
        // password has to be a minimum of 6
        if(validator.isNull($scope.password)){
            console.log("Password not long enough");       
        }
        else if($scope.password.length <=6){
            console.log("Password not long enough (6)");       
        }
        else{
            $scope.passwordExist = true;
        }
    }
    $scope.validation = function(){
        if($scope.email && $scope.passwordExist){
            var validLogin = {
                username: $scope.userName,
                email:    $scope.emailName,
                password: $scope.password
            };
            console.log(validLogin);
        }
        else
            console.log("Errrrorr");
    }
})
