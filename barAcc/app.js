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
        "adminPages":0,
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
            },{
                "code":"A-1",
                "name": "Mr. Akshay Latwal",
                "designation":"Joint Secretary (Press)",
                "sodowo":"son of daughter of wife of",
                "contact":"9458182118",
                "picPath":"images/members/face.gif"
            },{
                "code":"A-1",
                "name": "Mr. Bhuvnesh Joshi ",
                "designation":"Senior Executive Members",
                "sodowo":"son of daughter of wife of",
                "contact":"9411167576 ",
                "picPath":"images/members/face.gif"
            },{
                "code":"A-1",
                "name": "Miss. Mamta Joshi ",
                "designation":"Senior Executive Members",
                "sodowo":"son of daughter of wife of",
                "contact":"9412976587 ",
                "picPath":"images/members/face.gif"
            },{
                "code":"A-1",
                "name": "Mr. Ravi Joshi ",
                "designation":"Senior Executive Members",
                "sodowo":"son of daughter of wife of",
                "contact":"9412035907",
                "picPath":"images/members/face.gif"
            },{
                "code":"A-1",
                "name": "Mr. Saurabh Kumar Pandey ",
                "designation":"Senior Executive Members",
                "sodowo":"son of daughter of wife of",
                "contact":"9412086862",
                "picPath":"images/members/face.gif"
            },{
                "code":"A-1",
                "name": "Mr. Tarun Praskh Singh Takuli",
                "designation":"Senior Executive Members",
                "sodowo":"son of daughter of wife of",
                "contact":"94129952576 ",
                "picPath":"images/members/face.gif"
            },{
                "code":"A-1",
                "name": "Mr. Virendra Singh Rathor",
                "designation":"Senior Executive Members",
                "sodowo":"son of daughter of wife of",
                "contact":"9720129323",
                "picPath":"images/members/face.gif"
            },{
                "code":"A-1",
                "name": "Miss. Lovely Grover",
                "designation":"Jounior Executive Members (Re. Wo.)",
                "sodowo":"son of daughter of wife of",
                "contact":"9756727644",
                "picPath":"images/members/face.gif"
            },{
                "code":"A-1",
                "name": "Mr. Akram Parvez ",
                "designation":"Senior Executive Members",
                "sodowo":"son of daughter of wife of",
                "contact":"9319691015 ",
                "picPath":"images/members/face.gif"
            },{
                "code":"A-1",
                "name": "Miss. Anchit Khokhar ",
                "designation":"Senior Executive Members",
                "sodowo":"son of daughter of wife of",
                "contact":"9690485559 ",
                "picPath":"images/members/face.gif"
            },{
                "code":"A-1",
                "name": "Mr. Manoj K Sharma ",
                "designation":"Senior Executive Members",
                "sodowo":"son of daughter of wife of",
                "contact":"8439883941",
                "picPath":"images/members/face.gif"
            },{
                "code":"A-1",
                "name": "Mr. Prabhat ",
                "designation":"Senior Executive Members",
                "sodowo":"son of daughter of wife of",
                "contact":"9412086862 ",
                "picPath":"images/members/face.gif"
            }
        ],
        "sno": 1
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
            case "aimAndObjectives":
                $scope.AppJSON.pagetoShow = 3;
                break;
        }
        $scope.w3_close();

    }

});


