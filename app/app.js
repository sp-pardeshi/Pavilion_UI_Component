'use strict';

// Declare app level module which depends on views, and components
angular.module('Pavilion_UI', [
  'ngRoute',
  'ngCookies',
  'Pavilion_UI.home',
  'Pavilion_UI.grid',
  'Pavilion_UI.tree',
  'Pavilion_UI.timeline',
  'ngTouch',
  'ui.grid'
])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/home'});
}])

.controller('Pavilion_UI_Ctrl',[
  '$scope',
  '$rootScope',
  '$location',
  '$cookies',
  '$window',
  '$timeout',
    function($scope, $rootScope, $location, $cookies, $window, $timeout){
  $rootScope.userName = $cookies.get('email');

  $scope.isThisMobileDevice = function() {
      isThisMobileDevice();
  }

  $scope.isActive = function (viewLocation) {
        return viewLocation === $location.path();
  };

  renderSiderbarMenus($rootScope);

  $scope.UserLogout = function(){
    $cookies.remove('email');
    $rootScope.userName = undefined;
    $scope.logoutMsg = "User logged out successfully."
    window.location = "#/home";
    //Show suceess message for only 2 seconds
    $scope.isShowLogoutMessage = true;
    $timeout(function() {
          $scope.isShowLogoutMessage = false;
    },2000);
    renderSiderbarMenus($rootScope);
  }

  $scope.onMenuClick = function(){
    console.log("called hide function");
    if(isThisMobileDevice()){
      $("#wrapper").toggleClass("toggled");
    }
  }

  $scope.openUserDetailsPopover = function(){
      $('.userDetailsPopover').popover({html:true});
  }

}]);
