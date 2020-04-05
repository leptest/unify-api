const mongoose = require('mongoose');

const { Schema } = mongoose;

const referralSchema = new Schema({
	merchantID: 'String',
	fromID: 'String',
	toID: 'String',
	points: 'String',
	status: 'String',
});

module.exports = mongoose.model('Referrals', referralSchema);
