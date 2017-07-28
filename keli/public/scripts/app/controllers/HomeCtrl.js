define(['angular'],function(angular){
    'use strict';
    var HomeCtrl = angular.module('HomeCtrl', []);
    HomeCtrl.controller('HomeCtrl', ['localStorageService','$window','$location', '$rootScope', '$scope',
        '$log','$http','$timeout',
        function (localStorageService, $window,$location, $rootScope, $scope, $log,$http,$timeout) {
            $scope.message = 'Home !';

        }
    ]);
});