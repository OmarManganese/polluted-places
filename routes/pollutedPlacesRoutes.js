const express = require("express");
const {getAllPollutedPlaces, postPollutedPlace, updatePollutedPlaceById, deletePollutedPlaceById} = require("../controllers/pollutedPlacesController");
const imgUpload = require("../helpers/imgUpload");

const router = express.Router();

router.get("/", getAllPollutedPlaces);
router.post("/", imgUpload.single('file'), postPollutedPlace);
router.put("/:id", imgUpload.single('file'), updatePollutedPlaceById);
router.delete("/:id", deletePollutedPlaceById);

module.exports = router;