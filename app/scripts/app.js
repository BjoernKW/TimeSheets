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
			HOURS: 'Stunden',
			SUBMIT: 'Abschicken',
			DOMAIN: 'Domain',
			API_KEY: 'API Key',
			PROJECT: 'Projekt',
			ENTER_DOMAIN: 'Bitte geben Sie Ihre Domain ein.',
			ENTER_API_KEY: 'Bitte geben Sie Ihren API Key ein.',
			SELECT_PROJECT: 'Bitte wählen Sie ein Projekt aus.',
		});
		$translateProvider.preferredLanguage('de_DE');
	});
