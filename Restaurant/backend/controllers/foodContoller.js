import foodModel from "../models/foodModel.js";
import fs from "fs";

// add a food item

const addItem = async (req, res) => {
  let image_filename;
  if (!req.file) {
    return res
      .status(400)
      .json({ success: false, message: "Image is required" });
  } else {
    image_filename = req.file.filename;
  }

  const food = new foodModel({
    name: req.body.name,
    description: req.body.description,
    image: image_filename,
    price: Number(req.body.price),
    category: req.body.category,
  });

  try {
    await food.save();
    res.json({ success: true, message: "Food Item added Successfully" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error" });
  }
};

// list food items

const listFood = async (req, res) => {
  try {
    const foods = await foodModel.find({});
    res.json({ success: true, data: foods });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error" });
  }
};

// remove food item
const removeItem = async (req, res) => {
  try {
    let food = await foodModel.findById(req.body.id);
    fs.unlink(`uploads/${food.image}`, (err) => {
      if (err) {
        console.log("Path is not correct", err);
      } else {
        console.log("image removed");
      }
    });

    await foodModel.findByIdAndDelete(req.body.id);
    res.json({ success: true, message: "Food item removed successfully" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error" });
  }
};
export { addItem, listFood, removeItem };
