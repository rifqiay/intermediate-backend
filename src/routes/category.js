const express = require("express");
const router = express.Router();
const {
  getAllCategory,
  getCategory,
  insertCategory,
  updateCategory,
  deleteCategory,
  searching,
} = require("../controller/category");
const { protect } = require("../middlewares/auth");

router
  .get("/search", protect, searching)
  .get("/", protect, getAllCategory)
  .get("/:id", protect, getCategory)
  .post("/", protect, insertCategory)
  .put("/:id", protect, updateCategory)
  .delete("/:id", protect, deleteCategory);

module.exports = router;
