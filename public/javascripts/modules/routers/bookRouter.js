define(['backbone.marionette'], function(Marionette) {
  'use strict';

  return Marionette.AppRouter.extend({
    appRoutes: {
      'books/': 'showBookList'
      //'books/:book': 'showBook'
    }
  });
});
