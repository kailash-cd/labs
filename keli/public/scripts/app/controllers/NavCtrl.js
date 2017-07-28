/**
 * Created by kailash on 6/5/17.
 */
define(['angular'],function(angular){
    'use strict';
    var NavCtrl = angular.module('NavCtrl', []);
    NavCtrl.controller('NavCtrl', ['localStorageService','$window','$location', '$rootScope', '$scope',
        '$log','$http','$timeout',
        function (localStorageService, $window,$location, $rootScope, $scope, $log,$http,$timeout) {
            $scope.openNav = function () {
                document.getElementById("mySidenav").style.width = "250px";
                document.getElementById("main").style.marginLeft = "250px";
                document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
            }
            $scope.closeNav = function() {
                document.getElementById("mySidenav").style.width = "0";
                document.getElementById("main").style.marginLeft= "0";
                document.body.style.backgroundColor = "white";
            }

        }
    ]);
});
