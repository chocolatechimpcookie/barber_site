angular.module('barbersiteApp', ['ui.router'])
    .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider)
    {
        $urlRouterProvider.otherwise('/');
        $stateProvider
        .state(
        'home',
        {
            url:'/about',
            templateUrl:'views/about.html'
        })
        
        .state('services',
        {
            url:'/services',
            templateUrl:'views/services.html'
        })
        
        //.state('contact',
        //{
        //    url:'/contact',
        //    templateUrl:'views/contact.html'
        //})
        ;
    }]);