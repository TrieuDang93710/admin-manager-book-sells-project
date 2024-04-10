const { Status } = require("../model/modelStatus");
const { Book } = require("../model/modelBook");
const statusController = {
  //ADD AUTHOR
  addStatus: async (req, res) => {
    try {
      const newStatus = new Status(req.body);
      const savedStatus = await newStatus.save();
      res.status(200).json(savedStatus);
    } catch (err) {
      res.status(500).json(err); //HTTP REQUEST CODE
    }
  },

  //GET ALL AUTHORS
  getAllStatus: async (req, res) => {
    try {
      const status = await Status.find();
      res.status(200).json(status);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  //GET AN AUTHOR
  getAnStatus: async (req, res) => {
    try {
      const status = await Status.findById(req.params.id).populate("books");
      res.status(200).json(status);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  //UPDATE AUTHOR
  updateStatus: async (req, res) => {
    try {
      const status = await Status.findById(req.params.id);
      await status.updateOne({ $set: req.body });
      res.status(200).json("Updated successfully!");
    } catch (err) {
      res.status(500).json(err);
    }
  },

  //DELETE AUTHOR
  deleteStatus: async (req, res) => {
    try {
      await Book.updateMany({ status: req.params.id }, { status: null });
      await Status.findByIdAndDelete(req.params.id);
      res.status(200).json("Deleted successfully!");
    } catch (err) {
      res.status(500).json(err);
    }
  },
};

module.exports = statusController;
