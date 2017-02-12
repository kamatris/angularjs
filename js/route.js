app.config(function($routeProvider , $locationProvider) {
	$locationProvider.hashPrefix('');
	$routeProvider
		.when('/home' ,{
			templateUrl:'parts/home.html',
			controller:'HomeCtrl'
		})
		.when('/product' ,{
			templateUrl:'parts/product.html',
			controller:'ProductCtrl'
		})
		.when('/product/:id' ,{
			templateUrl:'parts/product.html',
			controller:'detailCtrl'
		})
		.when('/about' ,{
			templateUrl:'parts/about.html',
			controller:'AboutCtrl'
		})
		.when('/login' ,{
			templateUrl:'parts/login.html',
			controller:'LoginCtrl'
		})
		.otherwise({
			redirectTo:'/home'
		})
})