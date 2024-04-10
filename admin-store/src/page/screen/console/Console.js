import React, { useEffect, useState } from "react";
import Card from "../../../component/Card";
import Main from "../../../component/Main";
import NavBar from "../../../component/NavBar";
import Title from "../../../component/Title";

import "../Home.scss";
import TableConsole from "./TableConsole";
import axios from "axios";

function Console() {
  var titleOfOrder = [
    { id: 1, title: "Mã hóa đơn" },
    { id: 2, title: "Mã khách hàng" },
    { id: 3, title: "Số lượng" },
    { id: 4, title: "Giá sản phẩm" },
    { id: 5, title: "Tổng tiền" },
    { id: 6, title: "trạng thái" },
  ];
  var titleOfCustomer = [
    { id: 1, title: "Tên khách hàng" },
    { id: 2, title: "Địa chỉ" },
    { id: 3, title: "Giới tính" },
    { id: 4, title: "Email" },
  ];
  var titleOfProduct = [
    { id: 1, title: "Tên sản phẩm" },
    { id: 2, title: "Số lượng" },
    { id: 3, title: "Trạng thái" },
  ];
  const [customerList, setCustomerList] = useState([]);
  const [bookLists, setBookLists] = useState([]);
  const [orderList, setOrderList] = useState([]);
  useEffect(() => {
    axios.get(`http://localhost:8000/v1/customer`).then((res) => {
      setCustomerList(res.data);
      console.log(res.data);
    });
  }, []);

  useEffect(() => {
    axios.get(`http://localhost:8000/v1/book`).then((res) => {
      setBookLists(res.data);
      console.log(res.data);
    });
  }, []);

  useEffect(() => {
    axios.get(`http://localhost:8000/v1/order`).then((res) => {
      setOrderList(res.data);
      console.log(res.data);
    });
  }, []);
  return (
    <div className="console">
      <NavBar />
      <Main className="mainConsole">
        <Title className="mainConsole__title" title="Bang dieu khien" />
        <br />
        <Card className={"mainConsole__report"}>
          <div className="reportCutomer">
            <div
              className=""
              style={{
                width: "120px",
                height: "80px",
                borderRadius: "10px",
                background: "green",
                textAlign: "center",
                fontSize: "18px",
                color: "white",
                fontWeight: "600",
                fontFamily: "sans-serif",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              Khách hàng
            </div>
            <img src="" alt="" />
            <div className="reportCutomerText">
              <h2
                className="reportCutomerText-h2"
                style={{ color: "red", fontSize: "20px" }}
              >
                Tổng khách hàng
              </h2>
              <h3 className="reportCutomerText-h3" style={{ fontSize: "14px" }}>
                10 Khách hàng
              </h3>
              <span style={{ fontSize: "14px" }}>
                Tổng số khách hàng được quản lý
              </span>
            </div>
          </div>
          {/**================================== */}
          <div className="reportCutomer">
            <div
              className=""
              style={{
                width: "120px",
                height: "80px",
                borderRadius: "10px",
                background: "blue",
                textAlign: "center",
                fontSize: "18px",
                color: "white",
                fontWeight: "600",
                fontFamily: "sans-serif",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              Sản Phẩm
            </div>
            <img src="" alt="" />
            <div className="reportCutomerText">
              <h2
                className="reportCutomerText-h2"
                style={{ color: "red", fontSize: "20px" }}
              >
                Tổng sản phẩm
              </h2>
              <h3
                className="reportCutomerText-h3"
                style={{ color: "", fontSize: "14px" }}
              >
                150 sản phẩm
              </h3>
              <span style={{ color: "", fontSize: "14px" }}>
                Tổng số sản phẩm được quản lý
              </span>
            </div>
          </div>
        </Card>
        <br />
        <Card className={"mainConsole__report"}>
          <div className="reportCutomer">
            <div
              className=""
              style={{
                width: "120px",
                height: "80px",
                borderRadius: "10px",
                background: "orange",
                textAlign: "center",
                fontSize: "18px",
                color: "white",
                fontWeight: "600",
                fontFamily: "sans-serif",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              Đơn hàng
            </div>
            <img src="" alt="" />
            <div className="reportCutomerText">
              <h2
                className="reportCutomerText-h2"
                style={{ color: "red", fontSize: "20px" }}
              >
                Tổng đơn hàng
              </h2>
              <h3 className="reportCutomerText-h3" style={{ fontSize: "14px" }}>
                10 đơn hàng
              </h3>
              <span style={{ fontSize: "14px" }}>
                Tổng số đơn hàng được quản lý
              </span>
            </div>
          </div>
          {/**================================== */}
          <div className="reportCutomer">
            <div
              className=""
              style={{
                width: "120px",
                height: "80px",
                borderRadius: "10px",
                background: "red",
                textAlign: "center",
                fontSize: "18px",
                color: "white",
                fontWeight: "600",
                fontFamily: "sans-serif",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              Hết Hàng
            </div>
            <img src="" alt="" />
            <div className="reportCutomerText">
              <h2
                className="reportCutomerText-h2"
                style={{ color: "red", fontSize: "20px" }}
              >
                Tổng SP sắp hết hàng
              </h2>
              <h3 className="reportCutomerText-h3" style={{ fontSize: "14px" }}>
                150 sản phẩm
              </h3>
              <span style={{ fontSize: "14px" }}>
                SP sắp hết hàng cần nhập thêm
              </span>
            </div>
          </div>
        </Card>
        <br />
        <h3 style={{ marginLeft: "20px" }}>Tình trạng đơn hàng</h3>
        <TableConsole title={titleOfOrder} orderList={orderList} />
        <h3 style={{ marginLeft: "20px" }}>Khách hàng mới</h3>
        <TableConsole title={titleOfCustomer} customerList={customerList} />
        {/* <h3 style={{ marginLeft: "20px" }}>Thống kê sản phẩm hiện có</h3> */}
        <TableConsole title={titleOfProduct} />
      </Main>
    </div>
  );
}

export default Console;
