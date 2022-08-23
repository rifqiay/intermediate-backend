const express = require("express");
const router = express.Router();
const {
  getAllTransactions,
  getTransaction,
  insertTransaction,
  updateTransaction,
  deleteTransaction,
} = require("../controller/transaction");
const { protect } = require("../middlewares/auth");

router
  .get("/", protect, getAllTransactions)
  .get("/:id", protect, getTransaction)
  .post("/", protect, insertTransaction)
  .put("/:id", protect, updateTransaction)
  .delete("/:id", protect, deleteTransaction);

module.exports = router;
