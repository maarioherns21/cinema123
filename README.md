### RELATIONSHIPS
A user has many movies(userMovies)/ a movie belongs to a User.
A user has many movies/  A movie belongs to a User.
A movie has many reviews/ A review belongs to a movie.

User Relatioship with Movies

#### Reviews

Note that in this app, a user can "add" a movie by creating it in the database mangoDB. these one-to-many relationships are modeled with a userMovie property on the movie model that references the  _id of the user that creates each particular movie.
in addition, a user can "review" and rate each movie. Which there is a Schema.

#### Updating/Deleting of Reviews

Each review and rating needs to know the user that submitted it. not just for display purposes, but to restrict the ability to update and/or delete a comment to that of the user that submitted. te userId property in the Reviews Schema holds the _id of the user that submitted the  review and can therefore be compared to the logged in the users  _id to render the additional UI for updating/deleting.


## Example Routing

#### Movies

|HTTP<br>Method|URL<br>Endpoint|Controller<br>Action|Purpose|
|---|---|---|---|
| GET | /movies | moviesCtrl.index | View all the movies submitted by the logged in user|
| GET | /movies/:id | moviesCtrl.show | View the details of any movie |
| GET | /movies/form | moviesCtrl.new | View a form for submitting a movie (be sure to define this route before the show route)|
| POST | /movies | moviesCtrl.create | Handle the new movie form being submitted |

#### Reviews

|HTTP<br>Method|URL<br>Endpoint|Controller<br>Action|Purpose|
|---|---|---|---|
| n/a | n/a | index action | View all the reviews for a movie - no route needed since reviews and ratings are  displayed under movie |
| n/a | n/a | show action | Viewing reviews |
| n/a | n/a | new action | The form to add a new review should be displayed on the movie show view |
| POST | /movies/:id/reviews | reviewsCtrl.create | Handle the new review form being submitted |
| GET | /reviews/:id/edit | reviewsCtrl.edit | View a form for editing a rerview (restrict to user who submitted the review) |
| PUT | /reviews/:id| reviewsCtrl.update | Handle the edit review form being submitted (restrict to user who submitted the review) |
| DELETE | /reviews/:id| reviewsCtrl.delete | Delete a review (restrict to user who submitted the review) |