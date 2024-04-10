const { Supplier } = require("../model/modelSupplier");
const { Book } = require("../model/modelBook");

const supplierController = {
  //ADD SUPPLIER
  addSupplier: async (req, res) => {
    try {
      const newSupplier = new Supplier(req.body);
      const savedSupplier = await newSupplier.save();
      res.status(200).json(savedSupplier);
    } catch (err) {
      res.status(500).json(err); //HTTP REQUEST CODE
    }
  },

  //GET ALL SUPPLIERS
  getAllSuppliers: async (req, res) => {
    try {
      const suppliers = await Supplier.find();
      res.status(200).json(suppliers);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  //GET AN SUPPLIER
  getAnSupplier: async (req, res) => {
    try {
      const supplier = await Supplier.findById(req.params.id).populate("books");
      res.status(200).json(supplier);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  //UPDATE SUPPLIER
  updateSupplier: async (req, res) => {
    try {
      const supplier = await Supplier.findById(req.params.id);
      await supplier.updateOne({ $set: req.body });
      res.status(200).json("Updated successfully!");
    } catch (err) {
      res.status(500).json(err);
    }
  },

  //DELETE SUPPLIER
  deleteSupplier: async (req, res) => {
    try {
      await Book.updateMany({ supplier: req.params.id }, { supplier: null });
      await Supplier.findByIdAndDelete(req.params.id);
      res.status(200).json("Deleted successfully!");
    } catch (err) {
      res.status(500).json(err);
    }
  },
};

module.exports = supplierController;
