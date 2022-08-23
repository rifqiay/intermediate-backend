const express = require("express");
const router = express.Router();
const upload = require("../middlewares/upload");
const {
  getAllProduct,
  getProduct,
  insertProduct,
  updateProduct,
  deleteProduct,
  searching,
} = require("../controller/products");
const { protect } = require("../middlewares/auth");

const {
  hitCacheProductDetail,
  clearCacheProductDetail,
} = require("../middlewares/redis");

router
  .get("/search", protect, searching)
  .get("/", protect, getAllProduct)
  .get("/:id", protect, hitCacheProductDetail, getProduct)
  .post("/", protect, upload.single("photo"), insertProduct)
  .put("/:id", protect, upload.single("photo"), updateProduct)
  .delete("/:id", protect, clearCacheProductDetail, deleteProduct);

module.exports = router;
