(function() {
    function config($stateProvider, $locationProvider) {
        $locationProvider
            .html5mode({
                enabled: true,
                requiredBase: false
            });

        $stateProvider
            .state('landing', {
                url:'/',
                templateUrl: '/templates/landing.html'
            })
            .state('album', {
                url:'/album',
                templateUrl: '/templates/album.html'
            });
    }

    angular
        .module('blocJams', ['ui.router'])
        .config(config);
})();
