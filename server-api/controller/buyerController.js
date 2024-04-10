const { Buyer } = require("../model/modelBuyer");
const { Book } = require("../model/modelBook");
const { Customer } = require("../model/modelCustomer");

const authorController = {
  //ADD AUTHOR
  addBuyer: async (req, res) => {
    try {
      const newBuyer = new Buyer(req.body);
      const savedBuyer = await newBuyer.save();
      if (req.body.customer) {
        const customer = Customer.findById(req.body.customer);
        await customer.updateOne({ $push: { buyer: savedBook._id } });
      }
      res.status(200).json(savedBuyer);
    } catch (err) {
      res.status(500).json(err); //HTTP REQUEST CODE
    }
  },

  //GET ALL AUTHORS
  getAllBuyers: async (req, res) => {
    try {
      const buyers = await Buyer.find().populate(["books", "customer"]);
      res.status(200).json(buyers);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  //GET AN AUTHOR
  getAnBuyer: async (req, res) => {
    try {
      const buyer = await Buyer.findById(req.params.id).populate([
        "books",
        "customer",
      ]);
      res.status(200).json(buyer);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  //UPDATE Buyer
  updateBuyer: async (req, res) => {
    try {
      const buyer = await Buyer.findById(req.params.id);
      await buyer.updateOne({ $set: req.body });
      res.status(200).json("Updated successfully!");
    } catch (err) {
      res.status(500).json(err);
    }
  },

  //DELETE AUTHOR
  deleteBuyer: async (req, res) => {
    try {
      await Book.updateMany({ buyer: req.params.id }, { buyer: null });
      await Customer.updateMany({ buyer: req.params.id }, { buyer: null });
      await Buyer.findByIdAndDelete(req.params.id);
      res.status(200).json("Deleted successfully!");
    } catch (err) {
      res.status(500).json(err);
    }
  },
};

module.exports = authorController;
