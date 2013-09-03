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
    console.log(defaultDateValue);

    $scope.startDate = defaultDateValue;
    $scope.endDate = defaultDateValue;

    $scope.projects = [
      { key: 1, value: 'Project 1' },
      { key: 2, value: 'Project 2' },
      { key: 3, value: 'Project 3' }
    ];

    $scope.displayTimes = function() {
      $http.defaults.useXDomain = true;
      $http.get('https://' + $scope.domain + '.mite.yo.lk/projects.xml?api_key=' + $scope.apiKey)
        .success(function(data) {
        });
    };
  }
);
