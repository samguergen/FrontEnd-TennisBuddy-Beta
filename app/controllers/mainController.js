angular.module('myApp')
.controller('mainController', ['$scope', 'uiGmapGoogleMapApi', function($scope, uiGmapGoogleMapApi){
  console.log('inside the controller');

  // $scope.uiGmapGoogleMapApi.then(function(maps) {
  //   console.log(maps);
  //   });

  $scope.positionObj = {};

  $scope.map = { center: { latitude: 25, longitude: -73 }, zoom: 8 };

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

  $scope.editProfile = function(){
    console.log($scope.user);
  };

  $scope.locate = function() {
    console.log('is lat long working?');
    console.log($scope.positionObj);
    // console.log(this.test);
              };

    var options = {
                  enableHighAccuracy: true
              };

    navigator.geolocation.getCurrentPosition(function(pos) {
                  $scope.position = new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude);
                  $scope.positionObj = JSON.stringify($scope.position);
                  console.log('your current longitude and latitudes are....');
                  console.log($scope.positionObj);
              },
              function(error) {
                  alert('Unable to get location: ' + error.message);
              }, options);





}]);