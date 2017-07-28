/**
 * Created by kailash on 10/6/17.
 */
define(['angular'],function(angular){
    'use strict';
    var AboutController = angular.module('AboutController', []);
    AboutController.controller('AboutController', ['localStorageService','$window','$location', '$rootScope', '$scope',
        '$log','$http','$timeout',
        function (localStorageService, $window,$location, $rootScope, $scope, $log,$http,$timeout) {
            $scope.message = 'AboutController !';

        }
    ]);
});
