'use strict';

angular.module('TimeSheetsApp', ['ngCookies', 'pascalprecht.translate', 'ui.select2', 'localStorage', 'ui.date'])
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
			LOGIN: 'Anmelden',
			SUBMIT: 'Abschicken',
			DOMAIN: 'Domain',
			API_KEY: 'API Key',
			PROJECT: 'Projekt',
			START_DATE: 'Beginn',
			END_DATE: 'Ende',
			ENTER_DOMAIN: 'Bitte geben Sie Ihre Domain ein.',
			ENTER_API_KEY: 'Bitte geben Sie Ihren API Key ein.',
			SELECT_PROJECT: 'Bitte wählen Sie ein Projekt aus.',
		});
		$translateProvider.preferredLanguage('de_DE');
	});
