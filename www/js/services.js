angular.module('starter.services', [])

.service('ProjectService', function ($http, $q, $rootScope){
  $rootScope.projects = [
    { id: 1, title: 'Proyecto 1', nombreProgramaSoci: 'Ing. Sistemas', text: 'Marco de Medio de Vida Sostenible de las familias de los niños y niñas de los hogares comunitarios de la Asociación Unidos los Olivos.', lider: 'Bryan Villafañe', fechaInicio: '19/11/2014', fechaFin: '19/11/2015' }
  ];
  return {
    all: function () {
      var defer = $q.defer(); 
      defer.resolve($rootScope.projects);
      return defer.promise;
    },
    create: function (inputs) {
      var defer = $q.defer();
      $rootScope.projects.push({id: $rootScope.projects[$rootScope.projects.length-1].id + 1, title: inputs.title, nombreProgramaSoci: inputs.nombreProgramaSoci, text: inputs.text, lider: inputs.lider, fechaInicio: inputs.fechaInicio, fechaFin: inputs.fechaFin})
      defer.resolve($rootScope.projects);
      return defer.promise;
    },
    getOne: function (id){
    }
  }
})

.service('SeguimientoService', function ($http, $q, $rootScope){
  $rootScope.seguimientos = [
    { id: 1, date: '19/11/2014', name: 'Salida de campo', result: 'Se logro avanzar en uno de los requerimientos', observ: 'Se visitaron varias viviendas', project_id: 1 },
    { id: 1, date: '19/11/2014', name: 'dasdasddadadad', result: 'Se logro avanzar en uno de los requerimientos', observ: 'Se visitaron varias viviendas', project_id: 2 }
  ];
  return {
    allById: function (project_id){
      $rootScope.encontrados = [];
      var defer = $q.defer();
      for(var i = 0; i < $rootScope.seguimientos.length; i++){
        if($rootScope.seguimientos[i].project_id === parseInt(project_id)){
          $rootScope.encontrados.push($rootScope.seguimientos[i]);
        }
      }
      defer.resolve($rootScope.encontrados);
      return defer.promise;
    },
    create: function (inputs){
      var defer = $q.defer();
      $rootScope.seguimientos.push({id: $rootScope.seguimientos[$rootScope.seguimientos.length-1].id + 1, date: inputs.fecha, name: inputs.name, result: inputs.result, observ: inputs.observ, project_id: 1})
      defer.resolve($rootScope.seguimientos);
      return defer.promise;
    },
    getOneById: function (seguimiento_id){
      var defer = $q.defer();
      for(var i = 0; i < $rootScope.seguimientos.length; i++){
        if($rootScope.seguimientos[i].id === parseInt(seguimiento_id)){
          defer.resolve($rootScope.seguimientos[i]);
        }
      }
      return defer.promise;
    }
  }
});
