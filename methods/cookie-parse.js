exports.parseCookie = function(rawCookie) {

	if(rawCookie) {
		var processedCookie = rawCookie.split('=');
		var cookie = processedCookie[1];
		return cookie;

	} else {
		console.log('no cookie found');
	}

};