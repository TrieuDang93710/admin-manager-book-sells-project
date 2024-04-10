const express = require('express');
const router = express.Router();
const Book = require('../../models/Book');
const { Category, BookType } = require('../../models/Category');


router.post('/books', async (req, res) => {
  try {
    const { categoryName, bookTypeName, bookData } = req.body;

    // Tạo một cuốn sách mới
    const newBook = new Book(bookData);
    // Kiểm tra xem thể loại sách có tồn tại không
    let category = await Category.findOne({ name: categoryName });

    if (!category) {
      // Nếu thể loại sách không tồn tại, tạo mới
      category = new Category({ name: categoryName });
    }

    // Kiểm tra xem loại sách có tồn tại không trong thể loại sách
    let bookType = category.bookTypes.find((type) => type.name === bookTypeName);

    if (!bookType) {
      // Nếu loại sách không tồn tại, tạo mới và thêm vào thể loại sách
      bookType = new BookType({ name: bookTypeName });
      bookType.books.push(newBook);
      category.bookTypes.push(bookType);
    } else {
      // Lưu cuốn sách vào loại sách
      bookType.books.push(newBook);
      console.log(bookType)
    }
    // Lưu loại sách và thể loại sách vào cơ sở dữ liệu
    await Promise.all([newBook.save(), bookType.save(), category.save()]);

    return res.status(201).json({ message: 'Book created successfully.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error.' });
  }
});

// Lấy danh sách các thể loại sách
router.get('/categories', async (req, res) => {
  try {
    const categories = await Category.find();
    return res.status(200).json(categories);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error.' });
  }
});

// Lấy thông tin về một cuốn sách theo ID
router.get('/books/:bookID', async (req, res) => {
  try {
    const bookID = req.params.bookID;
    const book = await Book.findById(bookID);
    console.log(book)
    if (!book) {
      return res.status(404).json({ message: 'Book not found.' });
    }

    return res.status(200).json(book);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error.' });
  }
});

// Cập nhật thông tin của một cuốn sách theo ID
router.put('/books/:bookID', async (req, res) => {
  try {
    const bookID = req.params.bookID;
    const updatedBookData = req.body;

    const book = await Book.findByIdAndUpdate(bookID, updatedBookData, { new: true });

    if (!book) {
      return res.status(404).json({ message: 'Book not found.' });
    }

    return res.status(200).json({ message: 'Book updated successfully.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error.' });
  }
});

// Xóa một cuốn sách theo ID
router.delete('/books/:bookID', async (req, res) => {
  try {
    const bookID = req.params.bookID;

    const book = await Book.findByIdAndDelete(bookID);

    if (!book) {
      return res.status(404).json({ message: 'Book not found.' });
    }

    return res.status(200).json({ message: 'Book deleted successfully.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error.' });
  }
});

//BOOKTYPES

router.delete('books/:bookTypeID', async (req, res) => {
  try {
    const bookTypeID = req.params.bookTypeID;

    const bookType = await BookType.findByIdAndDelete(bookTypeID);

    if (!bookType) {
      return res.status(404).json({ message: 'BookType not found.' });
    }

    return res.status(200).json({ message: 'BookType deleted successfully.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error.' });
  }
});

router.put('books/:bookTypeID', async (req, res) => {
  try {
    const bookTypeID = req.params.bookTypeID;
    const updatedBookTypeData = req.body;

    const bookType = await BookType.findByIdAndUpdate(bookTypeID, updatedBookTypeData, { new: true });

    if (!bookType) {
      return res.status(404).json({ message: 'BookType not found.' });
    }

    return res.status(200).json({ message: 'BookType updated successfully.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error.' });
  }
});

//CATEGORIES

router.put('books/:categoryID', async (req, res) => {
  try {
    const categoryID = req.params.categoryID;
    const updatedCategoryData = req.body;

    const category = await Category.findByIdAndUpdate(categoryID, updatedCategoryData, { new: true });

    if (!category) {
      return res.status(404).json({ message: 'Category not found.' });
    }

    return res.status(200).json({ message: 'Category updated successfully.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error.' });
  }
});

// Xóa một thể loại sách theo ID
router.delete('books/:categoryID', async (req, res) => {
  try {
    const categoryID = req.params.categoryID;

    const category = await Category.findByIdAndDelete(categoryID);

    if (!category) {
      return res.status(404).json({ message: 'Category not found.' });
    }

    return res.status(200).json({ message: 'Category deleted successfully.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error.' });
  }
});

module.exports = router;
