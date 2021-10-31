const express = require("express");
const {getAllPollutedPlaces} = require("../controllers/pollutedPlacesController");


const router = express.Router();

router.get("/", getAllPollutedPlaces);


module.exports = router;