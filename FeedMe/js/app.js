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
    "foodFactory",
    "$state",
    FeedMeIndex
  ])
  .controller("FeedMeShowCtrl",[
    "foodFactory",
    "$state",
    FeedMeShow
  ])
  .factory("foodFactory", [
    "$resource",
    Factory
  ])

  function FeedMeIndex(foodFactory, $state){
    this.food = new foodFactory()
    this.create = function(){
    this.food.$save().then(function(food){
    $state.go("show",{id: food.id})
  })
}
}

  function FeedMeShow(foodFactory, $state){
    this.food = foodFactory.get({id: $state.params.id})
}


  function Factory($resource){
      return $resource("http://localhost:3000/foods/:id", {}, {
        update: {method: "PUT"}
      })
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
      url: "/feeded/:id",
      templateUrl: "js/ng-views/show.html",
      controller: "FeedMeShowCtrl",
      controllerAs: "vm"
    })
  }
