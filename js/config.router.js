'use strict';
angular.module('app', ['ui.router'])

.config(function($stateProvider, $urlRouterProvider, $httpProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider.state('home', {
        url: '/',
        templateUrl: 'tpl/home.html',
        controller: 'HomeCtrl'
    })

    .state('about', {
        url: '/about',
        templateUrl: 'tpl/about.html',
        controller: 'AboutCtrl'
    })

    .state('help', {
        url: '/help',
        templateUrl: 'tpl/help.html'
    })

        .state('zcode', {
        url: '/zcode',
        templateUrl: 'tpl/zcode.html'
    })

});
