const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
// const session = require('express-session');
const customerRoutes = require("./routes/api/customers");
const bookRoutes = require("./routes/api/books");
const cartRoutes = require("./routes/api/carts");
const orderRoutes = require("./routes/api/orders");

const app = express();
const PORT = process.env.PORT || 3001;
const MONGODB_URI =
  "mongodb+srv://fahasa123:fahasa123@cluster0.8mkqtsq.mongodb.net/?retryWrites=true&w=majority";

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// app.use(session({
//   secret: 'your-secret-key',
//   resave: false,
//   saveUninitialized: true,
// }));

// mongoose.connect(MONGODB_URI);
// const connection = mongoose.connection;
// connection.once("open", () => {
//   console.log("MongoDB connection established successfully");
// });
mongoose.connect(
  "mongodb+srv://fahasa123:fahasa123@cluster0.8mkqtsq.mongodb.net/?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
  }
);

// Sử dụng các tuyến đường
app.use("/api/customers", customerRoutes);
app.use("/api", bookRoutes);
app.use("/api/carts", cartRoutes);
app.use("/api/orders", orderRoutes);

app.use((req, res, next) => {
  res.status(404).json({ message: "Not Found" });
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: "Internal Server Error" });
});

// Khởi động máy chủ
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
