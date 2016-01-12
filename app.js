var express = require('express');
var app = express();
var router = express.Router();
var routes = require('./routes/routes');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var cookieSession = require('cookie-session');

app.use(express.static(__dirname + "/views"));
app.use(express.static(__dirname + "/public"));

//Body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');

//Routes
app.use(routes);

//Cookies
app.use(cookieParser());

var date = new Date();
var port = 3001;

app.listen(port, function() {
	console.log('Listening on port ' + port + ' at ' + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds());
});