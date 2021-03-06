angular.module('ionicApp', ['ionic', 'starter.controllers', 'starter.services'])

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

    .state('login', {
      url: "/login",
      templateUrl: "templates/login.html"
    })

    .state('abs', {
      url: '/abs',
      abstract: true,
      templateUrl: 'templates/menu.html'
    })

    .state('abs.home', {
      url: '/home',
      views: {
        'menuContent': {
          templateUrl: 'templates/home.html',
          controller: 'HomeCtrl'
        }
      }
    })

    .state('abs.projectHome', {
      url: '/project/:projectId',
      views: {
        'menuContent': {
          templateUrl: 'templates/project.html',
          controller: 'ProjectCtrl'
        }
      }
    })
    
    $urlRouterProvider.otherwise('/login');
});
