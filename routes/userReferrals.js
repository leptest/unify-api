var Referrals = require('../models/referral');
var Users = require('../models/user');
var Merchant=require('../models/merchant');

var express = require('express');

//configure routes

var router = express.Router();

router.route('/userReferrals/:id')
	.get(function(req, res) {
		Users.findOne({
			_id: req.params.id
		}, function(err, user) {
			if (err)
				res.send(err);

			console.log(user);

			res.json(user);
		});
	});

module.exports = router;
