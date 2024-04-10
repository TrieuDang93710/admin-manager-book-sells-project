const userController = require("../controller/userController");

const router = require("express").Router();

//Sign Up
router.post("/sign_up", userController.signUpUser);
// Login
router.post("/login", userController.loginUser);
