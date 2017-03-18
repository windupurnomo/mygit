'use strict';
angular.module('app')
.controller("ExamDetailCTRL", function($scope, $http, $state, $stateParams, URL){
	var subjects, classes = [];
	var id = $stateParams.id;

	if (id == null) alert("Data tidak ditemukan");
	else{
		$http.get(URL + "/exams/" + id).then(function (res){
			$scope.form = res.data;
		}, function (){
			alert("Data tidak ditemukan");
		});
	}

	$http.get(URL + "/subject").then(function (res){
		subjects = res.data;
	});

	$http.get(URL + "/class").then(function (res){
		classes = res.data;
	});

	$scope.getSubject = function (id){
		for(var i in subjects){
			if (id === subjects[i].id) return subjects[i];
		}
		return null;
	}

	$scope.getClass = function (id){
		for (var i in classes){
			if (id === classes[i].id) return classes[i];
		}
		return null;
	}
});