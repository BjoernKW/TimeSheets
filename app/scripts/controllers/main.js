'use strict';

angular.module('TimeSheetsApp').controller(
	'MainCtrl',
	function ($scope, $http) {
    $scope.projects = [
      { key: 1, value: 'Project 1' },
      { key: 2, value: 'Project 2' },
      { key: 3, value: 'Project 3' }
    ];

    $scope.displayTimes = function() {
      console.log('https://' + $scope.domain + '.mite.yo.lk/projects.xml?api_key=' + $scope.apiKey)

      $http.defaults.useXDomain = true;
      $http.get('https://' + $scope.domain + '.mite.yo.lk/projects.xml?api_key=' + $scope.apiKey)
        .success(function(data) {
        });
    };
  }
);
