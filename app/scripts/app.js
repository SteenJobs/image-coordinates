/**
 * @ngdoc overview
 * @name coordinatesSelectorApp
 * @description
 * # coordinatesSelectorApp
 *
 * Main module of the application.
 */
angular
  .module('coordinatesSelectorApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'naif.base64',
    'ngFileUpload',
    'annotorious',
    'ui.bootstrap'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
