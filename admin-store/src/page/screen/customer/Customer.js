import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Button from "../../../component/Button";
import Card from "../../../component/Card";
import { customerList } from "../../../component/filter/CutomerList";
import FilterableProductTable from "../../../component/filter/FilterableProductTable";
import Main from "../../../component/Main";
import NavBar from "../../../component/NavBar";
import Title from "../../../component/Title";
import "../Home.scss";
import CreateCustomer from "./CreateCustomer";

function Customer() {
  var title = [
    { id: 2, title: "Tên khách hàng" },
    { id: 3, title: "Ảnh" },
    { id: 4, title: "Địa chỉ" },
    { id: 5, title: "Ngày sinh" },
    { id: 6, title: "Giới tính" },
    { id: 7, title: "Số điện thoại" },
    { id: 8, title: "Email" },
    // { id: 7, title: "Chức vụ" },
    { id: 9, title: "Chức năng" },
  ];
  const [changeComponent, setChangeComponent] = useState(true);
  const [customer, setCustomer] = useState([]);
  const [selectedFile, setSelectedFile] = useState();
  const [nameCustomer, setNameCustomer] = useState("");
  const [genderCustomer, setGenderCustomer] = useState("");
  const [dateOfBirthCustomer, setDateOfBirthCustomer] = useState("");
  const [addressCustomer, setAddressCustomer] = useState("");
  const [phoneNumberCustomer, setPhoneNumberCustomer] = useState("");
  const [emailCustomer, setEmailCustomer] = useState("");
  const [descriptionCustomer, setDescriptionCustomer] = useState("");

  function handleCreateCustomer() {
    axios
      .post("http://localhost:8000/v1/customer", {
        name: nameCustomer.toString(),
        imageUrl: selectedFile.name.toString(),
        gender: genderCustomer.toString(),
        dateOfBirth: dateOfBirthCustomer.toString(),
        address: addressCustomer.toString(),
        phoneNumber: phoneNumberCustomer.toString(),
        email: emailCustomer.toString(),
      })
      .then(function (response) {
        console.log(response);
        setCustomer([response.data]);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  function _handleOnClickChangeComponent() {
    setChangeComponent(!changeComponent);
  }
  function _handleOnClickBackComponent() {
    setChangeComponent(!changeComponent);
  }
  useEffect(() => {
    axios.get(`http://localhost:8000/v1/customer`).then((res) => {
      setCustomer(res.data);
      console.log(res.data);
    });
  }, []);
  return (
    <div className="customer">
      <NavBar />
      {changeComponent ? (
        <Main className="mainCustomer">
          <Title className="mainCustomer__title" title="Danh mục Khách hàng" />
          <Card className="mainCustomer__cardButton">
            <Button
              name="Thêm khách hàng mới"
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
            customer={customer}
            setCustomer={setCustomer}
          />
        </Main>
      ) : (
        <CreateCustomer
          _handleOnClickChangeComponent={_handleOnClickChangeComponent}
          nameCustomer={nameCustomer}
          setNameCustomer={setNameCustomer}
          genderCustomer={genderCustomer}
          setGenderCustomer={setGenderCustomer}
          dateOfBirthCustomer={dateOfBirthCustomer}
          setDateOfBirthCustomer={setDateOfBirthCustomer}
          addressCustomer={addressCustomer}
          setAddressCustomer={setAddressCustomer}
          phoneNumberCustomer={phoneNumberCustomer}
          setPhoneNumberCustomer={setPhoneNumberCustomer}
          emailCustomer={emailCustomer}
          setEmailCustomer={setEmailCustomer}
          selectedFile={selectedFile}
          setSelectedFile={setSelectedFile}
          onSubmit={handleCreateCustomer}
          descriptionCustomer={descriptionCustomer}
          setDescriptionCustomer={setDescriptionCustomer}
        />
      )}
    </div>
  );
}

export default Customer;
