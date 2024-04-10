const { Customer } = require("../model/modelCustomer");
const { Buyer } = require("../model/modelBuyer");

const customerController = {
  //ADD AUTHOR
  addCustomer: async (req, res) => {
    try {
      const newCustomer = new Customer(req.body);
      const savedCustomer = await newCustomer.save();
      res.status(200).json(savedCustomer);
    } catch (err) {
      res.status(500).json(err); //HTTP REQUEST CODE
    }
  },

  //GET ALL AUTHORS
  getAllCustomers: async (req, res) => {
    try {
      const customers = await Customer.find();
      res.status(200).json(customers);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  //GET AN AUTHOR
  getAnCustomer: async (req, res) => {
    try {
      const customer = await Customer.findById(req.params.id);
      res.status(200).json(customer);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  //UPDATE AUTHOR
  updateCustomer: async (req, res) => {
    try {
      const customer = await Customer.findById(req.params.id);
      await customer.updateOne({ $set: req.body });
      res.status(200).json("Updated successfully!");
    } catch (err) {
      res.status(500).json(err);
    }
  },

  //DELETE AUTHOR
  deleteCustomer: async (req, res) => {
    try {
      await Buyer.updateMany({ customer: req.params.id }, { customer: null });
      await Customer.findByIdAndDelete(req.params.id);
      res.status(200).json("Deleted successfully!");
    } catch (err) {
      res.status(500).json(err);
    }
  },
};

module.exports = customerController;
