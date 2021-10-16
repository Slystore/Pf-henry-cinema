const { Router } = require("express");
const router = Router();

const getCinemaRooms = require("../../controllers/cinemaRoom-controller/getCinemaRooms.js");

router.get("/", getCinemaRooms);
router.get("/:id", getCinemaRooms);

module.exports = router;