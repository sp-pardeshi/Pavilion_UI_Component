function isThisMobileDevice() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

//This function is used while loading menu when logout , login .
function renderSiderbarMenus($rootScope){
  if (!$rootScope.userName) {
    $rootScope.menuContent = [
      {tabName:'/home',tabUrl:'#/home',iconName:'glyphicon glyphicon-home menuIcon',tabVal:'Home'}
    ];
  }else {
    $rootScope.menuContent = [
      {tabName:'/grid',tabUrl:'#/grid',iconName:'glyphicon glyphicon-th-large menuIcon',tabVal:'UI-Grid'},
      {tabName:'/tree',tabUrl:'#/tree',iconName:'glyphicon glyphicon-list menuIcon',tabVal:'Tree'},
      {tabName:'/timeline',tabUrl:'#/timeline',iconName:'glyphicon glyphicon-transfer menuIcon',tabVal:'TimeLine'}
    ];
  }
}
