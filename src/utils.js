(function(angular){

  'use strict';

  angular.module('fetch.image')
    .factory('fiUtils', fiUtils);

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

}(window.angular));
