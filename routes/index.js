const router = require("express").Router();
const { login, createUser } = require("../controllers/users");

const { validateSignup, validateLogin } = require("../middlewares/validation");

const auth = require("../middlewares/auth");
const userRouter = require("./users");
const clothingItemsRouter = require("./clothingItems");

router.post("/signin", validateLogin, login);
router.post("/signup", validateSignup, createUser);

router.use("/items", clothingItemsRouter);

router.use(auth);

router.use("/users", userRouter);

const { NotFoundError } = require("../errors");

router.use((req, res, next) => {
  next(new NotFoundError("Requested resource not found"));
});

module.exports = router;
