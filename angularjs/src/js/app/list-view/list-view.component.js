'use strict';

angular.module('listView').
    component('listView', {
        template: "<div class='col-sm-6 col-sm-offset-3'><h1>{{ textItem2 }}</h1></div>",
        // templateUrl: '/templates/list-view.html',
        controller: function($scope){
            $scope.textItem2 = 'Hi there budello delle chache.'
        }
    });
