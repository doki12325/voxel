const express = require("express");

const {
  retrieveStartups,
  newStartup,
  uniqueFilters,
} = require("../controllers/startupController");

const router = express.Router();

router.post("/startups", retrieveStartups);
router.post("/newstartup", newStartup);
router.get("/uniquefilters", uniqueFilters);

module.exports = router;
