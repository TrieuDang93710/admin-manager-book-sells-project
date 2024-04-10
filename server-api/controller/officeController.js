const { Office } = require("../model/modelOffice");
const { Staff } = require("../model/modelStaff");

const officeController = {
  //ADD AUTHOR
  addOffice: async (req, res) => {
    try {
      const newOffice = new Office(req.body);
      const savedOffice = await newOffice.save();
      res.status(200).json(savedOffice);
    } catch (err) {
      res.status(500).json(err); //HTTP REQUEST CODE
    }
  },

  //GET ALL AUTHORS
  getAllOffices: async (req, res) => {
    try {
      const offices = await Office.find();
      res.status(200).json(offices);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  //GET AN Office
  getAnOffice: async (req, res) => {
    try {
      const office = await Office.findById(req.params.id).populate("staff");
      res.status(200).json(office);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  //UPDATE AUTHOR
  updateOffice: async (req, res) => {
    try {
      const office = await Office.findById(req.params.id);
      await office.updateOne({ $set: req.body });
      res.status(200).json("Updated successfully!");
    } catch (err) {
      res.status(500).json(err);
    }
  },

  //DELETE AUTHOR
  deleteOffice: async (req, res) => {
    try {
      await Staff.updateMany({ office: req.params.id }, { office: null });
      await Office.findByIdAndDelete(req.params.id);
      res.status(200).json("Deleted successfully!");
    } catch (err) {
      res.status(500).json(err);
    }
  },
};

module.exports = officeController;
