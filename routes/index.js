var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/Home', function(req, res, next) {
  res.render('Home', { title: 'Express' });
});

router.get('/about', function(req, res, next) {
  res.render('About' , {title: 'About page'})
})

module.exports = router;
