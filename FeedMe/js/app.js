angular
  .module("feedme",[
    "ngResource",
    "ui.router"
  ])
  .config([
    "$stateProvider",
    Router
  ])
  .factory("FoodFactory", [
    "$resource",
    FoodFactory
  ])
  .controller("FeedMeNewCtrl",[
    "FoodFactory",
    "$state",
    FeedMeNew
  ])
  .controller("FeedMeShowCtrl",[
    "FoodFactory",
    "$state",
    FeedMeShow
  ])

  function mapFunction(){

    var mymap = L.map('map').setView([30.263595, -97.762695], 15);

    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
      attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
      maxZoom: 18,
      id: 'marks828.207gggg3',
      accessToken: 'pk.eyJ1IjoibWFya3M4MjgiLCJhIjoiY2l1dTZ0eG9vMDJhMzJ5b2VwdWpjbHJmeSJ9.pI-acZvMrbtOHhfSaui34Q'
    })

    .addTo(mymap);
  }

  function FeedMeNew(FoodFactory, $state){
    this.food = new FoodFactory()
    this.create = function(){
      this.food.$save().then(function(food){
        $state.go("show",{id: food.id})
      })
    }
  }

  function FeedMeShow(FoodFactory, $state){
    this.food = FoodFactory.get({id: $state.params.id})
    console.log(this.food)
    mapFunction(this.food)
  }

  function FoodFactory($resource){
      return $resource("http://localhost:3000/foods/:id", {}, {
        update: {method: "PUT"}
      })
    }

  function Router($stateProvider){
    $stateProvider
    .state("new",{
      url: "/feedme",
      templateUrl: "js/ng-views/new.html",
      controller: "FeedMeNewCtrl",
      controllerAs: "vm"
    })
    .state("show",{
      url: "/feeded/:id",
      templateUrl: "js/ng-views/show.html",
      controller: "FeedMeShowCtrl",
      controllerAs: "vm"
    })
  }
