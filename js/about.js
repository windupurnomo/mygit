'use strict';
angular.module('app')

.controller('AboutCtrl', function ($scope, $http){
	$scope.form = {pilihan: []};
	$http.get("/js/data.json").then(function(res){
		$scope.soal = res.data;
	});
	$scope.finish = function (){
		var rightAnswer = 0;
		for(var i =0; i<$scope.soal.length; i++){
			if ($scope.soal[i].kunci === $scope.form.pilihan[i]){
				rightAnswer++;
			}
		}
		$scope.nilai = rightAnswer/$scope.soal.length * 100;
		alert("nilai anda: " + $scope.nilai);
	}
});