
define([
    'angular',
    'ngRoute',
    'LocalStorageModule',
    'Util',
    'ngPagination',
    'HomeCtrl',
    'NavCtrl',
    'AboutController',
    'BlogController',
    'CounsellorsCtrl'

], function (angular) {
    'use strict';

    var mainApp =  angular.module('mainApp', [
        'ngRoute',
        'LocalStorageModule',
        'Util',
        'ngPagination',
        'HomeCtrl',
        'NavCtrl',
        'AboutController',
        'BlogController',
        'CounsellorsCtrl'
    ]);

    mainApp.config(['localStorageServiceProvider', function(localStorageServiceProvider){
        localStorageServiceProvider.setPrefix('k_');
    }])


    mainApp.config(['$routeProvider','$locationProvider',
        function($routeProvider,$locationProvider) {
        $locationProvider.hashPrefix("");
        $routeProvider
                .when('/home', {
                    templateUrl : 'partials/shared/home.html',
                    controller  : 'HomeCtrl'
                })
                .when('/blog', {
                    templateUrl : 'partials/shared/blogs.html',
                    controller  : 'BlogController'
                })
                .when('/about', {
                    templateUrl : 'partials/shared/about.html',
                    controller  : 'AboutController'
                })
                .when('/whoweare', {
                    templateUrl : 'partials/shared/about.html',
                    controller  : 'AboutController'
                })
                .when('/contact', {
                    templateUrl : 'partials/shared/contact.html',
                    controller  : 'ContactController'
                })
                .when('/counsellors', {
                    templateUrl : 'partials/shared/counsellors.html',
                    controller  : 'CounsellorsCtrl'
                })
                .otherwise({redirectTo: '/home'});


        }

    ]);


    mainApp.run(['$rootScope','$location','Util',
        function($rootScope, $location,AuthenticationService,Util) {
         $rootScope.app = {
                name: 'Ediya',
                description: 'Powered by Ediya',
                year: ((new Date()).getFullYear()),
              };
            console.log("%c2. Application deployed successfully.\n"+"\t App Description: "+$rootScope.app.name+"\n \t"+$rootScope.app.description+"@"+$rootScope.app.year+"\n \t ==========================\n", "color: green; font-size:12px;");

            /*//Authentication setting --
            $rootScope.$on("$routeChangeStart", function(event, nextRoute, currentRoute) {
                if (nextRoute.access===undefined) {
                    Util.goTologin();
                }else if (nextRoute.access.requiredLogin && !AuthenticationService.isLogged()) {
                    Util.goTologin();
                }else if(AuthenticationService.isLogged() && nextRoute.$$route.originalPath ==="/login"){
                    $location.path("/home");
                }
            });*/
    }]);
    return mainApp;
});




