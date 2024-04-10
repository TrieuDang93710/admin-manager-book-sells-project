const express = require('express');
const router = express.Router();
const Customer = require('../../models/Customer');
const bcrypt = require('bcrypt');
const saltRounds = 10;

// GET: Lấy thông tin tất cả khách hàng
router.get('/:customerId', async (req, res) => {
  const customerId = req.params.customerId;

  try {
    const customer = await Customer.findById(customerId).populate('cart orders');
    
    if (!customer) {
      return res.status(404).json({ message: 'Customer not found' });
    }

    res.json(customer);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// POST: Đăng ký mới khách hàng
router.post('/register', async (req, res) => {
  const { firstName, lastName, email, password, address, phoneNumber } = req.body;

  try {
    const existingCustomer = await Customer.findOne({ email });

    if (existingCustomer) {
      return res.status(400).json({ message: 'Email is already registered' });
    }

    const hashedPassword = await bcrypt.hash(password, saltRounds);

    const newCustomer = new Customer({
      firstName,
      lastName,
      email,
      password: hashedPassword,
      address,
      phoneNumber,
    });

    await newCustomer.save();

    res.status(201).json(newCustomer);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// POST: Tạo khách hàng mới
router.post('/register', async (req, res) => {
  const { firstName, lastName, email, password, address, phoneNumber } = req.body;

  try {
    const existingCustomer = await Customer.findOne({ email });

    if (existingCustomer) {
      return res.status(400).json({ message: 'Email is already in use' });
    }
    
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    const newCustomer = new Customer({
      firstName,
      lastName,
      email,
      password: hashedPassword,
      address,
      phoneNumber,
    });

    const savedCustomer = await newCustomer.save();

    // Tạo giỏ hàng mới cho khách hàng
    const newCart = new Cart({ customer: savedCustomer._id });
    await newCart.save();

    // Cập nhật ID giỏ hàng trong thông tin khách hàng
    savedCustomer.cart = newCart._id;
    await savedCustomer.save();

    res.status(201).json(savedCustomer);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// POST: Đăng nhập khách hàng
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const customer = await Customer.findOne({ email });

    if (!customer) {
      return res.status(404).json({ message: 'Customer not found' });
    }

    const passwordMatch = await bcrypt.compare(password, customer.password);

    if (!passwordMatch) {
      return res.status(401).json({ message: 'Invalid password' });
    }

    res.json(customer);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// PUT: Cập nhật thông tin khách hàng
router.put('/:customerId', async (req, res) => {
  const customerId = req.params.customerId;
  const { firstName, lastName, address, phoneNumber } = req.body;

  try {
    const customer = await Customer.findByIdAndUpdate(
      customerId,
      { firstName, lastName, address, phoneNumber },
      { new: true }
    );

    if (!customer) {
      return res.status(404).json({ message: 'Customer not found' });
    }

    res.json(customer);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// DELETE: Xóa khách hàng
router.delete('/:customerId', async (req, res) => {
  const customerId = req.params.customerId;

  try {
    const deletedCustomer = await Customer.findByIdAndDelete(customerId);

    if (!deletedCustomer) {
      return res.status(404).json({ message: 'Customer not found' });
    }

    // Xóa giỏ hàng và đơn hàng của khách hàng
    await Cart.findOneAndDelete({ customer: customerId });
    await Order.deleteMany({ customer: customerId });

    res.json(deletedCustomer);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
