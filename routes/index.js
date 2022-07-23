const express = require('express');
const router = express.Router();
const passport =  require('passport')

/* GET home page. */
router.get('/Home', function(req, res, next) {
  res.render('Home', { title: 'Express' });
});

router.get('/about', function(req, res, next) {
  res.render('About' , {title: 'About page'})
})

router.get('/', function(req, res, next) {
  res.redirect('/movies')
});

// this is  going to take the client to the 3rd party login screen 
router.get('/auth/google', passport.authenticate(
  'google',
  { scope: ['profile', 'email'] }
));


/// google oauth callback route, this is after the #rd part login screen , google sends us here 
// Google OAuth callback route
router.get('/oauth2callback', passport.authenticate(
  'google',
  {
    successRedirect : '/movies',
    failureRedirect : '/movies'
  }
));

// logout route
router.get("/logout", function (req, res) {
  req.logout(function(err) {
    if (err) { return next(err); }
    res.redirect('/movies');
  });
});


module.exports = router;

