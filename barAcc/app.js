/**
 * Created by kailash on 28/7/17.
 */
var app = angular.module('myApp', []);

app.controller('myCtrl', function($scope) {
    $scope.foo = 'This is from the controller!';
    $scope.AppJSON = {
        homeGallary: [
            {
                "title":"Title",
                "name":"Name",
                "path":"images/members/face.gif"
            },{
                "title":"Title",
                "name":"Name",
                "path":"images/members/face.gif"
            },{
                "title":"Title",
                "name":"Name",
                "path":"images/members/face.gif"
            },{
                "title":"Title",
                "name":"Name",
                "path":"images/members/face.gif"
            },{
                "title":"Title",
                "name":"Name",
                "path":"images/members/face.gif"
            },{
                "title":"Title",
                "name":"Name",
                "path":"images/members/face.gif"
            },{
                "title":"Title",
                "name":"Name",
                "path":"images/members/face.gif"
            },{
                "title":"Title",
                "name":"Name",
                "path":"images/members/face.gif"
            },{
                "title":"Title",
                "name":"Name",
                "path":"images/members/face.gif"
            }
        ],
        homeBanners:[
            {
                "path":"images/banner/1.jpg",
                "title":"no title"
            },{
                "path":"images/banner/2.jpg",
                "title":"no title"
            },{
                "path":"images/banner/3.jpg",
                "title":"no title"
            },
        ],
        "booleans":{
            "homepage":{
                "enabled":true
            },"aboutpage":{
                "enabled":true
            },
        }
    }

    $scope.w3_open = function() {
        document.getElementById("mySidebar").style.display = "block";
    }
    $scope.w3_close = function() {
        document.getElementById("mySidebar").style.display = "none";
    }

});


