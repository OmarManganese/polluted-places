const PollutedPlace = require("../models/pollutedPlace");
const fs = require("fs");

const getAllPollutedPlaces = async (req, res) => {
  try {
    const pollutedPlaces = await PollutedPlace.find();
    res.status(201).send(pollutedPlaces);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const postPollutedPlace = async (req, res) => {
  try {
    const pollutedPlace = new PollutedPlace({
      location: req.body.location,
      photoPath: req.file.path,
    });
    await pollutedPlace.save();
    res.status(201).send(pollutedPlace);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const updatePollutedPlaceById = async (req, res) => {
  try {
    const id = req.params.id;
    const pollutedPlace = await PollutedPlace.findById(id);
    const updatedPollutedPlace = pollutedPlace;

    if (req.body.location) {
      updatedPollutedPlace.location = req.body.location;
    }

    if (req.file) {
      const { photoPath } = pollutedPlace;

      await fs.unlink(photoPath, (err) => {
        if (err) throw new Error(err);
      });

      updatedPollutedPlace.photoPath = req.file.path;
    }

    await PollutedPlace.findByIdAndUpdate(id, updatedPollutedPlace);

    res.status(201).send(updatedPollutedPlace);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const deletePollutedPlaceById = async (req, res) => {
  try {
    const id = req.params.id;
    const pollutedPlace = await PollutedPlace.findById(id);
    const { photoPath } = pollutedPlace;

    await fs.unlink(photoPath, (err) => {
      if (err) throw new Error(err);
    });

    await PollutedPlace.findByIdAndDelete(id);

    res.status(201).send("Polluted place deleted successfully");
  } catch (error) {
    res.status(400).send(error.message);
  }
};

module.exports = {
  getAllPollutedPlaces,
  postPollutedPlace,
  updatePollutedPlaceById,
  deletePollutedPlaceById
};
