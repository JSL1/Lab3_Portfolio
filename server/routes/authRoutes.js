const express = require("express");
const router = express.Router();

const authController = require("../controllers/authController");

router.post("/login", (req, res, next) => {
    console.log("LOGIN ROUTE HIT");
    next();
}, authController.login);

router.post("/signup", (req, res, next) => {
    console.log("SIGNUP ROUTE HIT");
    next();
}, authController.signup);

module.exports = router;

