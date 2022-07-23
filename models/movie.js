const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
  content: {type: String, required: true},
  rating: {type: Number, min: 1, max: 5, default: 5},
  // Add the 3 new properties below
  user: {type: Schema.Types.ObjectId, ref: 'User'},
  userName: String,
  userAvatar: String
}, {
  timestamps: true
});


const movieSchema = new Schema(
  {
    movieName: String,
    runTime: { type: Number, default: false },
    movieInfo: String,
    yearRelease: { type: Number, default: false },
    movieClass: String,
    reviews: [reviewSchema],
    url: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Movie", movieSchema);
