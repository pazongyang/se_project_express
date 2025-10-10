const express = require("express");
const auth = require("../middlewares/auth");
const userRouter = require("./users");
const clothingItemsRouter = require("./clothingItems");
const { NOT_FOUND } = require("../utils/errors");

const router = express.Router();

router.use("/items", clothingItemsRouter);
router.use("/users", auth, userRouter);

router.use((req, res) => {
  res.status(NOT_FOUND).send({ message: "Requested resource not found." });
});

module.exports = router;
