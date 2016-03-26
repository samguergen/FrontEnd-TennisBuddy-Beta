angular.module('myApp')
.controller('mainController', ['$scope', 'uiGmapGoogleMapApi', function($scope, uiGmapGoogleMapApi){
  console.log('inside the freackin controller');

  // $scope.uiGmapGoogleMapApi.then(function(maps) {
  //   console.log(maps);
  //   });

  $scope.map = { center: { latitude: 25, longitude: -73 }, zoom: 8 };

  $scope.currentPlace = { center: { latitude: 25, longitude: -73 }, zoom: 8 };

  $scope.submitLocation = function(location) {
    console.log('location is ', location);
  }

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

  $scope.locate = function() {
    var options = {
                  enableHighAccuracy: true
              };

    navigator.geolocation.getCurrentPosition(function(pos) {
                  $scope.position = new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude);
                  $scope.positionObj = JSON.stringify($scope.position);
                  // console.log($scope.positionObj);
                  console.log('poz is ');
                  // console.log(JSON.stringify($scope.position));
              },
              function(error) {
                  alert('Unable to get location: ' + error.message);
              }, options);
    };

    //     var options = {
    //               enableHighAccuracy: true
    //           };

    // navigator.geolocation.getCurrentPosition(function(pos) {
    //               $scope.position = new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude);
    //               $scope.positionObj = JSON.stringify($scope.position);
    //               console.log($scope.positionObj);
    //           },
    //           function(error) {
    //               alert('Unable to get location: ' + error.message);
    //           }, options);



}]);