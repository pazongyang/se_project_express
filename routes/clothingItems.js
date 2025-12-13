const express = require("express");
const {
  validateCardBody,
  validateItemId,
} = require("../middlewares/validation");

const {
  getItems,
  createItem,
  deleteItem,
  likeItem,
  unlikeItem,
} = require("../controllers/clothingItems");

const auth = require("../middlewares/auth");

const router = express.Router();

router.get("/", getItems);

router.post("/", auth, validateCardBody, createItem);
router.delete("/:itemId", auth, validateItemId, deleteItem);
router.put("/:itemId/likes", auth, validateItemId, likeItem);
router.delete("/:itemId/likes", auth, validateItemId, unlikeItem);

module.exports = router;

