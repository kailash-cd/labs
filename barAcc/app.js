/**
 * Created by kailash on 28/7/17.
 */
var app = angular.module('myApp', ['angularUtils.directives.dirPagination']);

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
            },
            "aboutpage":{
                "enabled":true
            },
            "membersdirectory":{
                "enabled":true
            },
        },
        "pagetoShow":0,
        "membersDirectory":[
            {
                "code":"A-1",
                "name": "Mr. Sayeed Nadeem Khurshid",
                "designation":"President",
                "sodowo":"son of daughter of wife of",
                "contact":"9410170326",
                "picPath":"images/members/face.gif"
            },{
                "code":"A-1",
                "name": "Mr. Rakesh Kumar Joshi",
                "designation":"Senior Vice President",
                "sodowo":"son of daughter of wife of",
                "contact":"9412983063",
                "picPath":"images/members/face.gif"
            },{
                "code":"A-1",
                "name": "Mr. Sunil Upadhyay",
                "designation":"Vice President",
                "sodowo":"son of daughter of wife of",
                "contact":"9456779161",
                "picPath":"images/members/face.gif"
            },{
                "code":"A-1",
                "name": "Mrs. Farida Siddiqui",
                "designation":"Vice President (Women Reserved)",
                "sodowo":"son of daughter of wife of",
                "contact":"9456779887",
                "picPath":"images/members/face.gif"
            },{
                "code":"A-1",
                "name": "Mr. Sandeep Tewari",
                "designation":"Secretart General",
                "sodowo":"son of daughter of wife of",
                "contact":"9719373192",
                "picPath":"images/members/face.gif"
            },{
                "code":"A-1",
                "name": "Mr. Kaushal Sah Jagati",
                "designation":"Treasurer",
                "sodowo":"son of daughter of wife of",
                "contact":"9837859063",
                "picPath":"images/members/face.gif"
            },{
                "code":"A-1",
                "name": "Mr. P.S. Bisht",
                "designation":"Joint Secretary (Admin)",
                "sodowo":"son of daughter of wife of",
                "contact":"9411167698",
                "picPath":"images/members/face.gif"
            },
        ]
    }

    $scope.w3_open = function() {
        document.getElementById("mySidebar").style.display = "block";
    }
    $scope.w3_close = function() {
        document.getElementById("mySidebar").style.display = "none";
    }

    $scope.navigationControl = function (page) {
        console.log("navigate to ",page);
        switch (page){
            case "home":
                $scope.AppJSON.pagetoShow = 0;
                break;
            case "about":
                $scope.AppJSON.pagetoShow = 1;
                break;
            case "members_directory":
                $scope.AppJSON.pagetoShow = 2;
                break;
        }

    }

});


