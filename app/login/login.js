(function() {
  angular.module('notely.login', [
    'ui.router'
  ])
  .config(loginConfig);

  loginConfig['$inject'] = ['$stateProvider'];
  function loginConfig($stateProvider) {
    $stateProvider

      .state('login', {
        url: '/login',
        templateUrl: '/login/login.html',
        controller: LoginController,
        resolve: {
          loggedOut: function($q, $state, CurrentUser) {
            var deferred = $q.defer();
            if (CurrentUser.get().id) {
              $state.go('notes.form');
              deferred.reject();
            }
            else {
              deferred.resolve();
            }
            return deferred.promise;
          }
        }
      });
  }

  LoginController['$inject'] = ['$scope', '$state', 'CurrentUser', 'login'];
  function LoginController($scope, $state, CurrentUser, login) {
    $scope.user = {};

    $scope.login = function() {
      login.login($scope.user).success(function(result) {
        $state.go('notes.form', { noteId: undefined });
      });
    }
  }
})();
