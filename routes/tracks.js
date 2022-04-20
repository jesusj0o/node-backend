const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/session");
const {
  getItems,
  getItem,
  createItems,
  updateItem,
  deleteItem,
} = require("../controllers/tracks");
const {
  validatorCreateItem,
  validatorGetItem,
} = require("../validators/tracks");
const checkRole = require("../middleware/role");

//TODO: http"//localhost/tracks, GET, POST, DELETE, PUT

//Get all items
router.get("/", authMiddleware, getItems);
//Get item by id
router.get("/:id", authMiddleware, validatorGetItem, getItem);
//Create new item
router.post("/", authMiddleware, validatorCreateItem, createItems);
//Update item
router.put(
  "/:id",
  authMiddleware,
  validatorGetItem,
  validatorCreateItem,
  updateItem
);
//Delete item
router.delete("/:id", authMiddleware, validatorGetItem, deleteItem);

module.exports = router;
