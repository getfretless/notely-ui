angular.module('notely.notes.service', [])

.service('notes', ['$http', '$filter', function ($http, $filter) {
  var nevernoteBasePath = 'https://nevernote-1150.herokuapp.com/api/v1/';
  var user = { api_key: '$2a$10$TTc8gLTzfWBk9SsDO7p.J.acOzMMG535814CudrCMQgmjUSvbQ2ju' };
  var notes = [];

  this.all = function() {
    return notes;
  };

  this.fetchNotes = function (callback) {
    return $http.get(nevernoteBasePath + 'notes?api_key=' + user.api_key)
      .success(function(notesData) {
        notes = notesData;
        typeof callback === 'function' && callback(notes);
      });
  };

  this.findNoteById = function(noteId) {
    return ($filter('filter')(notes, { id: parseInt(noteId) }, true)[0] || {});
  };
}]);
