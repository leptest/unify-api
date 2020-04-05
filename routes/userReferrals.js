const express = require('express');
const Referrals = require('../models/referral');
const Users = require('../models/user');
const Merchant = require('../models/merchant');


// configure routes

const router = express.Router();

router.route('/userReferrals/:id')
	.get((req, res) => {
		Users.findOne({
			_id: req.params.id,
		}, (err, user) => {
			if (err) res.send(err);

			console.log(user);

			res.json(user);
		});
	});

module.exports = router;
