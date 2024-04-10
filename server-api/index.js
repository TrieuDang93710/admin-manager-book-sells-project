const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
var bodyParser = require("body-parser");
const morgan = require("morgan");
const dotenv = require("dotenv");
const multer = require("multer");
const jwt = require("jsonwebtoken");
const path = require("path");

// const registerRoute = require("./route/user");
const customerRoute = require("./route/customer");
const staffRoute = require("./route/staff");
const buyerRoute = require("./route/buyer");
const orderRoute = require("./route/order");
const officeRoute = require("./route/office");

const statusRoute = require("./route/status");
const kindRoute = require("./route/kind");
const fieldRoute = require("./route/field");
const supplierRoute = require("./route/supplier");
const authorRoute = require("./route/author");
const bookRoute = require("./route/book");

dotenv.config();

//CONECTING DB// APP CONFI
mongoose.connect(
  "mongodb+srv://server-api:server12345@cluster0.5iay7wi.mongodb.net/?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
  }
);

app.use(express.json());
app.use(bodyParser.json({ limit: "50mb" }));
app.use(cors());
app.use(morgan("common"));

//ROUTES
app.use("/v1/office", officeRoute);
app.use("/v1/status", statusRoute);
app.use("/v1/field", fieldRoute);
app.use("/v1/kind", kindRoute);
app.use("/v1/supplier", supplierRoute);
app.use("/v1/author", authorRoute);
app.use("/v1/book", bookRoute);

app.use("/v1/customer", customerRoute);
app.use("/v1/staff", staffRoute);
app.use("/v1/buyer", buyerRoute);
app.use("/v1/order", orderRoute);
// app.use("/v1/user", registerRoute);

const storage = multer.diskStorage({
  destination: "./",
  filename: (req, file, cb) => {
    return cb(
      null,
      `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`
    );
  },
});

const upload = multer({ storage: storage });

const Users = mongoose.model("Users", {
  name: {
    type: String,
  },
  email: {
    type: String,
    unique: true,
  },
  password: {
    type: String,
  },
  cartData: {
    type: Object,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

app.post("/signup", async (req, res) => {
  try {
    let check = await Users.findOne({ email: req.body.email });

    if (check) {
      return res
        .status(400)
        .json({ success: false, errors: "Người dùng đã tồn tại." });
    }

    let cart = {};
    for (let i = 0; i < 300; i++) {
      cart[i] = 0;
    }

    const user = new Users({
      name: req.body.username,
      email: req.body.email,
      password: req.body.password,
      cartData: cart,
    });

    await user.save();

    const data = {
      user: {
        id: user.id,
      },
    };

    const token = jwt.sign(data, "secret_ecom");
    res.json({ success: true, token });
  } catch (error) {
    console.error("Lỗi trong quá trình đăng ký:", error);
    res.status(500).json({ success: false, errors: "Lỗi máy chủ nội bộ" });
  }
});

app.post("/login", async (req, res) => {
  try {
    let user = await Users.findOne({ email: req.body.email });

    if (user) {
      const passCompare = req.body.password === user.password;

      if (passCompare) {
        const data = {
          user: {
            id: user.id,
          },
        };

        const token = jwt.sign(data, "secret_ecom");
        res.json({ success: true, token });
      } else {
        res.json({ success: false, errors: "Sai mật khẩu" });
      }
    } else {
      res.json({ success: false, errors: "Sai địa chỉ email" });
    }
  } catch (error) {
    console.error("Lỗi trong quá trình đăng nhập:", error);
    res.status(500).json({ success: false, errors: "Lỗi máy chủ nội bộ" });
  }
});

app.listen(process.env.PORT || 8000, () => {
  console.log("Server is running...");
});
