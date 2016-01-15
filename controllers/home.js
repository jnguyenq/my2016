'use strict';
var fs = require('fs');
var express = require('express');
var router = express.Router();
var app = express();
var cookieParser = require('cookie-parser');
var knex = require('../models/database').knex;
var authentication = require('../methods/authentication.js');
var parseCookie = require('../methods/cookie-parse.js');
var myMiddleware = require('../methods/middleware.js');
var user = require('../methods/returnUser.js');


module.exports = function (req, res) {

	var cookie = parseCookie.parseCookie(req.headers.cookie);

	user.returnUser(cookie, function(result) {
		
		res.render('../views/home');
	});

};

