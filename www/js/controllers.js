angular.module('starter.controllers', ['ionic'])

.controller('HomeCtrl', function ($scope, $ionicLoading, $ionicSideMenuDelegate, $ionicModal, ProjectService){
	$ionicLoading.show({template: '<i class="icon ion-looping"></i>'});
	$scope.data = {};
	var result = ProjectService.all();
    result.then(function (data){
       $scope.projects = data;
  		$ionicLoading.hide();
    }, function (err){
        $ionicLoading.show({template: '<p>Algo malo ocurrió</p>', duration: 1500, showBackdrop: false});
  	});

	$scope.toggleLeft = function (){
	    $ionicSideMenuDelegate.toggleLeft();
	};

	$ionicModal.fromTemplateUrl('templates/new-project-modal.html',{
	    scope: $scope
  	}).then(function (modal){
		$scope.theModal = modal;
	});
	$scope.newProject = function (){
	    $scope.theModal.show();
	}
	$scope.newProjectModalClose = function (){
	    $scope.theModal.hide();
  	};
  	$scope.$on('$destroy', function (){
	    $scope.theModal.remove();
  	});

  	$scope.saveProject = function (inputs){
  		var result = ProjectService.create(inputs);
        result.then(function (data){
	       	$scope.projects = data;
	       	$scope.theModal.hide();
	    }, function (err){
	        $ionicLoading.show({template: '<p>Algo malo ocurrió</p>', duration: 1500, showBackdrop: false});
      	});
  	}
})

.controller('ProjectCtrl', function ($scope, $ionicNavBarDelegate, $ionicModal, SeguimientoService, $stateParams){
	var result = SeguimientoService.allById($stateParams.projectId);
    result.then(function (data){
       	$scope.seguimientos = data;
    }, function (err){
        $ionicLoading.show({template: '<p>Algo malo ocurrió</p>', duration: 1500, showBackdrop: false});
  	});
	$scope.goBack = function (){
	    $ionicNavBarDelegate.back();
	}

	$ionicModal.fromTemplateUrl('templates/new-seguimiento-modal.html',{
	    scope: $scope
  	}).then(function (modal) {
		$scope.theModal = modal;
	});
	$scope.newSeguimientoModal = function (){
	    $scope.theModal.show();
	}
	$scope.modalClose = function (){
	    $scope.theModal.hide();
  	};
  	$scope.$on('$destroy', function (){
	    $scope.theModal.remove();
  	});

  	$ionicModal.fromTemplateUrl('templates/seguimiento-info-modal.html',{
	    scope: $scope
  	}).then(function (modal) {
		$scope.theModaltwo = modal;
	});
  	$scope.showInfo = function (seguimiento_id){
	    $scope.theModaltwo.show();
	    var result = SeguimientoService.getOneById(seguimiento_id);
        result.then(function (data){
	       	$scope.seguimiento = data;
	    }, function (err){
	        $ionicLoading.show({template: '<p>Algo malo ocurrió</p>', duration: 1500, showBackdrop: false});
      	});
  	}
  	$scope.close = function (){
	    $scope.theModaltwo.hide();
  	};
  	$scope.$on('$destroy', function (){
	    $scope.theModaltwo.remove();
  	});

  	$scope.newSeguimiento = function (inputs){
  		var result = SeguimientoService.create(inputs);
        result.then(function (data){
	       	var resultr = SeguimientoService.allById($stateParams.projectId);
		    resultr.then(function (data){
		       	$scope.seguimientos = data;
	       		$scope.theModal.hide();
		    }, function (err){
		        $ionicLoading.show({template: '<p>Algo malo ocurrió</p>', duration: 1500, showBackdrop: false});
		  	});
	    }, function (err){
	        $ionicLoading.show({template: '<p>Algo malo ocurrió</p>', duration: 1500, showBackdrop: false});
      	});
	}
});