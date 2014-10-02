angular.module('ionicApp', ['ionic', 'starter.controllers'])

.run(function ($ionicPlatform) {

  $ionicPlatform.ready(function() {

    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }

    function checkConnection() {
      if(typeof navigator.connection !== "undefined") {
        var networkState = navigator.connection.type;

        var states = {};
        states[Connection.UNKNOWN]  = 'Unknown connection';
        states[Connection.ETHERNET] = 'Ethernet connection';
        states[Connection.WIFI]     = 'WiFi connection';
        states[Connection.CELL_2G]  = 'Cell 2G connection';
        states[Connection.CELL_3G]  = 'Cell 3G connection';
        states[Connection.CELL_4G]  = 'Cell 4G connection';
        states[Connection.CELL]     = 'Cell generic connection';
        states[Connection.NONE]     = 'No network connection';

        return states[networkState];
      }
    }

    var connectionIs = checkConnection();

    if (connectionIs == 'No network connection') {
      console.log('crysavvy');
    }

  });
})

.config(function ($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('home', {
      url: '/home',
      templateUrl: 'templates/home.html',
      controller: 'HomeCtrl'
    })

    .state('projectHome', {
      url: '/project/:projectId',
      templateUrl: 'templates/project.html',
      controller: 'ProjectCtrl'
    })
    
    $urlRouterProvider.otherwise('/home');
});
