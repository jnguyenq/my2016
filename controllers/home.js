'use strict';
var fs = require('fs');
var express = require('express');
var router = express.Router();
var app = express();
var cookieParser = require('cookie-parser');
var knex = require('../models/database').knex;
var authentication = require('../methods/authentication.js');
var Promise = require('bluebird');
var parseCookie = require('../methods/cookie-parse.js');
<<<<<<< HEAD
// var Promise = require('promise');

module.exports = function (req, res) {
=======

module.exports = function (req, res) {
	
>>>>>>> 8651e4b822c13e6e5c67777a6d863468f827d08a

	var rawCookie = req.headers.cookie;
	var cookie = parseCookie.parseCookie(rawCookie);

<<<<<<< HEAD
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
=======
	authentication.ajhuthenticate(cookie)
		.then(function(result) {
			console.log(result);
		})
		.catch(function(err) {
			console.log('error!!', err);
		});





};
>>>>>>> 8651e4b822c13e6e5c67777a6d863468f827d08a
