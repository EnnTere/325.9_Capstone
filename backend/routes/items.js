import express from "express";
const router = express.Router();

// Model
import itemModel from "../models/itemModel.js";

// Reminder: Need to finish PUT, i.e., updateItem, 
import { getAllItems, createAndSaveItem, createItem, deleteItem } from "../controllers/itemsC.js";



router.get("/items", getAllItems);
router.post("/items", createAndSaveItem);
router.post("/items", createItem);
// router.put("/items/:id", updateItem);
router.delete("/items/:id", deleteItem);



// Routes for specific items
router.route("/item/:id")
  .get(getAllItems)
  // .put(updateItem)
  .delete(deleteItem)




export default router;