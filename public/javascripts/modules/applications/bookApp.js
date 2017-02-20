define(['backbone', 'backbone.marionette'], function(Backbone, Marionette) {
  'use strict';

  return Marionette.Application.extend({
    root: null,
    book_list_view: null,
    onBeforeStart: function () {
      this.root = RootViewInstance.rootView;
    },
    onStart: function () {
      Backbone.history.start({
        pushState: true
      });
    }
  });
});
