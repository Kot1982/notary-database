const { Schema, model } = require("mongoose");

const reviewSchema = Schema({
  name: {
    type: String,
    required: true,
  },
  comment: {
    type: String,
    required: true,
  },
});

const Review = model("review", reviewSchema);

module.exports = Review;
