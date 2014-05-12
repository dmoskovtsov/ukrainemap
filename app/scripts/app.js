'use strict';
angular.module('taskee', [
        'ngCookies',
        'ngResource',
        'ngSanitize',
        'd3',
        'ui.bootstrap',
        'ngRoute'
    ])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/main.html',
                controller: 'MainController'
            })
            .when('/about', {
                templateUrl: 'views/about.html'
            })
            .when('/help', {
                templateUrl: 'views/help.html'
            })
            .when('/contact', {
                templateUrl: 'views/contact.html'
            })
            .otherwise({
                redirectTo: '/'
            });
    });
