const mongoose = require('mongoose');

const { Schema } = mongoose;

const merchantSchema = new Schema({
	name: 'String',
	image: 'String',
});

module.exports = mongoose.model('Merchant', merchantSchema);
