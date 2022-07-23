const passport = require('passport');
const GoogleStrategy = require( 'passport-google-oauth2' ).Strategy;
//Require your User Model here!
const User = require('../models/user')
// configuring Passport!

passport.use(
	new GoogleStrategy({

		clientID: process.env.GOOGLE_CLIENT_ID,
		clientSecret: process.env.GOOGLE_SECRET,
		callbackURL: process.env.GOOGLE_CALLBACK

	}, function(accessToken, refreshToken, profile, cb){

		User.findOne({googleId: profile.id}, function(err, user){

			if(user) return cb(null, user); 
			if(err) return cb(err)

			User.create({
				name: profile.displayName,
				googleId: profile.id,
				email: profile.emails[0].value,
				avatar: profile.photos[0].value
			}, function(err, createdUser){

				if(createdUser) return cb(null, createdUser)
				if(err) return cb(err)

			})


		})
	})
)
passport.serializeUser(function(user,cb){
  cb(null,user._id); // <--- storing the logged in tusers id in our session cookie
})
//this happens on every request after the user is logged in 
passport.deserializeUser(function(userId, cb){
  User.findById(userId, function(err, user){
      if(err) return cb(err);
      cb(null, user); // this assing  the user wwe just found to the request object aka 
      // req.user
  })
})