const { Field } = require("../model/modelField");
const { Kind } = require("../model/modelKind");
const { Book } = require("../model/modelBook");

const fieldController = {
  //ADD AUTHOR
  addField: async (req, res) => {
    try {
      const newField = new Field(req.body);
      const savedField = await newField.save();
      res.status(200).json(savedField);
    } catch (err) {
      res.status(500).json(err); //HTTP REQUEST CODE
    }
  },

  //GET ALL AUTHORS
  getAllFields: async (req, res) => {
    try {
      const fields = await Field.find();
      res.status(200).json(fields);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  //GET AN AUTHOR
  getAnField: async (req, res) => {
    try {
      const field = await Field.findById(req.params.id).populate(["books"]);
      res.status(200).json(field);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  //UPDATE AUTHOR
  updateField: async (req, res) => {
    try {
      const field = await Field.findById(req.params.id);
      await field.updateOne({ $set: req.body });
      res.status(200).json("Updated successfully!");
    } catch (err) {
      res.status(500).json(err);
    }
  },

  //DELETE AUTHOR
  deleteField: async (req, res) => {
    try {
      await Book.updateMany({ field: req.params.id }, { field: null });
      await Kind.updateMany({ field: req.params.id }, { field: null });
      await Field.findByIdAndDelete(req.params.id);
      res.status(200).json("Deleted successfully!");
    } catch (err) {
      res.status(500).json(err);
    }
  },
};

module.exports = fieldController;
