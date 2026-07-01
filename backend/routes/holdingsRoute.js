const router = require("express").Router();
const auth = require("../middleware/authMiddleware");
const controller = require("../controllers/holdingsController");

router.get("/", auth, controller.getHoldings);

// router.post("/", auth, controller.createHolding);

// router.put("/:id", auth, controller.updateHolding);

// router.delete("/:id", auth, controller.deleteHolding);

module.exports = router;
