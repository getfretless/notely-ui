angular.module('notely.notes.service', [])

.service('notes', function ($http) {
  var nevernoteBasePath = 'https://nevernote-1150.herokuapp.com/api/v1/';
  var user = { api_key: '$2a$10$TTc8gLTzfWBk9SsDO7p.J.acOzMMG535814CudrCMQgmjUSvbQ2ju' };
  var notes = [];

  this.all = function() {
    return notes;
  };

  this.fetchNotes = function (callback) {
    $http.get(nevernoteBasePath + 'notes?api_key=' + user.api_key)
      .success(function(notesData) {
        notes = notesData;
        typeof callback === 'function' && callback(notes);
      });
  };
});
