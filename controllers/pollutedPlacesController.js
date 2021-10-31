const PollutedPlace = require("../models/pollutedPlace");

const getAllPollutedPlaces = async (req, res) => {
  try {
    const pollutedPlaces = await PollutedPlace.find();
    res.status(201).send(pollutedPlaces);
  } catch (error) {
    res.satus(400).send(error.message);
  }
}



module.exports = {getAllPollutedPlaces};