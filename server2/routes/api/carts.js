const express = require("express");
const router = express.Router();
const Cart = require("../../models/Cart");
const Book = require("../../models/Book");
const Customer = require("../../models/Customer");

// GET: Lấy thông tin giỏ hàng của khách hàng
router.get("/:customerId", async (req, res) => {
  const customerId = req.params.customerId;

  try {
    const customer = await Customer.findById(customerId);

    if (!customer) {
      return res.status(404).json({ message: "Customer not found" });
    }

    const cart = await Cart.findOne({ customer: customerId }).populate(
      "items.book"
    );
    res.json(cart);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// POST: Thêm sách vào giỏ hàng
router.post("/:customerId", async (req, res) => {
  const customerId = req.params.customerId;
  const { bookId, quantity } = req.body;

  try {
    const customer = await Customer.findById(customerId);

    if (!customer) {
      return res.status(404).json({ message: "Customer not found" });
    }

    const book = await Book.findById(bookId);
    if (!book) {
      return res.status(404).json({ message: "Book not found" });
    }

    let cart = await Cart.findOne({ customer: customerId });

    if (!cart) {
      cart = new Cart({ customer: customerId });
    }

    const existingCartItem = cart.items.find((item) =>
      item.book.equals(book._id)
    );

    if (existingCartItem) {
      existingCartItem.quantity += quantity;
    } else {
      cart.items.push({ book: book._id, quantity });
    }

    cart.total += book.sales ? book.price - (book.price * book.sales / 100) : book.price;

    await cart.save();

    res.status(201).json(cart);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// PUT: Cập nhật số lượng sách trong giỏ hàng
router.put('/:customerId/:bookId', async (req, res) => {
  const customerId = req.params.customerId;
  const bookId = req.params.bookId;
  const { quantity } = req.body;

  try {
    const customer = await Customer.findById(customerId);

    if (!customer) {
      return res.status(404).json({ message: 'Customer not found' });
    }

    const book = await Book.findById(bookId);
    if (!book) {
      return res.status(404).json({ message: 'Book not found' });
    }

    let cart = await Cart.findOne({ customer: customerId });

    if (!cart) {
      return res.status(404).json({ message: 'Cart not found' });
    }

    const existingCartItem = cart.items.find((item) => item.book.equals(book._id));

    if (existingCartItem) {
      existingCartItem.quantity = quantity;

      // Thực hiện populate để lấy đầy đủ thông tin của sách
      const updatedCart = await Cart.populate(cart, { path: 'items.book', model: 'Book' });

      // Cập nhật tổng giá trị giỏ hàng
      updatedCart.total = updatedCart.items.reduce((total, item) => {
        const discountedPrice = item.book.sales ? item.book.price - (item.book.price * item.book.sales / 100) : item.book.price;
        return total + discountedPrice * item.quantity;
      }, 0);

      await updatedCart.save();

      res.json(updatedCart);
    } else {
      return res.status(404).json({ message: 'Item not found in the cart' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// DELETE: Xóa sách khỏi giỏ hàng
router.delete('/:customerId/:bookId', async (req, res) => {
  const customerId = req.params.customerId;
  const bookId = req.params.bookId;

  try {
    const customer = await Customer.findById(customerId);

    if (!customer) {
      return res.status(404).json({ message: 'Customer not found' });
    }

    const book = await Book.findById(bookId);
    if (!book) {
      return res.status(404).json({ message: 'Book not found' });
    }

    let cart = await Cart.findOne({ customer: customerId });

    if (!cart) {
      return res.status(404).json({ message: 'Cart not found' });
    }

    const existingCartItemIndex = cart.items.findIndex((item) => item.book.equals(book._id));

    if (existingCartItemIndex !== -1) {
      // Lấy thông tin sách để tính toán giá tiền
      const removedItem = cart.items[existingCartItemIndex];
      const removedBook = await Book.findById(removedItem.book);

      // Cập nhật tổng giá trị giỏ hàng sau khi xóa sách
      cart.total -= removedBook.price * removedItem.quantity;

      // Xóa sách khỏi giỏ hàng
      cart.items.splice(existingCartItemIndex, 1);

      await cart.save();

      res.json(cart);
    } else {
      return res.status(404).json({ message: 'Item not found in the cart' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});



module.exports = router;
