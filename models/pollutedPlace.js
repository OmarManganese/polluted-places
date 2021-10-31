const mongoose = require("mongoose");

const pollutedPlaceSchema = new mongoose.Schema(
  {
    location: {
      type: String,
      required: true,
    },
    photoPath: {
      type: String,
      required: true,
    },
  },
  { versionKey: false }
);

const PollutedPlace = mongoose.model("polluted-place", pollutedPlaceSchema);

module.exports = PollutedPlace;
