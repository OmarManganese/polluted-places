const PollutedPlace = require("../models/pollutedPlace");

const getAllPollutedPlaces = async (req, res) => {
  try {
    const pollutedPlaces = await PollutedPlace.find();
    res.status(201).send(pollutedPlaces);
  } catch (error) {
    res.status(400).send(error.message);
  }
}

const postPollutedPlace = async (req, res) => {
  try {
    const pollutedPlace = new PollutedPlace({
      location : req.body.location,
      photoPath : req.file.path
    });
    await pollutedPlace.save();
    res.status(201).send(pollutedPlace);
  } catch (error) {
    res.status(400).send(error.message);
  }
}



module.exports = {
  getAllPollutedPlaces,
  postPollutedPlace
};