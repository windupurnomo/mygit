'use strict';
angular.module('app')

.controller('PassengerCtrl', function($scope) {
    $scope.passengers = [
        { check: true, name: 'Mr Windu Purnomo' },
        { check: false, name: 'Mr Zinedine Irhab Purnomo' },
        { check: false, name: 'Mrs Zara Tabita Kinanti' },
        { check: false, name: 'Mrs Zanjabila Afiza Bendari' },
        { check: false, name: 'Mrs Siti Hapshoh' }
    ]
});
