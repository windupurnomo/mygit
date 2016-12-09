'use strict';
angular.module('app')

.controller('RouteCtrl', function($scope, $state) {
    $scope.next = function() {
        $state.go("passenger");
    }
});
