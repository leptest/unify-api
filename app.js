// Load Our Modules

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const users = require('./routes/users');
const merchants = require('./routes/merchants');
const referrals = require('./routes/referrals');
// var userReferrals = require('./routes/userReferrals');

const app = express();

app.all('*', (req, res, next) => {
	const origin = req.get('origin');
	res.header('Access-Control-Allow-Origin', origin);
	res.header('Access-Control-Allow-Headers', 'X-Requested-With');
	res.header('Access-Control-Allow-Headers', 'Content-Type');
	next();
});

// connect to our database
// Ideally you will obtain DB details from a config file

// var dbName='cra';
// var connectionString='mongodb://localhost:27017/'+dbName;

const connectionString = 'mongodb://heroku_n0c64hvd:v7j7von8qb6i2on17hbn9tu1mi@ds011241.mlab.com:11241/heroku_n0c64hvd';

mongoose.connect(connectionString);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api', users);
app.use('/api', merchants);
app.use('/api', referrals);
// app.use('/api', userReferrals);

module.exports = app;
