'use strict';

angular.module('Pavilion_UI.timeline',
  [
    'ngRoute',
    'ngTouch'
  ]
)

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/timeline', {
    templateUrl: 'components/timeline/timeline.html',
    controller: 'timelineController'
  });
}])

.controller('timelineController',['$scope',function ($scope){

}]);
