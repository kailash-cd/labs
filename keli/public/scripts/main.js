require.config({
    baseUrl: 'scripts/lib',
    paths :{
        /*Libraries */
        'app' : '../app/app',
        'angular' :'angular/angular.min',
        'jquery' : 'jquery/dist/jquery.min',
        'ngRoute' : 'angular-route/angular-route.min',
		'LocalStorageModule' : 'angular-local-storage/dist/angular-local-storage.min',
        'ngPagination':'angularUtils-master/src/directives/pagination/dirPagination',
        /*Services*/
        'Util':'../app/services/Util',
        /*Directive*/
        /*Controllers*/
        'HomeCtrl':'../app/controllers/HomeCtrl',
        'NavCtrl':'../app/controllers/NavCtrl',
        'AboutController':'../app/controllers/AboutController',
        'BlogController':'../app/controllers/BlogController',
        'CounsellorsCtrl':'../app/controllers/CounsellorsCtrl',
    },
    shim: {
        'angular': {
            exports: 'angular'
        },
        'ngRoute' :{
            deps: ['angular'],
            exports : 'ngRoute'
        },
		'LocalStorageModule' :{
            deps: ['angular'],
            exports : 'LocalStorageModule'
        },
        'ngPagination':{
            deps:['angular'],
            exports:'ngPagination'

        }



    }
});


require(['require','jquery','angular','ngRoute','app','LocalStorageModule','ngPagination'], function () {
    angular.element(document).ready(function() {
        angular.bootstrap(document, ['mainApp']);
    });
});