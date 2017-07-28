/**
 * Created by kailash on 28/7/17.
 */
var app = angular.module('myApp', []);

app.controller('myCtrl', function($scope) {
    $scope.foo = 'This is from the controller!';

    $scope.w3_open = function() {
        document.getElementById("mySidebar").style.display = "block";
    }
    $scope.w3_close = function() {
        document.getElementById("mySidebar").style.display = "none";
    }

});


