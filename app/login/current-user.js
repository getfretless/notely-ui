(function() {
  angular.module('notely.login')
    .service('CurrentUser', CurrentUser);

  CurrentUser['$inject'] = ['$window'];
  function CurrentUser($window) {
    var currentUser = $window.sessionStorage.currentUser || {};

    this.set = function(user) {
      currentUser = user;
      $window.sessionStorage.currentUser = currentUser;
    };

    this.get = function() {
      return currentUser;
    }
  }
})();
