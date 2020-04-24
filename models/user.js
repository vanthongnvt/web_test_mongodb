var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
	username: {
		type: String,
		required: true
	},
	email: String,

	password:{
		type: String,
	},

	avatar: {
		type: String,
	},
	created: { 
		type: Date,
		default: Date.now
	}
});

var User = mongoose.model('User', userSchema);

module.exports = User;