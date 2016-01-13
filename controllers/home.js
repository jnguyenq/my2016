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

module.exports = function (req, res) {
	

	var rawCookie = req.headers.cookie;
	var cookie = parseCookie.parseCookie(rawCookie);

	authentication.ajhuthenticate(cookie)
		.then(function(result) {
			console.log(result);
		})
		.catch(function(err) {
			console.log('error!!', err);
		});





};
