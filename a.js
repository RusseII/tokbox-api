var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var cors = require('cors');
var a = express();

// view engine setup
a.set('views', path.join(__dirname, 'views'));
a.set('view engine', 'jade');

a.use(cors());

// uncomment after placing your favicon in /public
// a.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
a.use(logger('dev'));
a.use(bodyParser.json());
a.use(bodyParser.urlencoded({ extended: false }));
a.use(cookieParser());
a.use(express.static(path.join(__dirname, 'public')));

a.use('/', index);

// catch 404 and forward to error handler
a.use(function (req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
a.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.a.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = a;
