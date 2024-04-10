import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Button from "../../component/Button";
import Card from "../../component/Card";
import FilterableProductTable from "../../component/filter/FilterableProductTable";
import { orderList } from "../../component/filter/OrderList";
import Main from "../../component/Main";
import NavBar from "../../component/NavBar";
import Title from "../../component/Title";

import CreateOrder from "./CreateOrder";

function Order() {
  var title = [
    { id: 1, title: "Mã hóa đơn" },
    { id: 2, title: "Mã khách hàng" },
    { id: 3, title: "Số lượng" },
    { id: 4, title: "Giá sản phẩm" },
    { id: 5, title: "Tổng tiền" },
    { id: 6, title: "trạng thái" },
    { id: 7, title: "Chức năng" },
  ];
  const [statused, setStatused] = useState("");
  const [selectedStaff, setSelectedStaff] = useState("");
  const [selectedBuyer, setSelectedBuyer] = useState("");

  const [changeComponent, setChangeComponent] = useState(true);
  const [orderList, setorderList] = useState([]);

  function _handleOnClickChangeComponent() {
    setChangeComponent(!changeComponent);
  }
  // function _handleOnClickBackComponent() {
  //   setChangeComponent(!changeComponent);
  // }
  useEffect(() => {
    axios.get(`http://localhost:8000/v1/order`).then((res) => {
      setorderList(res.data);
      console.log(res.data);
    });
  }, []);

  function handleCreateOrder() {
    axios
      .post("http://localhost:8000/v1/order", {
        staff: selectedStaff.toString(),
        buyer: selectedBuyer.toString(),
        statused: statused.toString(),
      })
      .then(function (response) {
        console.log(response);
        setorderList([response.data]);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  return (
    <div className="order">
      <NavBar />
      {changeComponent ? (
        <Main className="mainCustomer">
          <Title className="mainCustomer__title" title="Danh mục đơn hàng" />
          <Card className="mainCustomer__cardButton">
            <Button
              name="Thêm sản phẩm mới"
              color="#04941579"
              onClickChange={_handleOnClickChangeComponent}
            />{" "}
            <Button name="Tải từ file" color="#10949b4a" />{" "}
            <Button name="In dữ liệu" color="#a7a2104a" />{" "}
            <Button name="Sao chép" color="#04941579" />{" "}
            <Button name="Xuất Excell" color="#2011cb4a" />{" "}
            <Button name="Xuất PDF" color="#04941579" />{" "}
            <Button name="In tất cả" color="#04941579" />
          </Card>
          <FilterableProductTable
            className="mainCustomer__filterableProductTable"
            title={title}
            orderList={orderList}
          />
        </Main>
      ) : (
        <CreateOrder
          _handleOnClickChangeComponent={_handleOnClickChangeComponent}
          statused={statused}
          setStatused={setStatused}
          selectedStaff={selectedStaff}
          setSelectedStaff={setSelectedStaff}
          selectedBuyer={selectedBuyer}
          setSelectedBuyer={setSelectedBuyer}
          onSubmit={handleCreateOrder}
        />
      )}
    </div>
  );
}

export default Order;
