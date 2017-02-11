var app = angular.module('searchApiContent', ['ui.router', 'home', 'configuration']);
app.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/home');
});
app.controller('MainCtrl', function($scope) {});
