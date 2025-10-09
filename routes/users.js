const express = require("express");
const {
  createUser,
  login,
  getUser,
  updateUser,
} = require("../controllers/users");
const auth = require("../middlewares/auth");

const router = express.Router();

router.post("/signup", createUser);
router.post("/signin", login);

router.use(auth);

router.get("/me", getUser);
router.patch("/me", updateUser);

module.exports = router;
