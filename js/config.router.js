'use strict';
angular.module('app', ['ui.router'])

.constant("URL", "http://localhost:3000")

.config(function($stateProvider, $urlRouterProvider, $httpProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider.state('zcode', {
        url: '/',
        templateUrl: 'tpl/home.html'
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
        url: '/question/:id',
        templateUrl: 'tpl/question.html',
        controller: "QuestionCTRL"
    })

    .state('questions', {
        url: '/questions',
        templateUrl: 'tpl/questions.html',
        controller: "QuestionsCTRL"
    })

    .state('question-detail', {
        url: '/question-detail/:id',
        templateUrl: 'tpl/question-detail.html',
        controller: "QuestionDetailCTRL"
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
