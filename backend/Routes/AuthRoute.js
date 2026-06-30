// const { Signup, Login } = require('../controllers/authController')
// const router = require('express').Router()

// router.post('/signup', Signup)
// router.post('/login', Login)

// module.exports = router

const router = require("express").Router();
const authController = require("../controllers/authController");

router.post("/signup", authController.signup);

router.post("/login", authController.login);

router.post("/logout", authController.logout);

router.post("/send-otp", authController.sendOTP);

router.post("/verify-otp", authController.verifyOTP);

router.post("/reset-password", authController.resetPassword);

module.exports = router;