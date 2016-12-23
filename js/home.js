'use strict';
angular.module('app')

.controller('HomeCtrl', function($scope) {
    $scope.hello = "Hello world";
    $scope.coba = "hello";
    $scope.langs = ["Java", ".Net", "PHP"];
    $scope.form = {};
    $scope.save = function() {
    	alert("submited");
        $http.post("/asdfasdfadf", $scope.form).then(function(res) {
            console.log(res);
        });
    }
});
