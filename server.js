/* Module dependencies. */

var express = require('express');
var http = require('http');
var path = require('path');
var handlebars = require('express3-handlebars');

// routes
var index = require('./routes/index');
var retailerHome = require('./routes/retailer/home');
var customerHome = require('./routes/customer/home');
var customerDeal = require('./routes/customer/deal');


// express variable
var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');
app.use(express.static(path.join(__dirname, 'public')));

// Add routes here
app.get('/', index.view);
app.get('/retailer/home', retailerHome.view);
app.get('/customer/home', customerHome.view);
app.get('/customer/deal',customerDeal.view);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
