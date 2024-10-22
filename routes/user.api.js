const express = require("express");
const router = express.Router();
const userController = require("../controller/user.controller");
const authController = require("../controller/auth.controller");

// 1. 회원가입 endpoint
router.post("/", userController.createUser);
// 2. 로그인 endpoint
router.post("/login", userController.loginWithEmail);
// 토큰을 통해 유저 id를 빼내고 유저 id로 유저 객체 찾아서 보내주기
router.get("/me", authController.authenticate, userController.getUser);

module.exports = router;
