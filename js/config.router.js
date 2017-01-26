'use strict';
angular.module('app', ['ui.router'])

.config(function($stateProvider, $urlRouterProvider, $httpProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider.state('zcode', {
        url: '/',
        templateUrl: 'tpl/zcode.html',
        controller: 'ZcodeCtrl'
    })

    .state('about', {
        url: '/about',
        templateUrl: 'tpl/about.html',
        controller: 'AboutCtrl'
    })

    .state('help', {
        url: '/help',
        templateUrl: 'tpl/help.html',
        controller: "HelpCtrl"
    })

        .state('home', {
        url: '/home',
        templateUrl: 'tpl/home.html'
    })

    .state('profile', {
        url: '/profile',
        templateUrl: 'tpl/profile.html'
    })

    .state('users', {
        url: '/users',
        templateUrl: 'tpl/users.html'
    })

    .state('user', {
        url: '/user',
        templateUrl: 'tpl/user.html'
    })

    .state('question', {
        url: '/question',
        templateUrl: 'tpl/question.html'
    })

    .state('questions', {
        url: '/questions',
        templateUrl: 'tpl/questions.html'
    })

    .state('question-detail', {
        url: '/question-detail',
        templateUrl: 'tpl/question-detail.html'
    })

    .state('exams', {
        url: '/exams',
        templateUrl: 'tpl/exams.html'
    })

    .state('myexams', {
        url: '/myexams',
        templateUrl: 'tpl/myexams.html'
    })

    .state('exam-detail', {
        url: '/exam-detail',
        templateUrl: 'tpl/exam-detail.html'
    })

    .state('exam', {
        url: '/exam',
        templateUrl: 'tpl/exam.html'
    })

});
