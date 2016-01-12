var knex = require('../models/database').knex;
var parseCookie = require('./cookie-parse.js');
var promise = require('bluebird');

promise.promisifyAll(knex);


exports.authenticate = Promise.method(function() { 
	knex('users')
		.where('session_key', '96cf919f5331819c23e0235ede528818c2709ace6d96f3444a086f4d5ef50e9821f2a544b9e40f148a9178ce55d85eddb8aa04671104f2d596406dcdf07fdbb2')
		.then(function(data){ 
			return data 
		}); 
	});






































// exports.authenticate = function(rawCookie) {

// 	var result;
// 	var cookie = parseCookie.parseCookie(rawCookie);
// 	console.log(cookie); //returns cookie

// 	knex('users').where('session_key', '96cf919f5331819c23e0235ede528818c2709ace6d96f3444a086f4d5ef50e9821f2a544b9e40f148a9178ce55d85eddb8aa04671104f2d596406dcdf07fdbb2')
// 		.then(function(data) {
// 			if(data.length > 0) {
// 				result = true;
// 			} else {
// 				result = false;
// 			}
// 		});

		
// };


// function getSessionKeys(callback) {
// 	var sessionIdArray = [];
// 	knex.select('session_key')
// 		.from('users')
// 		.then(function(user) {
// 			user.forEach(function(item) {
// 				sessionIdArray.push(item.session_key);
// 				callback(sessionIdArray);
// 			});
// 		});
// };


// exports.authenticate = function(rawCookie) {
// 	if(rawCookie) {
// 		var processedCookie = rawCookie.split('=');
// 		var cookie = processedCookie[1];

// 		getSessionKeys(function(keys) {
// 			console.log(keys.indexOf(cookie));
// 		});
// 	};
// };