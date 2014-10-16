angular.module('starter.controllers', ['ionic'])

.controller('HomeCtrl', function ($scope, $ionicLoading, $ionicSideMenuDelegate, $ionicModal) {
	$scope.data = {};
	$scope.proyectos = [
	    { id: 1, tittle: 'Proyecto 1', text: 'Marco de Medio de Vida Sostenible de las familias de los niños y niñas de los hogares comunitarios de la Asociación Unidos los Olivos.', author: 'Bryan Villafañe' },
	    { id: 2, tittle: 'Proyecto 2', text: 'Intervención interdisciplinaria de 18 familias en crisis del Colegio Alejandro Obregón.', author: 'Bryan Villafañe' },
	    { id: 3, tittle: 'Proyecto 3', text: 'Diseño de la intervención a desarrollar por el Programa Institucional Años de Plenitud para el periodo 2.013 - 2.017.', author: 'Bryan Villafañe' },
  	];
	$scope.toggleLeft = function() {
	    $ionicSideMenuDelegate.toggleLeft();
	};

	$ionicModal.fromTemplateUrl('templates/new-project-modal.html', {
	    scope: $scope
  	}).then(function (modal) {
		$scope.theModal = modal;
	});
	$scope.newProject = function () {
	    $scope.theModal.show();
	}
	$scope.newProjectModalClose = function() {
	    $scope.theModal.hide();
  	};
  	$scope.$on('$destroy', function() {
	    $scope.theModal.remove();
  	});
})

.controller('ProjectCtrl', function ($scope, $ionicNavBarDelegate) {
	$scope.goBack = function () {
	    $ionicNavBarDelegate.back();
	}

	$scope.newSeguimiento = function () {
		
	}
});