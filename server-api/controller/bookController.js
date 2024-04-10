const { Book } = require("../model/modelBook");
const { Author } = require("../model/modelAuthor");
const { Supplier } = require("../model/modelSupplier");
const { Field } = require("../model/modelField");
const { Status } = require("../model/modelStatus");
const { Buyer } = require("../model/modelBuyer");
const { Kind } = require("../model/modelKind");

const bookController = {
  //ADD A BOOK
  addABook: async (req, res) => {
    try {
      const newBook = new Book(req.body);
      const savedBook = await newBook.save();
      if (req.body.author) {
        const author = Author.findById(req.body.author);
        await author.updateOne({ $push: { books: savedBook._id } });
      }
      if (req.body.supplier) {
        const supplier = Supplier.findById(req.body.supplier);
        await supplier.updateOne({ $push: { books: savedBook._id } });
      }
      if (req.body.field) {
        const field = Field.findById(req.body.field);
        await field.updateOne({ $push: { books: savedBook._id } });
      }
      if (req.body.status) {
        const status = Status.findById(req.body.status);
        await status.updateOne({ $push: { books: savedBook._id } });
      }
      if (req.body.buyer) {
        const buyer = Buyer.findById(req.body.buyer);
        await buyer.updateOne({ $push: { books: savedBook._id } });
      }
      res.status(200).json(savedBook);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  //GET ALL BOOKS
  getAllBooks: async (req, res) => {
    try {
      const allBooks = await Book.find().populate([
        "author",
        "supplier",
        "field",
        "status",
      ]);
      res.status(200).json(allBooks);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  //GET A BOOK
  getABook: async (req, res) => {
    try {
      const book = await Book.findById(req.params.id).populate([
        "author",
        "supplier",
        "field",
        "status",
        "buyer",
      ]);
      res.status(200).json(book);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  //UPDATE BOOK
  updateBook: async (req, res) => {
    try {
      const book = await Book.findById(req.params.id);
      await book.updateOne({ $set: req.body });
      res.status(200).json("Updated successfully!");
    } catch (err) {
      res.status(500).json(err);
    }
  },

  //DELETE BOOK
  deleteBook: async (req, res) => {
    try {
      await Author.updateMany(
        { books: req.params.id },
        { $pull: { books: req.params.id } }
      );
      await Supplier.updateMany(
        { books: req.params.id },
        { $pull: { books: req.params.id } }
      );
      await Field.updateMany(
        { books: req.params.id },
        { $pull: { books: req.params.id } }
      );
      await Status.updateMany(
        { books: req.params.id },
        { $pull: { books: req.params.id } }
      );
      await Buyer.updateMany(
        { books: req.params.id },
        { $pull: { books: req.params.id } }
      );
      await Book.findByIdAndDelete(req.params.id);
      res.status(200).json("Deleted successfully");
    } catch (err) {
      res.status(500).json(err);
    }
  },
};

module.exports = bookController;
