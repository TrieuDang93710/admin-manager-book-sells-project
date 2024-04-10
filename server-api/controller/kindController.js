const { Kind } = require("../model/modelKind");
const { Field } = require("../model/modelField");
const { Book } = require("../model/modelBook");

const kindController = {
  //ADD AUTHOR
  addKind: async (req, res) => {
    try {
      const newKind = new Kind(req.body);
      const savedKind = await newKind.save();
      res.status(200).json(savedKind);
    } catch (err) {
      res.status(500).json(err); //HTTP REQUEST CODE
    }
  },

  //GET ALL AUTHORS
  getAllKinds: async (req, res) => {
    try {
      const kinds = await Kind.find();
      res.status(200).json(kinds);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  //GET AN AUTHOR
  getAnKind: async (req, res) => {
    try {
      const kind = await Kind.findById(req.params.id).populate("books");
      res.status(200).json(kind);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  //UPDATE AUTHOR
  updateKind: async (req, res) => {
    try {
      const kind = await Kind.findById(req.params.id);
      await kind.updateOne({ $set: req.body });
      res.status(200).json("Updated successfully!");
    } catch (err) {
      res.status(500).json(err);
    }
  },

  //DELETE AUTHOR
  deleteKind: async (req, res) => {
    try {
      await Field.updateMany({ kinds: req.params.id }, { kinds: null });
      await Book.updateMany({ kinds: req.params.id }, { kinds: null });
      await Kind.findByIdAndDelete(req.params.id);
      res.status(200).json("Deleted successfully!");
    } catch (err) {
      res.status(500).json(err);
    }
  },
};

module.exports = kindController;
