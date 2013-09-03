'use strict';

angular.module('TimeSheetsApp').controller(
	'MainCtrl',
	function ($scope, $http) {
    $scope.awesomeThings = [
      { key: 'HTML5 Boilerplate', value: 'HTML5 Boilerplate' },
      { key: 'AngularJS', value: 'AngularJS' },
      { key: 'Karma', value: 'Karma' }
    ];

    $http.defaults.useXDomain = true;
    $http.get('https://' + $scope.domain + '.mite.yo.lk/projects.xml?api_key=' + $scope.apiKey)
	    .success(function(data) {
	    });
  }
);
