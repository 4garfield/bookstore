define(['backbone.marionette', './bookView'], function(Marionette, BookView) {
  'use strict';

  return Marionette.CollectionView.extend({
    tagName: 'ul',
    childView: BookView,
    onChildviewClickItem: function(childView) {
      console.log('book item selected: ' + childView.model.id);
    }
  });
});
