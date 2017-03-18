'use strict';
angular.module('app')
.controller("ExamCTRL", function($scope, $http, $state, $stateParams, URL){
	var id = $stateParams.id;
	$scope.form={};
	if (id){
		$http.get(URL + "/exams/" + id).then(function (res){
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
			$http.post(URL + "/exams", $scope.form).then(function (res){
				$state.go("user-detail", {id: res.data.id});
			});
		}else{
			$http.put(URL + "/exams/" + id, $scope.form).then(function (res){
				$state.go("exam-detail", {id: id});
			});
		}
	}
});