/* Module dependencies. */

var express = require('express');
var firebase = require("firebase");
var http = require('http');
var path = require('path');
var bodyParser = require('body-parser');
var handlebars = require('express3-handlebars');
var _ = require('lodash');

// Routes
var index = require('./routes/index');
var register = require('./routes/register');
var settings = require('./routes/settings');
var support = require('./routes/support');
var paymentinfo = require('./routes/paymentinfo');

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

//JSON OBJECTS
var users = require('./users.json');
var offers = require('./data.json');

// express variable
var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.all('/', function (req, res, next) {
  console.log('Someone made a request!');
  next();
});

// Add routes here
app.get('/', index.view);
app.get('/register', register.view);
app.get('/settings', settings.view);
app.get('/support', support.view);
app.get('/paymentinfo', paymentinfo.view);


app.get('/login', index.view);
app.post('/login', function (req, res) {
  var email = req.body.email;
  var passw = req.body.password;
  var retailer = req.body.retailer === 'on';
  var user = _.find(users.usersList, {'email': email, 'password': passw});
  if(user && retailer)
    res.redirect('/retailer/home');
  else if(user)
    res.redirect('/customer/home');
  else
    res.redirect('/login');
});

app.get('/register', register.view);
app.post('/register', function (req, res) {
  users.usersList.push(
      {
        "firstName": req.body.firstName,
        "lastName": req.body.lastName,
        "email": req.body.email,
        "password": req.body.password,
        "id": (users.usersList.length + 1)
      }
  );
  res.redirect('/login');
});

app.get('/users', function(req, res) {
  res.send(users);
});

app.get('/offers', function(req, res) {
  res.send(offers);
});

// Add customer routes
app.get('/customer/home', function(req, res){
  res.render('customer/home', offers);
});
app.get('/customer/deal', deal.view);
app.get('/customer/order-summary', orderSummary.view);
app.get('/customer/map', map.view);

//Add retailer routes
app.get('/retailer/home', retailerHome.view);
app.post('/retailer/home', function (req, res) {
  console.log(req.body.localImg);
  offers.offers.push({
    "owner": req.body.owner,
    "name": req.body.name,
    "id": offers.offers.length + 1,
    "wait-time": "35-50 min",
    "offer": req.body.offer,
    "price": parseInt(req.body.price),
    "price-per-unit": "$" + req.body.price + ".00/" + req.body.measure,
    "quantity": parseInt(req.body.quantity),
    "img": "http://images.indianexpress.com/2016/05/breads_759_thinkstockphotos-484163886.jpg",
    "local-img": "/images/food-bread.jpg"
  });
  res.redirect('/customer/home');
});

app.get('/retailer/info',retailerInfo.view);
app.get('/retailer/options',retailerOptions.view);
app.get('/retailer/verification',retailerVerification.view);
app.get('/retailer/confirmation', retailerConfirmation.view);


http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
