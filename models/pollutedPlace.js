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

const PollutedPlace = mongoose.model("polluted-place", pollutedPlaceSchema);

module.exports = PollutedPlace;