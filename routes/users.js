const express = require("express");
const { validateSignup } = require("../middlewares/validation");
const { getCurrentUser, updateUser } = require("../controllers/users");

const router = express.Router();

router.get("/me", getCurrentUser);
router.patch("/me", validateSignup, updateUser); 

module.exports = router;

