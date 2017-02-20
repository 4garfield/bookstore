define(['backbone.marionette', 'FooterTemplate'], function(Marionette, FooterTemplate) {
  'use strict';

  return Marionette.View.extend({
    className: "container",
    template: FooterTemplate
  });
});
