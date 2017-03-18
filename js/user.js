'use strict';
angular.module('app')
.controller("UserCTRL", function($scope, $http, $state, $stateParams, URL){
	var id = $stateParams.id;
	$scope.roles=['ADMIN', 'TEACHER', 'STUDENT'];
	$scope.form={};
	if (id){
		$http.get(URL + "/users/" + id).then(function (res){
			$scope.form = res.data;
		});
	}
	
	$http.get(URL + "/subject").then(function (res){
		$scope.subjects = res.data;
	});

	$http.get(URL + "/class").then(function (res){
		$scope.classes = res.data;
	});

	$scope.create = function (){
		if (id == ""){
			console.log($scope.form)
			$http.post(URL + "/users", $scope.form).then(function (res){
				$state.go("user-detail", {id: res.data.id});
			});
		}else{
			$http.put(URL + "/users/" + id, $scope.form).then(function (res){
				$state.go("user-detail", {id: id});
			});
		}
	}
});