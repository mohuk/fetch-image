if (typeof module !== 'undefined' && typeof exports !== 'undefined' && module.exports === exports){
  module.exports = 'fetch.image';
}

(function (angular) {
  'use strict';

  angular
    .module('fetch.image', [])
    .provider('fiConfig', fiConfigProvider)
    .directive('fiSrc', fetchImageDirective)
    .factory('fiUtils', fiUtils);

  /* @ ngInject */
  function fiConfigProvider(){
    var headerKey = 'Authorization';
    var accessor;
    this.setHeaderKey = setHeaderKey;
    this.setImageAccessor = setImageAccessor;

    function setHeaderKey(key){
      headerKey = key;
    }

    function setImageAccessor(val){
      accessor = val;
    }

    /* ngInject */
    this.$get = function(){
      return {
        header: headerKey,
        accessor: accessor
      };
    }
  }

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
            if(image){
              attrs.$set('src', 'data:image/jpeg;base64,' + image);
            }
            else{
              setAltImage();
            }
          }, setAltImage);

        function setAltImage(){
          attrs.$set('src', attrs.alt);
        }
      }
    }
  }

  /* @ngInject */
  function fiUtils(){
    return {
      parse: parse
    }
    // taken from http://stackoverflow.com/questions/6491463/accessing-nested-javascript-objects-with-string-key
    function parse(o, s){
      s = s.replace(/\[(\w+)\]/g, '.$1'); // convert indexes to properties
      s = s.replace(/^\./, '');           // strip a leading dot
      var a = s.split('.');
      for (var i = 0, n = a.length; i < n; ++i) {
        var k = a[i];
        if (k in o) {
          o = o[k];
        } else {
          return;
        }
      }
      return o;
    }
  }
})(window.angular);
