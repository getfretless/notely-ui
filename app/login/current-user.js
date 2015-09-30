(function() {
  angular.module('notely.login')
    .service('CurrentUser', CurrentUser);

  function CurrentUser() {
    var currentUser;

    this.set = function(user) {
      var currentToken = user;
    };

    this.get = function() {
      return currentUser;
    }
  }
})();
