'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('TimeSheetsApp'));

  var MainCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
    });
  }));

  it('should attach projects to the scope', function () {
    expect(scope.projects.length).toBeGreaterThan(0);
  });
});
