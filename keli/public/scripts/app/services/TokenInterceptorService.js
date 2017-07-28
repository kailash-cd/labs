/**
 * Created by kailash on 27/10/16.
 */
define(['angular'], function(angular) {
    'use strict';

    var TokenInterceptorService = angular.module('TokenInterceptorService', []);

    TokenInterceptorService.service('TokenInterceptorService',['$q','$location','localStorageService', '$window', '$log','$injector',
        function ($q, $location, localStorageService, $window, $log,$injector)
        {
            return {
                request: function (config) {
                    $log.debug("Setting interceptors");
                    config.headers = config.headers || {};
                    if(localStorageService.get('appName') != null) {
                        config.headers.AppName = localStorageService.get('appName');
                    } else {
                        config.headers.AppName = "Chalk Portal"; // default app
                    }

                    if(localStorageService.get("auth_token") && config.url !== "/api/refresh")
                    {
                        //  $log.info("localStorageService",localStorageService.get("auth_token"))
                        config.headers.Authorization = 'Bearer ' +localStorageService.get("auth_token");
                    }else {
                        // $log.info("localStorageService",localStorageService.get("auth_token"))
                        $log.info("Could not set token to header");
                    }
                    return config;
                },

                response: function (response) {
                    $log.debug("@response  :: ",response)
                    if(null != response.data && response.config.url === "/api/loginapi") {
                        console.log("REsponse in interceptor ::: ", response);
                        localStorageService.set('auth_token',response.data.auth_token);
                        localStorageService.set('refreshToken',response.data.refreshToken);
                    }
                    return response || $q.when(response);
                },
                responseError : function (response) {
                    //console.log("HTTP INTERCEPTER :: "+JSON.stringify(response));
                    var deferred = $q.defer();
                    if(response.status === 401 && (response.config.errorCount === undefined || response.config.errorCount < 1)) {
                        if(response.config.errorCount === undefined) {
                            response.config.errorCount = 0;
                        } else {
                            response.config.errorCount += 1;
                        }
                        var token = localStorageService.get('refreshToken');
                        $injector.get("$http").post( '/api/refresh', {refreshToken: token}).then(function(r) {
                            //console.log("Here in Refresh REsponse :: ", r);
                            if (r.status === 200) {
                                localStorageService.set("auth_token", r.data.data.response.token);
                                localStorageService.set("refreshToken", r.data.data.response.refreshToken);
                                response.config.headers.Authorization = 'Bearer '+localStorageService.get("auth_token");
                                response.config.headers.token = localStorageService.get("auth_token");
                                $injector.get("$http")(response.config).then(function(resp) {
                                    deferred.resolve(resp);
                                },function(resp) {
                                    deferred.reject();
                                });
                            } else {
                                deferred.reject();
                            }
                        }, function(response) {
                            deferred.reject();
                            console.log("Promise Failed ::: ", status);
                            localStorageService.clearAll();
                            $location.path("/login");
                            return;
                        });
                        return deferred.promise;
                    } else {
                        if(response.config.errorCount != undefined && response.config.errorCount >= 0) {
                            console.log("Promise Failed ::: ", status);
                            localStorageService.clearAll();
                            $location.path("/login");
                        }
                        return $q.reject(response);
                    }
                }
            };
        }]);
    return TokenInterceptorService;
});
