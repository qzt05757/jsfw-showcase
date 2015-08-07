var appModule = angular.module('App', []);
appModule.controller('MainController', ['$scope', '$http', function ($scope, $http) {
    function Person(first, last) {
        this.firstName = first;
        this.lastName =  last;
    };

    $scope.inputFirstName = '';
    $scope.inputLastName = '';

    $scope.getFullName = function() {
        return $scope.inputFirstName + ' ' + $scope.getLastName;
    };

    $scope.persons = [];

    $scope.addPerson = function() {
        var p = new Person($scope.firstName, $scope.lastName);
        $scope.persons.push(p);
    };
}]);


     