const movie = require("../models/movie");
const Movie = require("../models/movie");

module.exports = {
  allMovies,
  addMovie,
  movieDetails,
  createMovie,
};

function movieDetails(req, res) {
  Movie.findById(req.params.id, function (err, moviedb) {
    res.render("movies/movieDetails", {
      title: "Movie Details",
      movie: moviedb,
    });
  });
}

//this function renders  all the catalog oof  movies  that where created
function allMovies(req, res) {
  Movie.find({}, function (err, movies) {
    res.render("movies/allMovies", {
      movies,
      title: "All Movies",
    });
  });
}

function addMovie(req, res) {
  res.render("movies/addMovie", { title: "Add Movie" });
}

function createMovie(req, res) {
  const movie = new Movie(req.body);
  console.log(req.body)
  movie.save(function (err) {
    console.log(err, "this is erroor");

    if (err) return res.redirect("movies/addMovie");

    res.redirect(`/movies/${movie._id}`);
  });
}



// function deleteMovie (req, res, next ){

//   Movie.findOne({'movie._id': req.params.id} , function (err, movieIndex) {
//     console.log(req.params.id)
//     const movie = movieIndex(req.params.id)
  
//     movie.remove()


//     movieIndex.save(function(err) {
//       if(err) next(err); // next(err) passes it to the express generator err handler
// 			res.redirect(`/movies`)
//     })

//   })
// }






// function deleteMovie(req, res, next) {
//    const movieIndex = getMovieIndex(req.params.id)
   
//   console.log(req.params.id)
//    if( movieIndex === -1)
//    return  res.redirect("movies/addMovie");
   
//   movie.splice(movieIndex , 1) 
//   res.redirect('/movies')
// }



// router.delete('/users/:userId', (req, res) => {
//   const userIndex = getUserIndex(req.params.userId)
 
//   if (userIndex === -1) return res.status(404).json({})
 
//   users.splice(userIndex, 1)
//   res.json(users)
//  })