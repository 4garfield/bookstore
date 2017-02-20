define(['backbone.marionette', 'NavbarTemplate'], function(Marionette, NavbarTemplate) {
  'use strict';

  return Marionette.View.extend({
    tagName: "nav",
    id: "mainNav",
    className: "navbar navbar-default navbar-fixed-top affix-top",
    template: NavbarTemplate
  });
});
