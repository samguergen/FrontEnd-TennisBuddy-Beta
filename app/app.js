angular.module('myApp', ['uiGmapgoogle-maps'])
  .config(
    ['uiGmapGoogleMapApiProvider', function(GoogleMapApiProviders) {
        GoogleMapApiProviders.configure({
            china: true
        });
    }]
)


.run(function() {
  console.log('angular app running');
});