'use strict';

angular.module('TimeSheetsApp', ['pascalprecht.translate', 'ui.select2'])
.config(function ($routeProvider, $translateProvider) {
	$routeProvider
	.when('/', {
		templateUrl: 'views/main.html',
		controller: 'MainCtrl'
	})
	.otherwise({
		redirectTo: '/'
	});
	
	$translateProvider.translations('de_DE', {
		EMPLOYEE: 'Mitarbeiter',
		DATE: 'Datum',
		HOURS: 'Stunden'
	});
	$translateProvider.preferredLanguage('de_DE');
});
