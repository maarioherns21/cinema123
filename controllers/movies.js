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
