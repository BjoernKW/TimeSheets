'use strict';

angular.module('TimeSheetsApp').controller(
	'MainCtrl',
	function ($scope, $http, $store) {
    $store.bind($scope, 'domain');
    $store.bind($scope, 'apiKey');
    $scope.viewType = 'ANYTHING';

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
