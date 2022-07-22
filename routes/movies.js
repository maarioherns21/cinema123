const express = require('express');
const router =  express.Router();
const moviesCtrl =  require("../controllers/movies")


router.get('/', moviesCtrl.allMovies)

// function(req, res, next) {
//     res.render( "movies/allMovies", {title: "Movies"})
// }

router.get("/addmovie", moviesCtrl.addMovie)
//  function(req,res, next) {
//     res.render('movies/addMovie' , {title: "AddMovie"})
// })
router.get("/:id" , moviesCtrl.movieDetails)
// function(req,res,next) {
//     res.render("/movies/movieDetails" , {title: "movieDetails"})
// }

router.post("/", moviesCtrl.createMovie)


module.exports = router