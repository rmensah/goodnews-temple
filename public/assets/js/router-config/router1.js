var icgcApp = angular.module('icgcApp', ['ui.router']);
icgcApp.config(function($stateProvider, $urlRouterProvider){

    $urlRouterProvider.otherwise('/home');
    $stateProvider
        .state('home', {
            url: "/home",
            //abstract: true,
            templateUrl:'home.html',
            // controller:'homeController'
        })
        // .state('home.step1', {
        //     url: "/step1",
        //     templateUrl:'app/partials/step1.template.html'
        // })
        // .state('home.step2', {
        //     url: "/step2",
        //     templateUrl:'app/partials/step2.template.html'
        // })
        // .state('about', {
        //     url: "/about",
        //     //abstract: true,
        //     template:"<h3 class='text-center'>This is a Setup Wizard !</h3>",
        // });
});

// icgcApp.controller('homeController',
//     function($scope){

        // $scope.msg="Welcome !"

    });
