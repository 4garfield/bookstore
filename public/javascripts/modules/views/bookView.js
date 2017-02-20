define(['backbone.marionette', 'BookTemplate'], function(Marionette, BookTemplate) {
  'use strict';

  return Marionette.View.extend({
    tagName: 'li',
    template: BookTemplate,
    modelEvents: {
      'change:book_name': 'listenBookChange'
    },
    triggers: {
      'click': 'click:item'
    },
    listenBookChange: function (model, value) {
      console.log("change the book_name as: " + value);
      this.render();
    }
  });
});
