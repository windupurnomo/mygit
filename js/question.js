'use strict';
angular.module('app')
.controller("QuestionCTRL", function($scope, $http, URL){
	$http.get(URL + "/subject").then(function (res){
		$scope.subjects = res.data;
	})
});