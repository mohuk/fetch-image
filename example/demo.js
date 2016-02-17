(function(angular){
  'use strict';

  angular.module('demo', ['fetch.image'])
  .config(function(fiConfigProvider){
    fiConfigProvider.setHeaderKey('token');
    fiConfigProvider.setImageAccessor('data.data.avatar');
  })
    .controller('Demo', Demo);

  function Demo($scope){
    $scope.token = function(){
      return 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VySWQiOiI1NmM0MGMyMzEzZWFmN2U5NDI5ZjE1MjAiLCJpYXQiOjE0NTU2OTIzODUsImV4cCI6MTQ1NTc3ODc4NX0.Mvk0eNsHFtVaEXyYL7vv-8i0H3cTaffS3SN3Ai1SNag'
    }
  }

}(window.angular));
