/**
 * Create express object.
 */
var express = require('express');
/**
 * Session object declear
 */
var session = require('express-session');
/**
 * Cookie object declear
 */
var cookieParser = require('cookie-parser');
/**
 * Create app object & assign express object.
 */
var app = express();
/**
 * Create reload object.
 */
var reload = require('reload');
/**
 * Set view engine & point a view folder.
 */
app.set('view engine', 'ejs');
app.set('views', 'views');
/**
 * Register cookie
 */
app.use(cookieParser());
/**
 * Register session with secret key
 */
app.use(session({secret: 'kak'}));
/**
 * Add & register body parser
 */
var bodyParser = require('body-parser');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies
/**
 * Set site title.
 */
app.locals.siteTitle = 'Ecommerce';
/**
 * set public folder is static to use any where.
 * Public folder contents js, css, images
 */
app.use(express.static('public'));
/**
 * Add routes.
 */
app.use(require('./routers/pages'));
/**
 * Cache
 */
/*app.use(function (req, res, next) {
  res.header('Cache-Control', 'private, no-cache, no-store, must-revalidate');
  // -1 setting up request as expired and re-requesting before display again. 
  res.header('Expires', '-1');
  res.header('Pragma', 'no-cache');
  next();
});*/
/**
 * Create server.
 */

 const port = process.env.PORT || '3000';
 app.listen(port, () => {
  console.log('Listening..');
});