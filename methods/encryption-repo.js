var crypto = require('crypto');

exports.createSalt = function *() { return crypto.randomBytes(64).toString('hex'); };

exports.createPassHash = function *(password, salt) { 
    var promiseToGetPassHash = new Promise(function (resolve, reject) {
        crypto.pbkdf2(password, salt, 10000, 128, 'sha512', function(err, key) {
            if (err) throw err;
            
            var passHash = key.toString('hex');
            
            resolve(passHash);
        });
    });
    
    return yield promiseToGetPassHash.then(function(passHash) {
        return passHash;
    });
};