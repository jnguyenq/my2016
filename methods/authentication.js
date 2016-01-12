var knex = require('../models/database').knex;
var parseCookie = require('./cookie-parse.js');

exports.authenticate = function(rawCookie) {

	var result;
	var cookie = parseCookie.parseCookie(rawCookie);
	console.log(cookie); //returns cookie

	knex('users').where('session_key', cookie)
		.then(function(data) {
			if(data.length > 0) {
				result = true;
			} else {
				result = false;
			}
		});
		
		console.log('result is ' + result);		
};