'use strict';
angular.module('app')
.controller("QuestionCTRL", function($scope, $http, $state, $stateParams, URL){
	var id = $stateParams.id;
	if (id){
		$http.get(URL + "/questions/" + id).then(function (res){
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
		if (id == null){
			$http.post(URL + "/questions", $scope.form).then(function (res){
				var a = confirm("Soal berhasil dibuat. Apakah akan membuat Soal lagi?");
				if (!a){
					$state.go("question-detail");
				}else{
					for (var i in $scope.form){
						if (i !== 'subject' && i !== 'class') $scope.form[i] = null;
					}
				}
			});
		}else{
			$http.put(URL + "/questions/" + id, $scope.form).then(function (res){
				var a = confirm("Soal berhasil diubah. Apakah akan membuat Soal lagi?");
				if (!a){
					$state.go("question-detail", {id: id});
				}else{
					id = null;
					for (var i in $scope.form){
						if (i !== 'subject' && i !== 'class') $scope.form[i] = null;
					}
				}
			});
		}
	}
});