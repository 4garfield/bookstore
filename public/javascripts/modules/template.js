'use strict';

define('NavbarTemplate', ['handlebars','text!../../templates/navbar.hbs'], function(Handlebars, Template){
  return Handlebars.compile(Template);
});

define('HeaderTemplate', ['handlebars','text!../../templates/header.hbs'], function(Handlebars, Template){
  return Handlebars.compile(Template);
});

define('ContainerTemplate', ['handlebars','text!../../templates/container.hbs'], function(Handlebars, Template){
  return Handlebars.compile(Template);
});

define('FooterTemplate', ['handlebars','text!../../templates/footer.hbs'], function(Handlebars, Template){
  return Handlebars.compile(Template);
});

define('BookTemplate', ['handlebars','text!../../templates/book.hbs'], function(Handlebars, Template){
  return Handlebars.compile(Template);
});
