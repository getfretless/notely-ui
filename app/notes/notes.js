angular
  .module('notely.notes', ['ui.router'])
  .controller('NotesController', NotesController)
  .config(notesConfig);

notesConfig['$inject'] = ['$stateProvider', '$urlRouterProvider'];
function notesConfig($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('notes', {
      url: '/notes',
      abstract: true,
      templateUrl: '/notes/notes.html',
      controller: NotesController,
    })

    .state('notes.form', {
      url: '/:noteId',
      controller: function() {},
      templateUrl: '/notes/notes-form.html'
    });
}

NotesController['$inject'] = ['$state', '$scope', 'notes'];
function NotesController($state, $scope, notes) {
  notes.fetchNotes(function(notes) {
    $scope.notes = notes;
  });
  $state.go('notes.form');
}
