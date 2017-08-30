(function(){
    'use strict';
    angular
        .module('movieApp')
        .service('MovieService', MovieService);

    MovieService.$inject = ['$http', 'CONFIG'];

    function MovieService($http, CONFIG) {
        this.getMovies = function() {
            return $http({
                url: CONFIG.url + '/api/movies',
                method: 'GET'
            });
        };
    }

})();