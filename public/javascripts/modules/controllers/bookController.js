define([
    'backbone',
    'backbone.marionette',
    '../views/navbarView',
    '../views/headerView',
    '../views/containerView',
    '../views/footerView',
    '../collections/bookCollection',
    '../views/bookListView'
  ], function(Backbone, Marionette, NavbarView, HeaderView, ContainerView, FooterView, BookCollection, BookListView) {
  'use strict';

  return Marionette.Object.extend({
    start: function () {
      this.showNavbar();
      this.showHeader();
      this.showContainer();
      this.showFooter();
    },
    showContainer: function() {
      RootViewInstance.showChildView('container', new ContainerView({}));
    },
    showNavbar: function() {
      RootViewInstance.showChildView('navbar', new NavbarView({}));
    },
    showHeader: function() {
      RootViewInstance.showChildView('header', new HeaderView({}));
    },
    showFooter: function() {
      RootViewInstance.showChildView('footer', new FooterView({}));
    },
    showBookList: function () {
      var collection = new BookCollection();
      collection.fetch();
      var bookListView = new BookListView({
        collection: collection,
        reorderOnSort: true
      });
      RootViewInstance.showChildView('container', bookListView);
    }
  });
});
