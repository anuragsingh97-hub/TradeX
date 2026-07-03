const router = require("express").Router();
const controller = require("../controllers/ordersController");
const auth = require("../middleware/authMiddleware");

router.get("/", auth, controller.getOrders);

router.post("/buy", auth, controller.buyStock);

router.post("/sell", auth, controller.sellStock);

module.exports = router; 