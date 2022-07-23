const express = require('express');
const router = express.Router();
const moviesCtrl = require('../controllers/movies');
const isLoggedIn = require('../config/auth')


router.get('/', moviesCtrl.allMovies)

// function(req, res, next) {
//     res.render( "movies/allMovies", {title: "Movies"})
// }

router.get("/addmovie",isLoggedIn ,moviesCtrl.addMovie)
//  function(req,res, next) {
//     res.render('movies/addMovie' , {title: "AddMovie"})
// })
router.get("/:id" , moviesCtrl.movieDetails)
// function(req,res,next) {
//     res.render("/movies/movieDetails" , {title: "movieDetails"})
// }

router.post("/", moviesCtrl.createMovie)


// router.delete("/:id", moviesCtrl.deleteMovie)


module.exports = router