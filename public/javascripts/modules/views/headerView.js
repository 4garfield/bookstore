define(['backbone.marionette', 'HeaderTemplate'], function(Marionette, HeaderTemplate) {
  'use strict';

  return Marionette.View.extend({
    className: "container",
    template: HeaderTemplate
  });
});
