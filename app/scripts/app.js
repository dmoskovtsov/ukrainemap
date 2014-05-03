'use strict';

angular.module('ukrainemapApp', [
        'ngCookies',
        'ngResource',
        'ngSanitize',
        'd3',
        'ngRoute'
    ])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/main.html',
                controller: 'MainCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
    });
