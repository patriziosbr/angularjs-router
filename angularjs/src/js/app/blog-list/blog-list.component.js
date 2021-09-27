'use strict';

angular.module('blogList')
	.component('blogList', {
		//template: "<div class='' ><h1 class='font-class' > {{ title }} </h1><button ng-click='someClickTest()' >Hit Me</button></div>",
		templateUrl : '../../templates/blog-list.html',
		controller: function($scope){

				let blogItems = [
					{ title : 'Some Title', id:1, desc: 'lorem description a short desc'},
					{ title : 'Two Title', id:2, desc: 'second description very fast '},
					{ title : 'La disney', id:3, desc: 'Pippo pluto paperino e tutta la disney'},
					{ title : 'Edusdegno', id:4, desc: 'Evento micio miao bau meow peow peow'},

				]

				$scope.posts = blogItems;


				$scope.title = 'toggle title';
				$scope.clicks = 0;
				$scope.someClickTest = function(){
				console.log("clicked");
				$scope.clicks += 1;
				$scope.title = 'clicked ' + $scope.clicks + ' times';
			}
		}
	});

	//.controller('blogListController', function($scope){
	//	console.log('Hello');
	//	$scope.title = 'toggle title';
	//	$scope.clicks = 0;
	//	$scope.someClickTest = function(){
	//		console.log("clicked");
	//		$scope.clicks += 1;
	//		$scope.title = 'clicked ' + $scope.clicks + ' times';
	//	}
	//});



//angular.module('blogList')
	//.controller('blogListController', function($scope){
		//console.log('Hello');
		//$scope.title = 'toggle title';
		//$scope.clicks = 0;
		//$scope.someClickTest = function(){
			//console.log("clicked");
			//$scope.clicks += 1;
			//$scope.title = 'clicked ' + $scope.clicks + ' times';
		//}
	//});
	//.component('blogList');

//angular.module('blogList')
	//.controller('blogListController', function($scope){
		//console.log('Hello');
		//$scope.title = 'toggle title';
		//$scope.clicks = false;
		//$scope.someClickTest = function(){
			//console.log("clicked");
			//if(!$scope.clicks) {
				//console.log('changed in true')
				//$scope.clicks = true;
				//$scope.title = 'Clicked';	
			//} else if($scope.clicks) {
				//console.log('back in false')
				//$scope.clicks = false;
				//$scope.title = 'Hi there';
			//}
		//}
	//});
	//.component('blogList');