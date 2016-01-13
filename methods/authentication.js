var knex = require('../models/database').knex;
var parseCookie = require('./cookie-parse.js');
var Promise = require('bluebird');

exports.authenticate = function(cookie) {
	return new Promise(function(resolve, reject) {
		    knex('users')
			.where('session_key', cookie)
			.then(function(data) {
				return data;
			});
	});
