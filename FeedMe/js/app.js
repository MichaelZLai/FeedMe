angular
  .module("feedme",[
    "ngResource",
    "ui.router"
  ])
  .config([
    "$stateProvider",
    Router
  ])
  .controller("FeedMeIndexCtrl",[
    FeedMeIndex
  ])

  function FeedMeIndex(){
    console.log("hello")
  }

  function Router($stateProvider){
    $stateProvider
    .state("index",{
      url: "/",
      templateUrl: "ng-views/index.html",
      controller: "FeedMeIndexCtrl",
      controllerAs: "vm"
    })
  }
