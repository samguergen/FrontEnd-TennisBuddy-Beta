angular.module("myApp", [])
.controller("mainController", function($scope){
  console.log('inside the controller');

  var tabsArray = ['home','profile','past','browse','create'];
  $scope.user = {
    'firstName': "Miss",
    'lastName': "Nobody",
    'email':"miss@nbd.com",
    'password':"123",
    games: []
  };

  $scope.tabSwitch = function(tab) {
    for (var i in tabsArray) {
      if (tabsArray[i] == tab) {
        tabsArray = false;
        tabsArray[i] = true;
      }
    }
  };
});