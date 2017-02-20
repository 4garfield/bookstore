'use strict';

requirejs.config({
  baseUrl: '/javascripts/modules',
  // modules not defined in baseUrl
  paths: {
    jquery: '/lib/jquery',
    underscore: '/lib/underscore',
    backbone: '/lib/backbone',
    'backbone.radio': '/lib/backbone.radio',
    'backbone.marionette': '/lib/backbone.marionette',
    handlebars: '/lib/handlebars',
    bootstrap: '/lib/bootstrap',
    text: '/lib/text'
  },
  // modules not defined with AMD
  shim: {
    underscore: {
      exports: '_'
    },
    backbone: {
      deps: ['underscore', 'jquery'],
      exports: 'Backbone'
    },
    handlebars: {
      exports: 'Handlebars'
    },
    bootstrap: {
      deps: ['jquery']
    }
  },
  // configure multiple modules. The "value" is an array of modules which will be loaded from the "key" module
  bundles: {
    template: ['NavbarTemplate', 'HeaderTemplate', 'ContainerTemplate', 'FooterTemplate', 'BookTemplate']
  }
});

// global instance object
var RootViewInstance = {};

requirejs(['./views/rootView'], function (RootView) {
  RootViewInstance = new RootView();
});

requirejs(['./controllers/bookController', './routers/bookRouter', './applications/bookApp', 'bootstrap'], function(BookController, BookRouter, BookApp) {
  var bookApp = new BookApp();
  var bookController = new BookController();
  bookApp.router = new BookRouter({
    controller: bookController
  });
  bookController.start();

  // prevent default link action, trigger app route
  $(document).on('click', 'a[href*="#"]', function(event) {
    event.preventDefault();
    event.stopPropagation();

    var href = $(this).prop('href');
    var app_route = href.match(/#.*/)[0].slice(1);
    bookApp.router.navigate(app_route, true);
  });

  bookApp.start();

  // after the app started, then the dom ready.

  // Highlight the top nav as scrolling occurs
  $('body').scrollspy({
    target: '.navbar-fixed-top',
    offset: 100
  });

  // Offset for Main Navigation
  $('#mainNav').affix({
    offset: {
      top: 50
    }
  });
});
