var MyApp = angular.module("MyApp", ["ui.router"]);

MyApp.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise("/intro");

  $stateProvider
    .state("main", {
      url: "/",
      templateUrl: "templates/main/main.html",
      controller: "MainController",
      controllerAs: "main"
    })
    .state("main.intro", {
      url: "intro",
      templateUrl: "templates/intro/intro.html",
    })
    .state("main.login", {
      url: "login",
      controller: "LoginController",
      templateUrl: "templates/login/login.html",
    })
    .state("main.other", {
      url: "other",
      templateUrl: "templates/other/other.html",
    })
});
