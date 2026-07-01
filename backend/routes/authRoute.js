const router = require("express").Router();
const authController = require("../conrollers/authController");

router.post("/signup", authController.signup);

router.post("/login", authController.login);

router.post("/logout", authController.logout);

router.post("/send-otp", authController.sendOTP);

router.post("/verify-otp", authController.verifyOTP);


router.post("/reset-password", authController.resetPassword);

module.exports = router;