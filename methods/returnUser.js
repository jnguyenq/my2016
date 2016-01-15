var knex = require('../models/database').knex;

exports.returnUser = function(cookie, callback) {

	return knex('users')
			.where('session_key', cookie)
			.then(function(data) {
				callback(data);
		});
};

