(function() {
  angular.module('notely.notes', [
    'ui.router'
  ])
  .controller('NotesController', NotesController)
  .controller('NotesFormController', NotesFormController)
  .config(notesConfig);

  notesConfig['$inject'] = ['$stateProvider'];
  function notesConfig($stateProvider) {
    $stateProvider

      .state('notes', {
        url: '/notes',
        templateUrl: '/notes/notes.html',
        resolve: {
          notes: function(notes) {
            return notes.fetchNotes();
          }
        },
        controller: NotesController
      })

      .state('notes.form', {
        url: '/{noteId}',
        templateUrl: '/notes/notes-form.html',
        controller: NotesFormController
      });
  }

  NotesController['$inject'] = ['$scope', '$state', 'notes'];
  function NotesController($scope, $state, notesService) {
    $scope.notes = notesService.all();
    $state.go('notes.form');
  }

  NotesFormController['$inject'] = ['$scope', '$state', 'notes'];
  function NotesFormController($scope, $state, notes) {
    console.log(notes.findNoteById($state.params.noteId));
  }
})();
