angular.module('myApp', [])
.controller('mainController', ['$scope', function($scope){
  console.log('inside the controller');

  // $scope.tabsArray = ['home','profile','past','browse','create'];
  $scope.user = {
    'firstName': "Miss",
    'lastName': "Nobody",
    'description': "Some cool hacker chick",
    'email':"miss@nbd.com",
    'password':"123",
    'games': []
  };

  $scope.tabs = {
    'home':'active',
    'profile':'deactivated',
    'past':'deactivated',
    'browse':'deactivated',
    'login':'deactivated'
  };

  $scope.tabSelection = $scope.tabs[0];

  $scope.tabSwitch = function(tab) {
    console.log(tab);
    for (var i in $scope.tabs) {
      $scope.tabs[i] = 'deactivated';
      if (i == tab) {
        $scope.tabs[i] = 'active';
      }
    }
  };


}]);