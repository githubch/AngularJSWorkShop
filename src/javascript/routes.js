app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/create',
        {
            templateUrl: 'src/pages/createAccount.html'
        })
        .when('/account/create', {
            templateUrl:'src/pages/createAccount.html'
        })
        .when('/home', {
            templateUrl:'src/pages/magic.html',
            controller:'HomeController'
        });
    $routeProvider.otherwise({redirectTo: ''});
}]);