var knex = require('../models/database').knex;
var parseCookie = require('./cookie-parse.js');
var Promise = require('bluebird');


exports.authenticate = function(cookie, callback) {
	
	return knex('users')
		.where('session_key', cookie)
		.then(function(data) {
			callback(data);
		});
};