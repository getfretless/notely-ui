(function() {
  angular.module('notely.login')
    .service('AuthToken', AuthToken);

  AuthToken['$inject'] = ['$window'];
  function AuthToken($window) {
    var currentToken = $window.sessionStorage.authToken;

    this.set = function(token) {
      currentToken = token;
      $window.sessionStorage.authToken = token;
    };

    this.get = function() {
      return currentToken;
    }
  }
})();
