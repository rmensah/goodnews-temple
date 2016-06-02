var icgcApp = angular.module('icgcApp', ['ui.router']);

icgcApp.config(['$stateProvider','$urlRouterProvider','$locationProvider', function($stateProvider, $urlRouterProvider,$locationProvider) {
    
    $urlRouterProvider.otherwise('/home');
    
    $stateProvider
        
        // HOME STATES AND NESTED VIEWS ========================================
        .state('home', {
            url: '/home',
            templateUrl: 'partial-home.html'
        })
        
        // ABOUT PAGE AND MULTIPLE NAMED VIEWS =================================
        .state('about', {
            url: '/about',
            templateUrl: 'partial-about.html'     
        })


        // Skills PAGE  =================================
        .state('skills', {
            url: '/skills',
            templateUrl: 'partial-skills.html'     
        })

        // Contact PAGE  =================================
        .state('contact', {
            url: '/contact',
            templateUrl: 'partial-contact.html'     
        })

        // Resume PAGE  =================================
        .state('resume', {
            url: '/resume',
            templateUrl: 'partial-skills.html'     
        })

        // Portfolio PAGE  =================================
        .state('portfolio', {
            url: '/portfolio',
            templateUrl: 'partial-portfolio.html'     
        })



        // .state('about', {
        //     abstract: true,
        //     templateUrl: 'partial-about.html' 
        //     template: 'ui-view/>'    
        // })

        // // PORTFOLIO STATES AND NESTED VIEWS ========================================
        // .state('about.list', {
        //     templateUrl: 'about.list.html'
        //     url:'/list'
        // })

        //  // SKILLS STATES AND NESTED VIEWS ========================================
        // .state('about.detail', {
        //     templateUrl: 'about.detail.html'
        //     url:'/detail'
        // })

        $locationProvider.html5Mode(true);
        
}]);
