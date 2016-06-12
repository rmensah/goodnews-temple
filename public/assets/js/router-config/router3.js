// router3.js
var icgcapp = angular.module('icgcapp', ['ui.router']);

icgcapp.config(function($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('/about');
    
    $stateProvider
        
        // HOME STATES AND NESTED VIEWS ========================================
        .state('home', {
            url: '/about',
            templateUrl: 'partial-about.html'
        })
        
        // ABOUT PAGE AND MULTIPLE NAMED VIEWS =================================
        .state('about', {
            // we'll get to this in a bit       
        });
        
          $locationProvider.html5Mode(true);
});