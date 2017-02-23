angular.module('barbersiteApp', ['ui.router'])
    .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider)
    {
        $urlRouterProvider.otherwise('/');
        $stateProvider
        .state(
        'home',
        {
            url:'/',
            templateUrl:'views/test1.html'
        })
        
        .state('test2',
        {
            url:'/test2',
            templateUrl:'views/test2.html'
        })
        ;
    }]);