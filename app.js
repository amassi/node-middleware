
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , data = require('./routes/data')
  , store = require('./routes/store')  
  , http = require('http')
  , path = require('path');

var app = express();

app.configure(function(){
  app.set('port', process.env.PORT || 3000);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  // this enables jsonp support
  app.enable("jsonp callback");
  app.use(express.static(path.join(__dirname, 'public')));
});

app.configure('development', function(){
  app.use(express.errorHandler());
});

app.get('/', routes.index);
app.get('/data', data.findAll);
app.get('/data/:id', data.findById);
app.get('/store', store.get);

http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});
