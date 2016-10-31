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
  .controller("FeedMeShowCtrl",[
    FeedMeShow
  ])

  function FeedMeIndex(){
    console.log("hello")
  }
  function FeedMeShow(){
    console.log("This is the show page!")
  }

  function Router($stateProvider){
    $stateProvider
    .state("index",{
      url: "/feedme",
      templateUrl: "js/ng-views/index.html",
      controller: "FeedMeIndexCtrl",
      controllerAs: "vm"
    })
    .state("show",{
      url: "/feeded",
      templateUrl: "js/ng-views/show.html",
      controller: "FeedMeShowCtrl",
      controllerAs: "vm"
    })
  }
