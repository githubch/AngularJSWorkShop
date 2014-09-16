app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('src/create',
        {
            templateUrl: 'pages/createAccount.html'
        })
        .when('src//account/create', {
            templateUrl:'pages/createAccount.html'
        })
        .when('/home', {
            templateUrl:'src/pages/magic.html',
            controller:'HomeController'
        });
    $routeProvider.otherwise({redirectTo: ''});
}]);