const router = require("express").Router();
const auth = require("../middleware/authMiddleware");
const controller = require("../controllers/holdingsController");

router.get("/", auth, controller.getHoldings);

module.exports = router;
