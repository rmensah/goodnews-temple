var app = angular.module('icgcapp', ['ngRoute','ngCookies','ui.router']);

app.config(['$stateProvider','$locationProvider','$urlRouterProvider', function($stateProvider, $locationProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('/home');
    
    $stateProvider
        
        // HOME STATES AND NESTED VIEWS ========================================
        .state('home', {
            url: '/home',
            views: {
                '':{ templateUrl: 'index.html'},
            }
            
            // abstract: true,
            //  controller: 'homeController'
        })
        
        // ABOUT PAGE AND MULTIPLE NAMED VIEWS =================================
        // .state('about', {
        //     url: '/about',
        //     templateUrl: 'about.html'     
        // })


        // Skills PAGE  =================================
        // .state('skills', {
        //     url: '/skills',
        //     templateUrl: 'skills.html'     
        // })

        // Contact PAGE  =================================
        // .state('contact', {
        //     url: '/contact',
        //     templateUrl: 'contact.html'     
        // })

        // Resume PAGE  =================================
        // .state('resume', {
        //     url: '/resume',
        //     templateUrl: 'partial-skills.html'     
        // })

        // Portfolio PAGE  =================================
        // .state('portfolio', {
        //     url: '/portfolio',
        //     templateUrl: 'partial-portfolio.html'     
        // })



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


