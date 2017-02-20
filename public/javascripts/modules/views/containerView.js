define(['backbone.marionette', 'ContainerTemplate'], function(Marionette, ContainerTemplate) {
  'use strict';

  return Marionette.View.extend({
    className: "container",
    template: ContainerTemplate
  });
});
