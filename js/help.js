'use strict';
angular.module('app')

.controller('HelpCtrl', function ($scope){
     $scope.buah =["apel", "anggur", "tomat"]
     $scope.person=[{
     	nama : "akmal",
     	hp : "08219762352",
     	nilai : 100,
     },{
     	nama : "amin",
     	hp : "08973832",
     	nilai : 90,
     },{
     	nama  : "fajar",
     	hp : "0827382",
     	nilai : 80,
     }]
});