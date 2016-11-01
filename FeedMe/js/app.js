var map
var marker

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


  function mapFunction(long, lat,img_url,business){
    mapboxgl.accessToken = 'pk.eyJ1IjoibWFya3M4MjgiLCJhIjoiY2l1dTZ0eG9vMDJhMzJ5b2VwdWpjbHJmeSJ9.pI-acZvMrbtOHhfSaui34Q';
    map = new mapboxgl.Map({
        container: 'map', // container id
        style: 'mapbox://styles/mapbox/streets-v9', //stylesheet location
        center: [long, lat], // starting position
        zoom: 15 // starting zoom
    });
    // marker = new mapboxgl.Marker()
    // .setLngLat([long, lat])
    // .addTo(map);
    // map.addControl(new mapboxgl.Directions)
    console.log("in map function",business)
    // Add Markers
    var geojson = {
        "type": "FeatureCollection",
        "features": [
            {
                "type": "Feature",
                "properties": {
                    "message": "foo",
                    "iconSize": [30, 30]
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        long,
                        lat
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "message": "foo",
                    "iconSize": [30, 30]
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        long,
                        lat
                    ]
                }
            }
        ]
    };
    geojson.features.forEach(function(marker) {
    // create a DOM element for the marker
    var el = document.createElement('div');
    el.className = 'marker';
    el.style.backgroundImage = 'url('+img_url+')';
    var popup = new mapboxgl.Popup({offset:[0, -30]})
    .setText('test here, addres sis this');
    el.style.width = marker.properties.iconSize[0] + 'px';
    el.style.height = marker.properties.iconSize[1] + 'px';

    // add marker to map
    new mapboxgl.Marker(el, {offset: [-marker.properties.iconSize[0] / 2, -marker.properties.iconSize[1] / 2]})
        .setLngLat(marker.geometry.coordinates)
        .setPopup(popup)
        .addTo(map);
});
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
    var vm = this
    this.setBizVars = function (biz) {
      vm.business = vm.businessArr[biz]
      vm.name = vm.business.name
      vm.addressArr = vm.business.location.display_address
      vm.phone = vm.business.phone
      vm.lat = vm.business.location.coordinate.latitude
      vm.long = vm.business.location.coordinate.longitude
      console.log(vm.long);
      vm.url = vm.business.url

      vm.img_url = vm.business.image_url
      mapFunction(vm.long, vm.lat, vm.img_url, vm.business)

    } /* function setBizVars */

    // no button function
    this.getNextBiz = function() {
      vm.currentBiz++;
      if (vm.currentBiz === vm.maxBiz) {
        console.log( "Max Business Length Reached")
        return true;
      }
      else {
        vm.setBizVars(vm.currentBiz)
        return false
      }

    } /* function getNextBiz */

    this.food = FoodFactory.get({id: $state.params.id}, function(food){
      vm.businessArr = food.businesses
      vm.maxBiz=vm.businessArr.length
      vm.currentBiz = 0
      vm.setBizVars(vm.currentBiz)
    })
  } /* feedMeShow */

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
