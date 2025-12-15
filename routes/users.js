const express = require("express");
const { validateUpdateUser } = require("../middlewares/validation");
const { getCurrentUser, updateUser } = require("../controllers/users");

const router = express.Router();

router.get("/me", getCurrentUser);
router.patch("/me", validateUpdateUser, updateUser);

module.exports = router;
