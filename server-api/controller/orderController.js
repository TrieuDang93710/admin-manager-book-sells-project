const { Book } = require("../model/modelBook");
const { Staff } = require("../model/modelStaff");
const { Buyer } = require("../model/modelBuyer");
const { Order } = require("../model/modelOrder");

const orderController = {
  //ADD A BOOK
  addOrder: async (req, res) => {
    try {
      const newOrder = new Order(req.body);
      const savedOrder = await newOrder.save();
      if (req.body.staff) {
        const staff = Staff.findById(req.body.staff);
        await staff.updateOne({ $push: { books: savedOrder._id } });
      }
      if (req.body.buyer) {
        const buyer = Buyer.findById(req.body.buyer);
        await buyer.updateOne({ $push: { books: savedOrder._id } });
      }
      res.status(200).json(savedOrder);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  //GET ALL BOOKS
  getAllOrder: async (req, res) => {
    try {
      const allOrders = await Order.find().populate(["staff", "buyer"]);
      res.status(200).json(allOrders);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  //GET A BOOK
  getOrder: async (req, res) => {
    try {
      const order = await Order.findById(req.params.id).populate([
        "staff",
        "buyer",
      ]);
      res.status(200).json(order);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  //UPDATE BOOK
  updateOrder: async (req, res) => {
    try {
      const order = await Order.findById(req.params.id);
      await order.updateOne({ $set: req.body });
      res.status(200).json("Updated successfully!");
    } catch (err) {
      res.status(500).json(err);
    }
  },

  //DELETE BOOK
  deleteOrder: async (req, res) => {
    try {
      await Staff.updateMany(
        { books: req.params.id },
        { $pull: { books: req.params.id } }
      );
      await Buyer.updateMany(
        { books: req.params.id },
        { $pull: { books: req.params.id } }
      );
      await Order.findByIdAndDelete(req.params.id);
      res.status(200).json("Deleted successfully");
    } catch (err) {
      res.status(500).json(err);
    }
  },
};
module.exports = orderController;
