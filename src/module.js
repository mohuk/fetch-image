(function(angular){

  'use strict';

  angular.module('fetch.image', [])
    .provider('fiConfig', fiConfigProvider);

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

}(window.angular));
