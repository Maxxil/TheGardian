// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])
  .config(function($stateProvider , $urlRouterProvider){
    $stateProvider
      .state('root',{
        url:'/root',
        templateUrl : 'templates/navigation.html'
      })
      .state('root.inscription', {
        url : '/inscription',
        views :{
          contentView :{
            templateUrl : 'templates/inscription.html',
            controller : 'InscriptionController'
          }
        }
      })
      .state('root.patients' , {
        url : '/patients',
        views : {
          contentView : {
            templateUrl : 'templates/patients.html',
            controller : 'ListPatientsController'
          }
        }
      })
      .state('root.patient',{
        url : '/patient/:id',
        views : {
          contentView : {
            templateUrl : 'templates/patient.html',
            controller : 'PatientController'
          }
        }
    })
      .state('root.inscriptionPatient' , {
        url : '/inscriptionPatient',
        views : {
          contentView : {
            templateUrl : 'templates/inscriptionPatient.html',
            controller : 'InscriptionPatientController'
          }
        }
      });
    $urlRouterProvider.otherwise('/root');
  })
.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

