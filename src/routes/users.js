const express = require("express");
const router = express.Router();
const {
  register,
  login,
  profile,
  refreshToken,
  getAllUsers,
} = require("../controller/users");
const { protect, admin } = require("../middlewares/auth");

router
  .post("/register", register)
  .post("/login", login)
  .post("/refersh-token", refreshToken)
  .get("/profile", protect, profile)
  .get("/", admin, getAllUsers);

module.exports = router;
