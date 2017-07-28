/**
 * Created by kailash on 10/6/17.
 */
define(['angular'],function(angular){
    'use strict';
    var CounsellorsCtrl = angular.module('CounsellorsCtrl', []);
    CounsellorsCtrl.controller('CounsellorsCtrl', ['localStorageService','$window','$location', '$rootScope', '$scope',
        '$log','$http','$timeout',
        function (localStorageService, $window,$location, $rootScope, $scope, $log,$http,$timeout) {
            $scope.message = 'CounsellorsCtrl !';

        }
    ]);
});
