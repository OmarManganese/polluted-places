const mongoose = require("mongoose");

const pollutedPlaceSchema = new mongoose.Schema({
  location : {
    type: String,
    required: true
  },
  photoPath : {
    type: String,
    required: true
  },
});

const PollutedPlace = mongoose.model("PollutedPlace", pollutedPlaceSchema);

module.exports = PollutedPlace;