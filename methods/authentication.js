var knex = require('../models/database').knex;

exports.authenticate = function(rawCookie) {
	if(rawCookie) {
		var processedCookie = rawCookie.split('=');
		var cookie = processedCookie[1];
		var sessionIdArray = [];
		var result;
		knex.select('session_key')
			.from('users')
			.then(function(data) {
				data.forEach(function(item) {
					sessionIdArray.push(item.session_key);
				})
				if((sessionIdArray).indexOf(cookie) > -1) {
					console.log('session id exists; can log in');
					return true;
				} else {
					console.log('session id does not exist; hacker alert')
					return false;
				}
			})
			console.log(result);
			return result //this returns undefined
	} else {
		return false
		console.log('no cookie');
	}
};