var knex = require('../models/database').knex;
var parseCookie = require('./cookie-parse.js');
var user = require('./returnUser.js');

module.exports = {
	authenticate: function(req, res, next) {
		var cookie = parseCookie.parseCookie(req.headers.cookie);
		user.returnUser(cookie, function(result) {
			if(result.length > 0) {
				next();
			} else {
				res.redirect('/login');
			}
		});
	}
};
