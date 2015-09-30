(function() {
  var app = angular.module('notely', [
    'ui.router',
    'notely.notes',
    'notely.notes.service',
    'notely.login',
    'notely.login.service'
  ])
  .service('constants', function() {
    this.apiBasePath = 'https://nevernote-1150.herokuapp.com/api/v1/';
  });

  function config($urlRouterProvider) {
    $urlRouterProvider.otherwise('/notes/');
  }

  config['$inject'] = ['$urlRouterProvider'];
  app.config(config);
})();
