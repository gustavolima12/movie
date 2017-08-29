(function() {
    'use strict';
    angular
        .module('movieApp')
        .component('movieList', {
            templateUrl: 'static/movie-list/movie-list.template.html',
            controller: function MovieListController() {
                this.movie = 'Teste';
            }
        });

})();
