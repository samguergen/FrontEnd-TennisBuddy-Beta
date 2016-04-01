angular.module("myApp", ["uiGmapgoogle-maps", "xeditable"])
  .config(
    ['uiGmapGoogleMapApiProvider', function(GoogleMapApiProviders) {
        GoogleMapApiProviders.configure({
            china: true
        });
    }]
)


.run(function(editableOptions) {
  console.log('angular app running');
  editableOptions.theme = 'bs3'; // bootstrap3 theme. Can be also 'bs2', 'default'
});