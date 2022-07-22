const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const movieSchema = new Schema(
  {
    movieName: String,
    runTime: { type: Number, default: false },
    movieInfo: String,
    yearRelease: { type: Number, default: false },
    movieClass: String,
    url: { type: String },
  },
  { timestamps: true }
);


module.exports = mongoose.model('Movie', movieSchema)