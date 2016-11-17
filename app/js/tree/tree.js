'use strict';

angular.module('Pavilion_UI.tree', [
  'ngRoute',
  'ngAnimate',
  'ngTouch',
  'ui.grid',
  'ui.grid.treeView',
  'ui.grid.exporter',
  'ui.grid.selection'
])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/tree', {
    templateUrl: 'components/tree/tree.html',
    controller: 'treeController'
  });
}])

.controller('treeController',
  [
    '$scope',
    '$http',
    '$interval',
    'uiGridTreeViewConstants',
      function ($scope, $http, $interval, uiGridTreeViewConstants ) {
      $scope.gridOptions = {
        enableSorting: true,
        enableFiltering: true,
        showTreeExpandNoChildren: true,
        exporterMenuCsv: true,
        enableGridMenu: true,
        columnDefs: [
          { name: 'name', width: '30%' },
          { name: 'gender', width: '20%' },
          { name: 'age', width: '20%' },
          { name: 'company', width: '25%' },
          { name: 'state', width: '35%' },
          { name: 'balance', width: '25%', cellFilter: 'currency' }
        ],
        onRegisterApi: function( gridApi ) {
          $scope.gridApi = gridApi;
        }
      };

      $http.get('../../data/data.json')
      .success(function(data) {
       for ( var i = 0; i < data.length; i++ ){
         data[i].state = data[i].address.state;
         data[i].balance = Number( data[i].balance.slice(1).replace(/,/,'') );

       }
       data[0].$$treeLevel = 0;
       data[1].$$treeLevel = 1;
       data[6].$$treeLevel = 1;

       data[13].$$treeLevel = 0;
       data[14].$$treeLevel = 1;
       data[19].$$treeLevel = 1;
       data[24].$$treeLevel = 2;

       data[29].$$treeLevel = 0;
       data[30].$$treeLevel = 1;
       data[35].$$treeLevel = 1;

       data[41].$$treeLevel = 0;



       $scope.gridOptions.data = data;
      });

      $scope.expandAll = function(){
        $scope.gridApi.treeBase.expandAllRows();
      };

      $scope.toggleRow = function( rowNum ){
        $scope.gridApi.treeBase.toggleRowTreeState($scope.gridApi.grid.renderContainers.body.visibleRowCache[rowNum]);
      };

      $scope.toggleExpandNoChildren = function(){
        $scope.gridOptions.showTreeExpandNoChildren = !$scope.gridOptions.showTreeExpandNoChildren;
        $scope.gridApi.grid.refresh();
      };
}]);
