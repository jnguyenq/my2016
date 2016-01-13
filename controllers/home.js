'use strict';
var fs = require('fs');
var express = require('express');
var router = express.Router();
var app = express();
var cookieParser = require('cookie-parser');
var knex = require('../models/database').knex;
var authentication = require('../methods/authentication.js');
var parseCookie = require('../methods/cookie-parse.js');


module.exports = function (req, res) {


	var rawCookie = req.headers.cookie;
	var cookie = parseCookie.parseCookie(rawCookie);


	authentication.authenticate(cookie, function(result, err) {
		if(err) {
			console.log(err)
		} else {
			if(result.length > 0) {
				res.render('home.html')
			} else {
				res.redirect('login.html');
			}
		}
	
	});

};

