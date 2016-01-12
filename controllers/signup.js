'use strict';
var fs = require('fs');
var express = require('express');
var router = express.Router();
var app = express();
var cookieParser = require('cookie-parser');
var knex = require('../models/database').knex;

app.use(cookieParser());

module.exports = function (req, res) {
	
	res.render('signup.html')

};