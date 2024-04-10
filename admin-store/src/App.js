import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./page/screen/Home.scss";
import Product from "./page/screen/product/Product";
import Home from "./page/screen/Home";
import Customer from "./page/screen/customer/Customer";
import Staff from "./page/screen/staff/Staff";
import Console from "./page/screen/console/Console";
import Order from "./page/order/Order";
import LoginSignup from "./register/Pages/LoginSignup";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginSignup />} />
        <Route path="/bandieukhien" element={<Console />} />
        <Route path="/quanlynhanvien" element={<Staff />} />
        <Route path="/quanlykhachhang" element={<Customer />} />
        <Route path="/quanlysanpham" element={<Product />} />
        <Route path="/quanlydonhang" element={<Order />} />
        <Route path="/quanlynoibo" element={<Home />} />
        <Route path="/bangkeluong" element={<Home />} />
        <Route path="/baocaodoanhthu" element={<Home />} />
        <Route path="/lichcongtac" element={<Home />} />
        <Route path="/quanlyhethong" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
