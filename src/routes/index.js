const express = require("express");
const router = express.Router();
const ProductRouter = require("../routes/products");
const CategoryRouter = require("../routes/category");
const UserRouter = require("../routes/users");
const transactionRouter = require("../routes/transaction");

router
  .use("/products", ProductRouter)
  .use("/category", CategoryRouter)
  .use("/users", UserRouter)
  .use("/transaction", transactionRouter);

module.exports = router;
