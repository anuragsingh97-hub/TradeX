const router = require("express").Router();
const controller = require("../controllers/positionsController");
const auth = require("../middleware/authMiddleware");

router.get("/", auth, controller.getPositions);

module.exports = router;