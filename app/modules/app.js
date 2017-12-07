'use strict';

// Declare app level module which depends on views, and components
angular.module('memeStore', [
  'ngRoute',
  'memeStore.view1',
  'memeStore.view2',
  'memeStore.memes'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/memes'});
}]);
