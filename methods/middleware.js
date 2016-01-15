module.exports = {
	myMiddleware: function(req, res, next) {
		if(req.method === 'GET') {
			console.log('this is a GET request');
		}
		next();
	}

};