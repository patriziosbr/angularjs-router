'use strict';

angular.module('angularOne').
	config(
		function($locationProvider, $routeProvider)
		{
			$locationProvider.html5Mode({enabled:true});
			$routeProvider
			.when("/", {
				template: "<blog-list></blog-list>"
			}).
			when("/blog/1/", {
				template: "log1"
			}).
			when("/blog/2/", {
				template: "hello2"
			}).
			otherwise({
				template: "not hot found"
			})
		});