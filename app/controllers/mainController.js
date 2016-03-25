angular.module('myApp', [])
.controller('mainController', ['$scope', 'uiGmapGoogleMapApi', function($scope, uiGmapGoogleMapApi){
  console.log('inside the controller');

  // $scope.uiGmapGoogleMapApi.then(function(maps) {
  //   console.log(maps);
  //   });

  $scope.map = { center: { latitude: 45, longitude: -73 }, zoom: 8 };

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