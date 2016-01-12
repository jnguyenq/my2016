var knex = require('../models/database').knex;
var parseCookie = require('./cookie-parse.js');
var Promise = require('bluebird');

//Promise.promisifyAll(knex);


exports.authenticate = Promise.method(function(rawCookie) { 
	var cookie = parseCookie.parseCookie(rawCookie);
	return knex('users')
		.where('session_key', cookie)
		.then(function(data){ 
			return data 
		}); 
	});

