const router = require("express").Router();
const controller = require("../controllers/watchlistController");
const auth = require("../middleware/authMiddleware");

router.get("/", controller.getWatchlist);


module.exports = router;