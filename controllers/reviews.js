// this is our movie model, which can talk to the database
const movie = require('../models/movie');
const Movie = require('../models/movie')

module.exports = {
	create,
	delete:  deleteReview
}

function deleteReview(req, res, next){
	// Find the movie with the review!
	Movie.findOne({'reviews._id': req.params.id}, function(err, movieDocument){
		// find the subdocument itself, find the review in the movieDocument, that has the same id as our req.params.id
		// THE FINDING (ID)
		const review = movieDocument.reviews.id(req.params.id);
		// If the review wasn't made by the user redirect them back to the same page
		if(!review.user.equals(req.user._id)) return res.redirect(`/movies/${movieDocument._id}`);

		// remove the review
		// 1 way find the review then call remove method
		review.remove()
		// remove the review
		//THE REMOVIING (REMOVE)
		// movieDocument.reviews.remove(req.params.id) 
		movieDocument.save(function(err){
			if(err) next(err); // next(err) passes it to the express generator err handler
			res.redirect(`/movies/${movieDocument._id}`)
		})


	})


}

function create(req, res){
	// two things we need to know from the request?
	// req.params.id = id of the movie we want to tadd the review to
	// req.body - contents of the form, which is the review we want to add to the movie
	//
	// console.log(req.params.id)
	// res.send('hello im hitting the create route in the reviews change me later')
	// Find the movie from the database
	// Movie.findById is a mongoose Method
	Movie.findById(req.params.id, function(err, movieFromTheDatabase) {
 
		///ADD THE USER-CENTRIC INGFO TO REQ.BODY
		req.body.user = req.user._id;
		req.body.userName =  req.user.name;
		req.body.userAvatar = req.user.avatar;
		// add the review (req.body) to the movieFromTheDatabase
		movieFromTheDatabase.reviews.push(req.body); // mutating a document 
		// we have to tell mongodb we changed the document, 
		movieFromTheDatabase.save(function(err){
			console.log(movieFromTheDatabase)
			// then we want to respond to the client!
			 // redirect them to a page, What page makes sense to redirect?
			res.redirect(`/movies/${movieFromTheDatabase._id}`)	
		})

	})
		
	// res.send('hello')
	
	// 
	

}