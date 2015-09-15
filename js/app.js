var app = angular.module('omdb', ['ngRoute']);


app.config(function ($routeProvider) {
  $routeProvider
    .when('/movies', {
      templateUrl: 'partials/movies.html',
      controller: 'MoviesCtrl'
    })
    .otherwise({redirectTo: '/'})
});
