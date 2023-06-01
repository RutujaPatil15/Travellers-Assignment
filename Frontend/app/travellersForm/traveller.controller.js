angular.module('Myapp.travellersCtrl', [])

    .controller('travellersCtrl', function ($scope, $rootScope, $location, $http) {
        $scope.countries = ['India', 'Africa', 'Europe'];
        //This function is used to save form if it's valid
        $scope.save = function (form) {
            if (form.$valid) {
                let userObj = {
                    name: $scope.name,
                    email: $scope.email,
                    country: $scope.country,
                    noofuser: $scope.nooftraveller,
                    budget: $scope.budget
                }
                $http.post('/api/users/createuser', userObj).then(() => {
                    $location.path('/app/dashboard');
                    alert("Data added successfully");
                }).catch((error) => {
                    $location.path('/app/dashboard');
                    alert('Error while saving data', error);
                });
            }
        }
    });

