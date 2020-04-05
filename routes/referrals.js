const express = require('express');
const Referrals = require('../models/referral');

// configure routes

const router = express.Router();

router.route('/referrals')
	.get((req, res) => {
		Referrals.find((err, referrals) => {
			if (err) res.send(err);
			res.json(referrals);
		});
	})

	.post((req, res) => {
		const referral = new Referrals(req.body);
		referral.save((err) => {
			if (err) res.send(err);
			res.send({
				message: 'Referrals Added',
			});
		});
	})

	.delete((req, res) => {
		Referrals.remove({}, (err, referral) => {
			if (err) res.send(err);

			res.json({
				message: 'Successfully deleted all referrals',
			});
		});
	});

router.route('/referrals/:id')
	.put((req, res) => {
		Referrals.findOne({
			_id: req.params.id,
		}, (err, referral) => {
			if (err) res.send(err);

			for (prop in req.body) {
				referral[prop] = req.body[prop];
			}

			// save the referral
			referral.save((err) => {
				if (err) res.send(err);

				res.json({
					message: 'Referrals updated!',
				});
			});
		});
	})

	.get((req, res) => {
		Referrals.findOne({
			_id: req.params.id,
		}, (err, referral) => {
			if (err) res.send(err);

			res.json(referral);
		});
	})

	.delete((req, res) => {
		Referrals.remove({
			_id: req.params.id,
		}, (err, referral) => {
			if (err) res.send(err);

			res.json({
				message: 'Successfully deleted',
			});
		});
	});

module.exports = router;
