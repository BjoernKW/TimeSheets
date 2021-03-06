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
			ACCOUNT_NAME: 'Kontoname',
			API_KEY: 'API Key',
			PROJECT: 'Projekt',
			START_DATE: 'Beginn',
			END_DATE: 'Ende',
			ENTER_ACCOUNT_NAME: 'Bitte geben Sie Ihren Kontonamen ein.',
			ENTER_API_KEY: 'Bitte geben Sie Ihren API Key ein.',
			SELECT_PROJECT: 'Bitte wählen Sie ein Projekt aus.',
			ENTER_HEADLINE: 'Bitte geben Sie einen Titel ein.',
			SHOW_FORMS: 'Formulare anzeigen',
			HIDE_FORMS: 'Formulare verbergen',
			HIDE_BUTTONS: 'Buttons verbergen',
			TOTAL: 'Gesamt'
		});
		$translateProvider.preferredLanguage('de_DE');
	});
