(function() {
    'use strict';
    angular
        .module('movieApp')
        .component('movieList', {
            templateUrl: 'static/movie-list/movie-list.template.html',
            controller: function MovieListController(MovieService) {
                var vm = this;
                vm.movies = {};
                getMovies();
                function getMovies() {
                    MovieService.getMovies().then(function(response) {
                        vm.movies = response.data;
                    }) 
                }
            }
        });

})();
