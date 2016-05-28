// Ionic Starter App

angular.module('starter', ['ionic'])

  .run(function($ionicPlatform) {
    $ionicPlatform.ready(function() {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      if(window.cordova && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      }
      if(window.StatusBar) {
        StatusBar.styleDefault();
      }
    });
  })


.directive('slickSlider',function($timeout){
    return {
      restrict: 'A',
      link: function(scope,element,attrs) {
        $timeout(function() {
          $(element).slick(scope.$eval(attrs.slickSlider));
        });
      }
    }
})

.controller('interestCtrl', function ($scope) {

    $scope.toggleClass = function($event, className) {
      className = className || 'active';
      $($event.target).toggleClass(className);
    };


});


