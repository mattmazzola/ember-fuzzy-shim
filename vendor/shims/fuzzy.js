(function() {
  function vendorModule() {
    'use strict';

    return { 'default': self['fuzzy'] };
  }

  define('fuzzy', [], vendorModule);
})();
