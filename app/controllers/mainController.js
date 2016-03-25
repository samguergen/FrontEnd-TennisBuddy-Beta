angular.module('myApp', [])
.controller('mainController', ['$scope', function($scope){
  console.log('inside the controller');

  $scope.tabsArray = ['home','profile','past','browse','create'];
  $scope.user = {
    'firstName': "Miss",
    'lastName': "Nobody",
    'email':"miss@nbd.com",
    'password':"123",
    games: []
  };

  // $scope.profile = function(){console.log('ok');};



  $scope.tabSelection = $scope.tabsArray[0];

  $scope.tabSwitch = function(tab) {
    console.log(tab);
    for (var i in $scope.tabsArray) {
      // console.log($scope.tabsArray[i]);
      $scope.tabsArray[i] = false;
      if ($scope.tabsArray[i] == tab) {
        $scope.tabsArray[i] = true;
      }
    }
  };


}]);