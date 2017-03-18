'use strict';
angular.module('app')
.controller("UserDetailCTRL", function($scope, $http, $state, $stateParams, URL){
	var subjects, classes = [];
	var id = $stateParams.id;

	if (id == null) alert("User tidak ditemukan");
	else{
		$http.get(URL + "/users/" + id).then(function (res){
			$scope.form = res.data;
		}, function (){
			alert("User tidak ditemukan");
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