const { Staff } = require("../model/modelStaff");
const { Office } = require("../model/modelOffice");
const { Order } = require("../model/modelOrder");

const staffController = {
  //ADD AUTHOR
  addStaff: async (req, res) => {
    try {
      const newStaff = new Staff(req.body);
      const savedStaff = await newStaff.save();
      if (req.body.office) {
        const office = Office.findById(req.body.office);
        await office.updateOne({ $push: { staff: savedBook._id } });
      }
      res.status(200).json(savedStaff);
    } catch (err) {
      res.status(500).json(err); //HTTP REQUEST CODE
    }
  },

  //GET ALL AUTHORS
  getAllStaffs: async (req, res) => {
    try {
      const staffs = await Staff.find().populate(["office"]);
      res.status(200).json(staffs);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  //GET AN AUTHOR
  getAnStaff: async (req, res) => {
    try {
      const staff = await Staff.findById(req.params.id).populate(["office"]);
      res.status(200).json(staff);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  //UPDATE AUTHOR
  updateStaff: async (req, res) => {
    try {
      const staff = await Staff.findById(req.params.id);
      await staff.updateOne({ $set: req.body });
      res.status(200).json("Updated successfully!");
    } catch (err) {
      res.status(500).json(err);
    }
  },

  //DELETE AUTHOR
  deleteStaff: async (req, res) => {
    try {
      await Order.updateMany({ staff: req.params.id }, { staff: null });
      await Staff.findByIdAndDelete(req.params.id);
      res.status(200).json("Deleted successfully!");
    } catch (err) {
      res.status(500).json(err);
    }
  },
};

module.exports = staffController;
