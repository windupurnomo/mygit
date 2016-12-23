'use strict';
angular.module('app')

.controller('mainCtrl', function ($scope, $state){
	console.log('xx', $state.current.name);
});