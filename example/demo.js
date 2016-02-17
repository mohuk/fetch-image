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
      return 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VySWQiOiI1NmIwNTUzMzM5ZDFiNzcxM2M0NGIwOTgiLCJpYXQiOjE0NTU3MTAwMTAsImV4cCI6MTQ1NTc5NjQxMH0.0JJ-mWt4vSP64-vlW81Xk5PqWSc4yfboi6XqacV5_NQ';
    }
  }

}(window.angular));
