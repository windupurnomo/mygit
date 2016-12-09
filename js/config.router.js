'use strict';
angular.module('app', ['ui.router'])

.config(function($stateProvider, $urlRouterProvider, $httpProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider.state('home', {
        url: '/',
        templateUrl: 'tpl/home.html',
        controller: 'HomeCtrl'
    })

    .state('route', {
        url: '/route',
        templateUrl: 'tpl/route.html',
        controller: 'RouteCtrl'
    })

    .state('passenger', {
        url: '/passenger',
        templateUrl: 'tpl/passenger.html',
        controller: 'PassengerCtrl'
    })

});
