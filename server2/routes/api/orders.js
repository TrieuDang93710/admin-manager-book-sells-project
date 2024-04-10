const express = require('express');
const router = express.Router();
const Order = require('../../models/Order');
const Customer = require('../../models/Customer');
const Book = require('../../models/Book');

// GET: Lấy thông tin đơn hàng theo ID
router.get('/:orderId', async (req, res) => {
  const orderId = req.params.orderId;

  try {
    const order = await Order.findById(orderId).populate('customer items.book');
    
    if (!order) {
      return res.status(404).json({ message: 'Order not found' });
    }

    res.json(order);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// POST: Tạo đơn hàng mới
router.post('/', async (req, res) => {
  const { customerId, items, total, status, paymentMethod, shippingAddress } = req.body;

  try {
    const customer = await Customer.findById(customerId);

    if (!customer) {
      return res.status(404).json({ message: 'Customer not found' });
    }

    // Kiểm tra tính hợp lệ của các sách trong đơn hàng
    const bookIds = items.map((item) => item.book);
    const books = await Book.find({ _id: { $in: bookIds } });

    if (books.length !== bookIds.length) {
      return res.status(400).json({ message: 'Invalid books in the order' });
    }

    const newOrder = new Order({
      customer: customerId,
      items: items,
      total: total,
      status: status || 'Pending',
      paymentMethod: paymentMethod,
      shippingAddress: shippingAddress,
    });

    const savedOrder = await newOrder.save();

    res.status(201).json(savedOrder);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// PUT: Cập nhật trạng thái đơn hàng
router.put('/:orderId', async (req, res) => {
  const orderId = req.params.orderId;
  const { status } = req.body;

  try {
    const order = await Order.findByIdAndUpdate(orderId, { status }, { new: true });

    if (!order) {
      return res.status(404).json({ message: 'Order not found' });
    }

    res.json(order);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// DELETE: Xóa đơn hàng
router.delete('/:orderId', async (req, res) => {
  const orderId = req.params.orderId;

  try {
    const deletedOrder = await Order.findByIdAndDelete(orderId);

    if (!deletedOrder) {
      return res.status(404).json({ message: 'Order not found' });
    }

    res.json(deletedOrder);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
