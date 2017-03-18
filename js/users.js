'use strict';
angular.module('app')
.controller("UsersCTRL", function($scope, $http, $state, URL){

	var subjects, classes = [];

	var init = function (){
		$http.get(URL + "/users").then(function (res){
			$scope.users = res.data;
		});
	};
	init();

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

	$scope.edit = function (id){

	}

	$scope.delete = function (id){
		var a = confirm("Apakah Anda yakin akan menghapus user?");
		if (a){
			$http.delete(URL + "/users/" + id).then(function (){
				init();
			});
		}
	}


	
});