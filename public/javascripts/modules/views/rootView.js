define(['backbone.marionette'], function(Marionette) {
  'use strict';

  return Marionette.View.extend({
    el: '#todoapp',
    regions: {
      navbar: '#app-navbar',
      header: '#app-header',
      container: '#app-container',
      footer: '#app-footer'
    }
  });
});
