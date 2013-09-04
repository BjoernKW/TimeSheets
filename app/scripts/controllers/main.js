'use strict';

angular.module('TimeSheetsApp').controller(
	'MainCtrl',
	function ($scope, $http, $store) {
    $store.bind($scope, 'accountName');
    $store.bind($scope, 'apiKey');
    $store.bind($scope, 'projects');
    $store.bind($scope, 'project');
    $store.bind($scope, 'projectName');
    $store.bind($scope, 'showProjectHeadline');
    $store.bind($scope, 'startDate');
    $store.bind($scope, 'endDate');
    $store.bind($scope, 'displayStartDate');
    $store.bind($scope, 'displayEndDate');
    $store.bind($scope, 'timeEntries');
    $store.bind($scope, 'totalMinutes');
    $scope.viewType = 'ANYTHING';

    var formatDateForDisplay = function(date) {
      return ('0' + date.getDate()).slice(-2) + '.' + ('0' + (date.getMonth() + 1)).slice(-2) + '.' + date.getFullYear();
    };

    var formatDate = function(date) {
      return date.getFullYear() + '-' + ('0' + (date.getMonth() + 1)).slice(-2) + '-' + ('0' + date.getDate()).slice(-2);
    };

    var today = new Date();
    var defaultDate = formatDate(today);

    $scope.currentYear = today.getFullYear();

    if (!$scope.startDate) {
      $scope.startDate = defaultDate;
    }
    if (!$scope.endDate) {
      $scope.endDate = defaultDate;
    }

    if (!$scope.showProjectHeadline) {
      $scope.showProjectHeadline = false;
    }

    var mite;

    $scope.login = function() {
      var projects = [];

      mite = new Mite({ account: $scope.accountName, api_key: $scope.apiKey });

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
      var timeEntries = [];
      var totalMinutes = 0;

      if (!mite) {
        mite = new Mite({ account: $scope.accountName, api_key: $scope.apiKey });
      }

      mite.Project.find($scope.project, function(data) {
        $scope.$apply(function() {
          $scope.projectName = data.project.customer_name + ': ' + data.project.name;
          $scope.displayStartDate = formatDateForDisplay(new Date($scope.startDate));
          $scope.displayEndDate = formatDateForDisplay(new Date($scope.endDate));
          $scope.showProjectHeadline = true;
        });
      })

      mite.TimeEntry.all({ project_id: $scope.project, from: $scope.startDate, to: $scope.endDate}, function(data) {
        angular.forEach(data, function(object) {
          var date = new Date(object.time_entry.date_at);
          var formattedDate = formatDateForDisplay(date);
          
          this.push({ userName: object.time_entry.user_name, date: formattedDate, hours: object.time_entry.minutes / 60 });
          totalMinutes += object.time_entry.minutes;
        }, timeEntries);
        $scope.$apply(function() {
          $scope.timeEntries = timeEntries;
          $scope.totalMinutes = totalMinutes;
        });
      });
    };
  }
);
