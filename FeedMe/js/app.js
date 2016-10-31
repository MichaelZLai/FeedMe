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

  function FeedMeIndex(){
    console.log("hello")
  }
  function FeedMeShow(){
    mapFunction()
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
