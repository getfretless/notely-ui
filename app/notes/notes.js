angular
  .module('notely.notes', ['ui.router'])
  .controller('NotesController', NotesController)
  .config(notesConfig);

notesConfig['$inject'] = ['$stateProvider', '$urlRouterProvider'];
function notesConfig($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('notes', {
      url: '/notes',
      templateUrl: '/notes/notes.html',
      controller: NotesController
    })

    .state('notes.form', {
      url: '/:noteId',
      controller: function() {},
      views: {
        form: {
          template: 'w00t'
        }
      }
    });
}

NotesController['$inject'] = ['$scope', '$state'];
function NotesController($scope, $state) {
  $scope.message = "Welcome to Notely!";
  $state.go('notes.form');
}
