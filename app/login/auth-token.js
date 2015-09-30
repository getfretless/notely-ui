(function() {
  angular.module('notely.login')
    .service('AuthToken', AuthToken);

  AuthToken['$inject'] = ['$window'];
  function AuthToken($window) {
    var authToken = JSON.parse($window.localStorage.getItem('authToken')) || undefined;

    this.set = function(token) {
      authToken = token;
      $window.localStorage.setItem('authToken', JSON.stringify(authToken));
    };

    this.get = function() {
      return authToken;
    };

    this.clear = function() {
      $window.localStorage.removeItem('authToken');
      authToken = undefined;
    };
  }
})();
