const express = require('express');
const router =  express.Router();

router.get('/Movies', function(req, res, next) {
    res.render( "movies/allMovies", {title: "Movies"})
})

module.exports = router