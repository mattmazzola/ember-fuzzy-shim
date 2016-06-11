/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-fuzzy-shim',

  isDevelopingAddon: function() {
    return true;
  },

  included: function(app) {
    this._super.included.apply(this, arguments);
    
    app.import(app.bowerDirectory + '/fuzzy/lib/fuzzy.js');
    app.import('vendor/shims/fuzzy.js');
  }
};
