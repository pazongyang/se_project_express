const router = require("express").Router();
const { login, createUser } = require("../controllers/users");
const auth = require("../middlewares/auth");
const userRouter = require("./users");
const clothingItemsRouter = require("./clothingItems");

router.post("/signin", login);
router.post("/signup", createUser);

router.use(auth);
router.use("/users", userRouter);
router.use("/items", clothingItemsRouter);

router.use((req, res) => {
  res.status(404).json({ message: "Requested resource not found" });
});

module.exports = router;
