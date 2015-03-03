angular.module('app', ['controllers', 'ui.router'])
.config(function($stateProvider){
    $stateProvider
    .state('home', {
        url:'/home',
        templateUrl: 'templates/home.html',
        controller: 'homeCtrl'
    })
    .state('login', {
        url:'/login',
        templateUrl: 'templates/login.html',
        controller: 'loginCtrl'
    })
    .state('register', {
        url:'/register',
        templateUrl: 'templates/register.html',
        controller: 'registerCtrl'
    });
    
})