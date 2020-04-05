const express = require('express');
const User = require('../models/user');

// configure routes

const router = express.Router();

router.route('/users')
	.get((req, res) => {
		User.find((err, users) => {
			if (err) res.send(err);
			res.json(users);
		});
	})

	.post((req, res) => {
		const user = new User(req.body);
		user.save((err) => {
			if (err) res.send(err);
			res.send({ message: 'User Added' });
		});
	});

router.route('/users/:id')
	.put((req, res) => {
		User.findOne({ _id: req.params.id }, (err, user) => {
			if (err) res.send(err);

			for (prop in req.body) {
				user[prop] = req.body[prop];
			}

			// save the user
			user.save((err) => {
				if (err) res.send(err);

				res.json({ message: 'User updated!' });
			});
		});
	})

	.get((req, res) => {
		User.findOne({ _id: req.params.id }, (err, user) => {
			if (err) res.send(err);

			res.json(user);
		});
	})

	.delete((req, res) => {
		User.remove({
			_id: req.params.id,
		}, (err, user) => {
			if (err) res.send(err);

			res.json({ message: 'Successfully deleted' });
		});
	});

module.exports = router;
