'use strict';

angular.module('TimeSheetsApp').controller(
	'MainCtrl',
	function ($scope, $http, $store) {
    $store.bind($scope, 'domain');
    $store.bind($scope, 'apiKey');
    $store.bind($scope, 'startDate');
    $store.bind($scope, 'endDate');
    $scope.viewType = 'ANYTHING';

    var today = new Date();
    var defaultDateValue = today.getFullYear() + '-' + ('0' + (today.getMonth() + 1)).slice(-2) + '-' + ('0' + today.getDate()).slice(-2);

    $scope.startDate = defaultDateValue;
    $scope.endDate = defaultDateValue;

    $scope.projects = [];

    var mite;

    $scope.login = function() {
      var projects = [];

      mite = new Mite({ account: $scope.domain, api_key: $scope.apiKey });
      mite.Project.active(function(data) {
        angular.forEach(data, function(object) {
          this.push({ key: object.project.id, value: object.project.customer_name + ': ' + object.project.name });
        }, projects);
        $scope.$apply(function() {
          $scope.projects = projects;
        });
      });
    };

    $scope.displayTimes = function() {
      var mite = new Mite({ account: $scope.domain, api_key: $scope.apiKey });
      mite.myself(function(data) {
        alert('Hello, ' + data.user.name + '!')
      });
    };
  }
);
