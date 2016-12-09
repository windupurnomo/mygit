'use strict';
angular.module('app')

.controller('HomeCtrl', function($scope, $state) {
    var numbers = [],
        letters = [],
        temp = [],
        backspace = 'backspace',
        clear = 'clear',
        done = 'done',
        full = 'full';
    $scope.keyboards = [];
    for (var i = 1; i <= 10; i++) {
        if (i === 10) numbers.push(0);
        else numbers.push(i);
    }
    $scope.keyboards.push(numbers);
    for (var i = 1; i <= 26; i++) {
        if (i % 9 === 0) {
            $scope.keyboards.push(letters);
            letters = [];
            letters.push(String.fromCharCode(i + 64));
        } else
            letters.push(String.fromCharCode(i + 64));
    }
    $scope.keyboards.push(letters);
    $scope.keyboards.push([',', '.', '/', '-', backspace, clear, done]);


    $scope.bookingCode = "";
    $scope.lastName = "";
    $scope.current = 0;

    $scope.type = function(char) {
        var del = char === backspace,
            cls = char === clear,
            isDone = char === done,
            a = $scope.bookingCode.slice(0, -1),
            b = $scope.lastName.slice(0, -1),
            click1 = new Audio('assets/click.ogg'),
            click2 = new Audio('assets/whistle.ogg');
        if (cls || del || isDone) click2.play();
        else click1.play();

        if (isDone) exec();
        else if ($scope.current === 0) {
            if (del) $scope.bookingCode = a;
            else if (cls) $scope.bookingCode = "";
            else $scope.bookingCode += char;
        } else if ($scope.current === 1) {
            if (del) $scope.lastName = b;
            else if (cls) $scope.lastName = "";
            else $scope.lastName += char;
        }
    }

    $scope.next = function() {
        if ($scope.bookingCode === "") {

        } else if ($scope.lastName === "") {

        } else {
            $state.go('route');
        }
    }

    var exec = function() {
        var command = $scope.bookingCode;
        switch (command) {
            case ".FULL":
                fullscreen();
                $scope.bookingCode = "";
                break;
        }
        $scope.next();
    }

    var fullscreen = function() {
        var el = document.documentElement; // document.body;
        // Supports most browsers and their versions.
        var requestMethod = el.requestFullScreen || el.webkitRequestFullScreen || el.mozRequestFullScreen || el.msRequestFullScreen;
        if (requestMethod) {
            // Native full screen.
            requestMethod.call(el);
        } else if (typeof window.ActiveXObject !== "undefined") {
            // Older IE.
            var wscript = new ActiveXObject("WScript.Shell");
            if (wscript !== null) {
                wscript.SendKeys("{F11}");
            }
        }
    }

    var fullscreenPartial = function() {
        var elem = document.getElementById("body");
        if (elem.requestFullscreen) {
            elem.requestFullscreen();
        } else if (elem.msRequestFullscreen) {
            elem.msRequestFullscreen();
        } else if (elem.mozRequestFullScreen) {
            elem.mozRequestFullScreen();
        } else if (elem.webkitRequestFullscreen) {
            elem.webkitRequestFullscreen();
        }
    }
});
