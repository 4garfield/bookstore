define(['backbone','../models/bookModel'], function(Backbone, Book) {
  'use strict';

  return Backbone.Collection.extend({
    model: Book,
    url: "/json/books.json"
  });
});
