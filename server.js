/* Module dependencies. */

var express = require('express');
var firebase = require("firebase");
var http = require('http');
var path = require('path');
var handlebars = require('express3-handlebars');

// Routes
var index = require('./routes/index');

//Customer Routes
var customerHome = require('./routes/customer/home');
var deal = require('./routes/customer/deal');
var orderSummary = require('./routes/customer/order-summary');
var map = require('./routes/customer/map');

//Retailer Routes
var retailerHome = require('./routes/retailer/home');
var retailerOptions = require('./routes/retailer/options');
var retailerInfo = require('./routes/retailer/info');
var retailerVerification = require('./routes/retailer/verification');
var retailerConfirmation = require('./routes/retailer/confirmation');

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

// Add customer routes
app.get('/customer/home', customerHome.view);
app.get('/customer/deal', deal.view);
app.get('/customer/order-summary', orderSummary.view);
app.get('/customer/map', map.view);

//Add retailer routes
app.get('/retailer/home', retailerHome.view);
app.get('/retailer/info',retailerInfo.view);
app.get('/retailer/options',retailerOptions.view);
app.post('/retailer/verification',retailerVerification.view);
app.get('/retailer/confirmation', retailerConfirmation.view);


http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
