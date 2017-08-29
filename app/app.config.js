'use strict';

angular
    .module('movieApp')
    .config(config);

function config($routeProvider) {
    $routeProvider.when('/movies', {
        template: '<movie-list></movie-list>'
    })
    .otherwise('/movies');
}