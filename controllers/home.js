'use strict';
var fs = require('fs');
var express = require('express');
var router = express.Router();
var app = express();
var cookieParser = require('cookie-parser');
var knex = require('../models/database').knex;
var authentication = require('../methods/authentication.js');

module.exports = function (req, res) {
	
	var rawCookie = req.headers.cookie;
	var result = authentication.authenticate(rawCookie)

	if(result === true) {
		console.log('actually loggedin');
		res.render('home.html');
	} else {
		console.log('nah');
		res.redirect('/login');
	}

};

