var appModule = angular.module('App', []);
appModule.controller('HelloController', ['$scope', '$http', function ($scope, $http) {

    $scope.inputFirstName = '';
    $scope.inputLastName = '';

    $scope.getFullName = function() {
        return $scope.inputFirstName + ' ' + $scope.inputLastName;
    };

    $scope.persons = [];

    $scope.createPerson = function() {
        $scope.addPerson($scope.inputFirstName, $scope.inputLastName);
    };

    $scope.addPerson = function(firstName, lastName) {
    	var p = { firstName: firstName, lastName: lastName };
        $scope.persons.push(p);
    };

    $http.get('api/persons').success(function(data, status, headers, conf) {
        for(var i = 0; i < data.length; ++i) {
            var json = data[i];
            $scope.addPerson(json.firstName, json.lastName);
        }
    });

}]);
