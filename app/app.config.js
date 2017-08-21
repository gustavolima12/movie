angular
    .module('movieApp')
    .config(config);

function config($routeProvider) {
    $routeProvider.when('/movies', {
        templateUrl: '<movie-list></movie-list>'
    })
    .otherwise('/movies');

}