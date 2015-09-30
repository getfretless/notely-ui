(function() {
  angular.module('notely.login.service', [])
    .service('login', loginService);

  loginService['$inject'] = ['$http', 'constants', 'AuthToken', 'CurrentUser'];
  function loginService($http, constants, AuthToken, CurrentUser) {
    this.login = function(user) {
      return $http.post(
        constants.apiBasePath + 'session', {
          user: user
        }
      ).success(function(result) {
        CurrentUser.set(result.user);
        AuthToken.set(result.auth_token);
      });
    }
  }
})();
