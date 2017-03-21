angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})
  .controller('InscriptionController' , function($scope){
      console.log("Inscription")
  })

  .controller('ListPatientsController' , function($scope ){
    console.log('Liste patients');
    $scope.patients = [];

    $scope.patients.push({id : 1 ,nom : "KADI" , prenom : "Massil"});
    $scope.patients.push({id : 2 ,nom : "MC FLY" , prenom : "Marty"});
    $scope.patients.push({id : 3 ,nom : "BARACK" , prenom : "Obama"});
    $scope.patients.push({id : 4 ,nom : "KASIML" , prenom : "Yousra"});
    $scope.patients.push({id : 5 ,nom : "AUTRE" , prenom : "Lui"});
    $scope.patients.push({id : 6 ,nom : "MINCE" , prenom : "Bof"});
    $scope.patients.push({id : 7 ,nom : "OUI" , prenom : "Peut etre"});
  })
  .controller('PatientController' , function ($scope , $stateParams) {
    console.log($stateParams.id);
    $scope.patients = [];

    $scope.patients.push({id : 1 ,nom : "KADI" , prenom : "Massil"});
    $scope.patients.push({id : 2 ,nom : "MC FLY" , prenom : "Marty"});
    $scope.patients.push({id : 3 ,nom : "BARACK" , prenom : "Obama"});
    $scope.patients.push({id : 4 ,nom : "KASIML" , prenom : "Yousra"});
    $scope.patients.push({id : 5 ,nom : "AUTRE" , prenom : "Lui"});
    $scope.patients.push({id : 6 ,nom : "MINCE" , prenom : "Bof"});
    $scope.patients.push({id : 7 ,nom : "OUI" , prenom : "Peut etre"});

    $scope.patients.forEach(function(element){
      if(element.id == $stateParams.id)
      {
        $scope.patient = element;
      }
    });
  })
  .controller('InscriptionPatientController' , function ($scope) {
    console.log('Inscription Patient');
    $scope.valider = function () {
      console.log('Inscription validée');
    }
  })
.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
