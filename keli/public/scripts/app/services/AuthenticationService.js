/**
 * Created by kailash on 27/10/16.
 */
define(['angular'], function(angular) {
    'use strict';


    var AuthenticationService = angular.module('AuthenticationService', []);

    AuthenticationService.service('AuthenticationService',['localStorageService',function(localStorageService){
        return {
            isLogged: function()
            {
                var authenticated = false;
                if(localStorageService.get("auth_token")!==null)
                    authenticated = true;

                return authenticated;
            },
            isAdminUser: function()
            {
                var userProfile = localStorageService.get("profile");
                if(userProfile.employeeTitle == undefined || userProfile.employeeTitle == null)
                    return false;
                else if(userProfile.employeeTitle === "Admin User")
                    return true;
                else
                    return false;
            },
            isFirstLogin: function(){
                var userName = localStorageService.get("userName");
                if(userName === undefined || userName === null)
                {
                    return false;}
                else{
                    return true;}
            }
        }
    }])
    return AuthenticationService;
});
