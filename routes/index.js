'use strict';

var express = require('express');
var router = express.Router();

// if the request url has '.' just proceed; else return index.html
router.get('/*', function(req, res, next) {
  var url = req.url;
  var regexp = /\/\w*\.\w*/;
  if(regexp.test(url)) {
    next();
  }
  res.render('index', {
    url: url
  });
});

module.exports = router;
