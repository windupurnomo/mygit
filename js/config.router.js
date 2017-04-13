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
        templateUrl: 'tpl/users.html',
        controller: "UsersCTRL"
    })

    .state('user', {
        url: '/user/:id',
        templateUrl: 'tpl/user.html',
        controller: "UserCTRL"
    })

    .state('user-detail', {
        url: '/user-detail/:id',
        templateUrl: 'tpl/user-detail.html',
        controller: "UserDetailCTRL"
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
        templateUrl: 'tpl/exams.html',
        controller: "ExamsCTRL"
    })

    .state('myexams', {
        url: '/myexams/:id',
        templateUrl: 'tpl/myexams.html',
        controller: "MyexamsCTRL"
    })

    .state('myexam', {
        url: '/myexam/:id',
        templateUrl: 'tpl/myexam.html',
        controller: "MyexamCTRL"
    })

    .state('exam-detail', {
        url: '/exam-detail/:id',
        templateUrl: 'tpl/exam-detail.html',
        controller: "ExamDetailCTRL"
    })

    .state('exam', {
        url: '/exam/:id',
        templateUrl: 'tpl/exam.html',
        controller: "ExamCTRL"
    })
});
