angular.module('Myapp', ['ngMaterial', 'ngRoute', 'ngMessages', 'ngAnimate', 'Myapp.services', 'Myapp.travellersCtrl', 'Myapp.travellersDashboardCtrl'])

    .config(function ($routeProvider, $locationProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'app/travellersForm/traveller.html',
                controller: 'travellersCtrl',
            })
            .when('/app/dashboard', {
                templateUrl: 'app/travellersDashboard/travellersDashboard.html',
                controller: 'travellersDashboardCtrl',
            })
            .otherwise({ redirectTo: '/' });
        $locationProvider.html5Mode(true);
    })

    .run(function ($rootScope, $location, $window, $http) {
        $rootScope.$on('$routeChangeStart', function (event, nextRoute, currentRoute) {
            if ($location.url() == "/app/dashboard") {
                $location.path('/app/dashboard');
            }
            else {
                $location.path('/');
            }
        });
    })