(function() {
  angular.module('notely.login.service', [])
    .service('login', loginService);

  loginService['$inject'] = ['$http', '$state', 'constants'];
  function loginService($http, $state, constants) {

  }
})();
