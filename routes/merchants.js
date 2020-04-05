const express = require('express');
const Merchant = require('../models/merchant');

// configure routes

const router = express.Router();

router.route('/merchants')
	.get((req, res) => {
		Merchant.find((err, merchants) => {
			if (err) res.send(err);
			res.json(merchants);
		});
	})

	.post((req, res) => {
		const merchant = new Merchant(req.body);
		merchant.save((err) => {
			if (err) res.send(err);
			res.send({
				message: 'Merchant Added',
			});
		});
	});

router.route('/merchants/:id')
	.put((req, res) => {
		Merchant.findOne({
			_id: req.params.id,
		}, (err, merchant) => {
			if (err) res.send(err);

			for (prop in req.body) {
				merchant[prop] = req.body[prop];
			}

			// save the merchant
			merchant.save((err) => {
				if (err) res.send(err);

				res.json({
					message: 'Merchant updated!',
				});
			});
		});
	})

	.get((req, res) => {
		Merchant.findOne({
			_id: req.params.id,
		}, (err, merchant) => {
			if (err) res.send(err);

			res.json(merchant);
		});
	})

	.delete((req, res) => {
		Merchant.remove({
			_id: req.params.id,
		}, (err, merchant) => {
			if (err) res.send(err);

			res.json({
				message: 'Successfully deleted',
			});
		});
	});

module.exports = router;
