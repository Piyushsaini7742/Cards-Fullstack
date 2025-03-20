const mongoose = require("mongoose");

const cardSchema = new mongoose.Schema({
  img: {
    type: String,
  },
  foodName: String,
  starRating: {
    type: Number,
  },
  foods: {
    type: [String],
  },
  place: {
    type: String,
  },
  distance: {
    type: String,
  },
  cost: {
    type: String,
  }
});

const Cards = mongoose.model("Cards", cardSchema);

module.exports = Cards;
