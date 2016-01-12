'use strict';
var fs = require('fs');
var express = require('express');
var router = express.Router();
var app = express();
var cookieParser = require('cookie-parser');
var knex = require('../models/database').knex;
var authentication = require('../methods/authentication.js');
var Promise = require('bluebird');

module.exports = function (req, res) {
	

	// var result1 = Promise.method(authentication.authenticate(rawCookie).then(function(result) {
	// 	//console.log(result);
	// 	return result;
	// }));

	var rawCookie = req.headers.cookie;


	var result1 = Promise.method(function(rawCookie) {
		return authentication.authenticate(rawCookie).then(function(result) {
			return result;
		});
	});

	console.log(result1);
	// if(result === true) {
	// 	console.log('actually loggedin');
	// 	res.render('home.html');
	// } else {
	// 	console.log('nah');
	// 	res.redirect('/login');
	// }

};

