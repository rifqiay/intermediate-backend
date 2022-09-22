const express = require("express");
const router = express.Router();
const ProductRouter = require("../routes/products");
const CategoryRouter = require("../routes/category");
const UserRouter = require("../routes/users");
const transactionRouter = require("../routes/transaction");
const custommerRouter = require("../routes/custommer");
const sellers = require("../routes/sellers");

router
  .use("/products", ProductRouter)
  .use("/category", CategoryRouter)
  .use("/users", UserRouter)
  .use("/transaction", transactionRouter)
  .use("/custommer", custommerRouter)
  .use("/sellers", sellers);

module.exports = router;
