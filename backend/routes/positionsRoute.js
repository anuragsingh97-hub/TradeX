const router = require("express").Router();
const controller = require("../conrollers/positionsController");
const auth = require("../middleware/authMiddleware");

router.get("/", auth, controller.getPositions);

module.exports = router;