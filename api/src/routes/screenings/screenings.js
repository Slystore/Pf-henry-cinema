const { Router } = require("express");
const router = Router();

const getScreenings = require("../../controllers/screening-controller/getScreenings.js");

router.get("/", getScreenings);
router.get("/:id", getScreenings);

module.exports = router;