const router = require("express").Router();
const userController = require("../conrollers/userController");
const auth = require("../middleware/authMiddleware");

router.get("/profile", auth, userController.getProfile);
//get routers
router.put("/profile", auth, userController.updateProfile);
router.post("/addfunds", auth, userController.AddFunds);
router.post("/withdrawfunds", auth, userController.WithdrawFunds);
router.get("/summary", auth, userController.PortfolioSummary);
router.get("/funds", auth, userController.fund);
module.exports = router;
