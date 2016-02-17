(function (root, factory) {
  if (typeof define !== 'undefined' && define.amd) {
    define(['angular'] , function (angular) {
      factory(angular);
    });
  } else if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
      register: function(angular) {
        factory(angular);
      }
    };
  } else {
    factory(root.angular); // browser global (root is window)
  }
}(this, function (angular) {
  angular.module( ... );
}));