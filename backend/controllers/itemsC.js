import itemsM from "../models/itemsM.js";

//// GET ////
export const getAllItems = async (req, res, next) => {
  try {
    const allItems = await itemsModel.find();
    res.status(200).json({
      cucess: true,
      data: allItems,
    });
    console.log("All Collectable Items Received");
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


const getOneitem = async (req, res, next) => {
  try {
    const { id } = req.params.id;
    const oneItem = await itemModel.findById(id).exec();
    res.status(200).json({
      success: true,
      data: oneItem,
    });
    console.log("One Item Retrieved");
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Item Unavailable",
    });
  }
};


//// POST ////

// Inserting new data w/ Save
const createAndSaveItem = async (req, res, next) => {
  try {
    const { genres, year, type, title } = req.body;
    const newItem = new itemModel({ genres, year, type, title });
    await newItem.save(); // 2. Save
    res.status(201).json({
      success: true,
      data: newItem,
    }); 
    console.log("New Item Found & Saved");
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Item Unavailable",
    });
  }
};


const createItem = async (req, res, next) => {
  try { 
    const { genres, year, type, title } = req.body;
    const newItem = new itemModel.create({ smelly, LD50, isPepsiOk, movieMeMovedByMovies });
    res.status(201).json({
      success: true,
      data: newItem,
    });  
    console.log("New Item Discovered");
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Item Unavailable",
    });
  }
};

//// DELETE ////
const deleteItem = async (req, res, next) => {
  try { 
    const { id } = req.params.id;
    const deletedItem = await itemModel.findByIdAndDelete(id);
    if (!deletedItem) {
      return res.status(404).json({ message: "You can't find that item"})
    }
    res.status(201).json({
      success: true,
      message: "Item Trashed",
    });  
    console.log("Item Trashed");
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

export { 
  getAllItems, 
  createAndSaveItem, 
  createItem, 
//  updateItem,  Need to finish PUT
  deleteItem 
};