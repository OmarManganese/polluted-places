const express = require("express");
const {getAllPollutedPlaces, postPollutedPlace} = require("../controllers/pollutedPlacesController");
const imgUpload = require("../helpers/imgUpload");

const router = express.Router();

router.get("/", getAllPollutedPlaces);
router.post("/", imgUpload.single('file'), postPollutedPlace);

module.exports = router;