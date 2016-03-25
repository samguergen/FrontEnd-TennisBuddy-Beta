angular.module("myApp", [])
.controller("mainController", function($scope){
  console.log('inside the controller');
  $scope.user = {
    'firstName': "Miss",
    'lastName': "Nobody",
    'email':"miss@nbd.com",
    'password':"123",
    games: []
  };
});