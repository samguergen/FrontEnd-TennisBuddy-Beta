angular.module("myApp", [])
.controller("mainController", function($scope){
  console.log('inside the controller');

  $scope.tabsArray = ['home','profile','past','browse','create'];
  $scope.user = {
    'firstName': "Miss",
    'lastName': "Nobody",
    'email':"miss@nbd.com",
    'password':"123",
    games: []
  };

  // $scope.tabSwitch = function(tab) {
  //   for (var i in $scope.tabsArray) {
  //     console.log($scope.tabsArray[i);
  //     if ($scope.tabsArray[i] == tab) {
  //       console.log('alright');
  //       $scope.tabsArray = false;
  //       $scope.tabsArray[i] = true;
  //     }
  //   }
  // };


});