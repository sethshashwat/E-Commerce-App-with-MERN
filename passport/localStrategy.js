const User = require('../database/models/register')
const LocalStrategy = require('passport-local').Strategy
const bcrypt = require('bcryptjs');

const strategy = new LocalStrategy(
	{
		usernameField: 'email', 
		passwordField: 'password'
	},
	function (email, password, done) {
		User.findOne({ email: email }, (err, user) => {
			if (err) {
				return done(err)
			}
			if (!user) {
				return done(null, false, { message: 'Incorrect username' })
			}
			bcrypt.compare(password, user.password, (err, isMatch) => {
				if (err) throw err;
				if (isMatch) {
					return done(null, user);
				} else {
					return done(null, false, { message: 'Password incorrect' });
				}
			});
		})
	}
)

module.exports = strategy
