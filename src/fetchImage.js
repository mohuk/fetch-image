(function(angular){

  'use strict';

  angular.module('fetch.image')
    .directive('fiSrc', fetchImageDirective);

  /* @ngInject */
  function fetchImageDirective($http, fiUtils, fiConfig, $parse){
    return {
      restrict: 'A',
      link: function(scope, elem, attrs){
        var token = $parse(attrs.fiToken)(scope);
        var url = attrs.fiSrc;
        var accessor = fiConfig.accessor || attrs.fiAcc || '';
        var config = {
          headers: {}
        };

        config.headers[fiConfig.header] = token;

        $http.get(url, config)
          .then(function(res){
            var image = fiUtils.parse(res, accessor);
            attrs.$set('src', 'data:image/jpeg;base64,' + image);
          });
      }
    }
  }

}(window.angular));
