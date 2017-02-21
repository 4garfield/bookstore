'use strict';

var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var app = express();

// Use `.hbs` for template extensions.
var hbs  = require('express-hbs');
app.engine('hbs', hbs.express4({}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, '/views'));

// route to prerender.io or self-managed prerender server
//app.use(require('prerender-node').set('prerenderToken', 'tokenString'));

app.use(favicon(path.join(__dirname, 'public', 'images/favicon-32px.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(require('less-middleware')(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public')));

// load library js to client browser
app.use('/lib/underscore.js', express.static(path.join(__dirname, 'node_modules/underscore/underscore.js')));
app.use('/lib/jquery.js', express.static(path.join(__dirname, 'node_modules/jquery/dist/jquery.js')));
app.use('/lib/backbone.js', express.static(path.join(__dirname, 'node_modules/backbone/backbone.js')));
app.use('/lib/backbone.radio.js', express.static(path.join(__dirname, 'node_modules/backbone.radio/build/backbone.radio.js')));
app.use('/lib/backbone.marionette.js', express.static(path.join(__dirname, 'node_modules/backbone.marionette/lib/backbone.marionette.js')));
app.use('/lib/handlebars.js', express.static(path.join(__dirname, 'node_modules/handlebars/dist/handlebars.js')));
app.use('/lib/bootstrap.js', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/js/bootstrap.js')));
app.use('/lib/require.js', express.static(path.join(__dirname, 'node_modules/requirejs/require.js')));
app.use('/lib/text.js', express.static(path.join(__dirname, 'node_modules/text/text.js')));

// load other static library resource to client browser
app.use('/lib/backbone.radio.js.map', express.static(path.join(__dirname, 'node_modules/backbone.radio/build/backbone.radio.js.map')));
app.use('/lib/backbone.marionette.js.map', express.static(path.join(__dirname, 'node_modules/backbone.marionette/lib/backbone.marionette.js.map')));
app.use('/lib/bootstrap.css', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/css/bootstrap.css')));
app.use('/lib/bootstrap.css.map', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/css/bootstrap.css.map')));
app.use('/lib/device-mockups/device-mockups2.css', express.static(path.join(__dirname, 'vendor/device-mockups/device-mockups2.css')));
app.use('/lib/device-mockups/iphone_6/iphone_6_port_gold.png', express.static(path.join(__dirname, 'vendor/device-mockups/iphone_6/iphone_6_port_gold.png')));
app.use('/lib/font-awesome.css', express.static(path.join(__dirname, 'node_modules/font-awesome/css/font-awesome.css')));
app.use('/fonts/fontawesome-webfont.woff2', express.static(path.join(__dirname, 'node_modules/font-awesome/fonts/fontawesome-webfont.woff2')));
app.use('/lib/simple-line-icons.css', express.static(path.join(__dirname, 'node_modules/simple-line-icons/css/simple-line-icons.css')));
app.use('/fonts/Simple-Line-Icons.woff2', express.static(path.join(__dirname, 'node_modules/simple-line-icons/fonts/Simple-Line-Icons.woff2')));

var index = require('./routes/index');
app.use('/', index);

// catch 404
app.use(function(req, res, next) {
  res.status(404);
  res.sendFile(path.join(__dirname, "./views/404.html"));
});

// error handler
app.use(function(err, req, res, next) {
  res.status(500);
  res.sendFile(path.join(__dirname, "./views/500.html"));
});

module.exports = app;
