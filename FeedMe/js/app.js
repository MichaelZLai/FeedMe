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

<<<<<<< HEAD
  function mapFunction(){
    console.log("here");
    // mapboxgl.accessToken = 'pk.eyJ1IjoibWFya3M4MjgiLCJhIjoiY2l1dTZ0eG9vMDJhMzJ5b2VwdWpjbHJmeSJ9.pI-acZvMrbtOHhfSaui34Q';
    // var map = new mapboxgl.Map({
    //     container: 'map',
    //     style: 'mapbox://styles/mapbox/streets-v9',
    //     center: [-79.4512, 43.6568],
    //     zoom: 13
    // });
    //
    // map.addControl(new mapboxgl.Directions());
    var mymap = L.map('map').setView([30.263595, -97.762695], 15);

    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
      attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
      maxZoom: 18,
      id: 'marks828.207gggg3',
      accessToken: 'pk.eyJ1IjoibWFya3M4MjgiLCJhIjoiY2l1dTZ0eG9vMDJhMzJ5b2VwdWpjbHJmeSJ9.pI-acZvMrbtOHhfSaui34Q'
    })

    .addTo(mymap);
  }


  function FeedMeShow(){
    console.log("This is the show page!")
  }
=======
  function FeedMeIndex(foodFactory, $state){
    this.food = new foodFactory()
    this.create = function(){
    this.food.$save().then(function(food){
    $state.go("show",{id: food.id})
      })
    }
  }

  function FeedMeShow(foodFactory, $state){
    mapFunction()
    this.food = foodFactory.get({id: $state.params.id})
  }

  function Factory($resource){
      return $resource("http://localhost:3000/foods/:id", {}, {
        update: {method: "PUT"}
      })
    }
>>>>>>> e0baf07be00ae16fee992074f5957478b6a0113b

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
