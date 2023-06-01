angular.module('Myapp.travellersDashboardCtrl', [])

    .controller('travellersDashboardCtrl', function ($location, $scope, $http, $rootScope, $window) {
        /*This function is used to get Data from database*/
        $scope.viewData = function () {
            $http.get('/api/users/getdata').then(function (response) {
                console.log(response.data);
                $scope.userdata = response.data;
            }, function (error) {
                $location.path('/');
            });
        }
        $scope.viewData();

        /*This function is used to go to home page*/
        $scope.gotohome = function () {
            $location.path('/');
        }
    });
