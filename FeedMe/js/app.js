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

  function mapFunction(lat, long){
    var mymap = L.map('map').setView([lat, long], 15);
      console.log("testing variable mymap",mymap)
    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
      attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
      maxZoom: 18,
      id: 'marks828.207gggg3',
      accessToken: 'pk.eyJ1IjoibWFya3M4MjgiLCJhIjoiY2l1dTZ0eG9vMDJhMzJ5b2VwdWpjbHJmeSJ9.pI-acZvMrbtOHhfSaui34Q'
    })

    .addTo(mymap);
  }
  function addTileLayer(){

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
    this.food = FoodFactory.get({id: $state.params.id}, function(food){
      vm.businessArr = food.businesses
      vm.maxBiz=vm.businessArr.length
      vm.currentBiz = 0
      vm.setBizVars(vm.currentBiz)
    })

    this.setBizVars = function (biz) {
      vm.business = vm.businessArr[biz]
      vm.name = vm.business.name
      vm.addressArr = vm.business.location.display_address
      vm.phone = vm.business.phone
      vm.lat = vm.business.location.coordinate.latitude
      vm.long = vm.business.location.coordinate.longitude
      vm.url = vm.business.url
      mapFunction(vm.lat, vm.long)
    } /* function setBizVars */

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
    }
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
