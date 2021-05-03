var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');

// mongo
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var url = 'mongodb://localhost/StocksDB';

var indexRouter = require('./routes/index');
var testAPIRouter = require('./routes/testAPI');
var stocksRouter = require('./routes/stocks');

var app = express();

mongoose.connect(url, { useNewUrlParser: true });
var con = mongoose.connection;

con.on('open', () => {
  console.log('MongoDB connected!');
});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Import Routes
app.use('/', indexRouter);
app.use('/testAPI', testAPIRouter);
app.use('/stocks', stocksRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

app.listen(9000, () => {
  console.log('THE server has started');
});
module.exports = app;
