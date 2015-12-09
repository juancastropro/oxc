var MyApp;
(function (MyApp) {
    angular.module('MyApp', ['ngRoute', 'ngResource']).config(function ($routeProvider, $locationProvider) {
        $routeProvider
            .when('/', {
            templateUrl: '/ngApp/views/home.html',
            controller: MyApp.Controllers.HomeController,
            controllerAs: 'controller'
        })
            .when('/creators', {
            templateUrl: '/ngApp/views/creators.html',
            controller: MyApp.Controllers.CreatorsController,
            controllerAs: 'controller'
        })
            .when('/comics', {
            templateUrl: '/ngApp/views/comics.html',
            controller: MyApp.Controllers.ComicsController,
            controllerAs: 'controller'
        })
            .when('/news', {
            templateUrl: '/ngApp/views/news.html',
            controller: MyApp.Controllers.NewsController,
            controllerAs: 'controller'
        })
            .when('/register', {
            templateUrl: '/ngApp/views/register.html',
            controller: MyApp.Controllers.RegisterController,
            controllerAs: 'controller'
        })
            .when('/login', {
            templateUrl: '/ngApp/views/login.html',
            controller: MyApp.Controllers.LoginController,
            controllerAs: 'controller'
        })
            .when('/addComic', {
            templateUrl: '/ngApp/views/addComic.html',
            controller: MyApp.Controllers.AddComicController,
            controllerAs: 'controller'
        })
            .when('/edit/:id', {
            templateUrl: '/ngApp/views/editComic.html',
            controller: MyApp.Controllers.EditComicController,
            controllerAs: 'controller'
        })
            .when('/delete/:id', {
            templateUrl: '/ngApp/views/deleteComic.html',
            controller: MyApp.Controllers.DeleteComicController,
            controllerAs: 'controller'
        })
            .when('/externalRegister', {
            templateUrl: '/ngApp/views/externalRegister.html',
            controller: MyApp.Controllers.ExternalRegisterController,
            controllerAs: 'controller'
        })
            .when('/confirmEmail', {
            templateUrl: '/ngApp/views/confirmEmail.html',
            controller: MyApp.Controllers.ConfirmEmailController,
            controllerAs: 'controller'
        })
            .otherwise({
            redirectTo: '/ngApp/views/notFound.html'
        });
        $locationProvider.html5Mode(true);
    });
    angular.module('MyApp').factory('authInterceptor', function ($q, $window, $location) {
        return ({
            request: function (config) {
                config.headers = config.headers || {};
                var token = $window.sessionStorage.getItem('token');
                if (token) {
                    config.headers.Authorization = 'Bearer ' + token;
                }
                return config;
            },
            response: function (response) {
                if (response.status === 401) {
                    $location.path('/login');
                }
                return response || $q.when(response);
            }
        });
    });
    angular.module('MyApp').config(function ($httpProvider) {
        $httpProvider.interceptors.push('authInterceptor');
    });
})(MyApp || (MyApp = {}));
//# sourceMappingURL=app.js.map