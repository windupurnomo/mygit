'use strict';
// Source: ./js/config.router.js
angular.module('app', ['ui.router'])

.config(['$stateProvider', '$urlRouterProvider', '$httpProvider', function($stateProvider, $urlRouterProvider, $httpProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider.state('home', {
        url: '/',
        templateUrl: 'tpl/home.html',
        controller: 'HomeCtrl'
    })

    .state('about', {
        url: '/about',
        templateUrl: 'tpl/about.html'
    })

    .state('help', {
        url: '/help',
        templateUrl: 'tpl/help.html'
    })

        .state('zcode', {
        url: '/zcode',
        templateUrl: 'tpl/zcode.html'
    })

}]);

// Source: ./js/home.js
angular.module('app')

.controller('HomeCtrl', ['$scope', function($scope) {
    $scope.hello = "Hello world";
    $scope.coba = "hello";
    $scope.langs = ["Java", ".Net", "PHP"];
    $scope.form = {};
    $scope.save = function() {
    	alert("submited");
        $http.post("/asdfasdfadf", $scope.form).then(function(res) {
            console.log(res);
        });
    }
}]);

// Source: ./js/main.js
angular.module('app')

.controller('mainCtrl', ['$scope', '$state', function ($scope, $state){
	console.log('xx', $state.current.name);
}]);