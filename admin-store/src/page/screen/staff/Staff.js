import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Button from "../../../component/Button";
import Card from "../../../component/Card";
import FilterableProductTable from "../../../component/filter/FilterableProductTable";
import { staffList } from "../../../component/filter/StaffList";
import Main from "../../../component/Main";
import NavBar from "../../../component/NavBar";
import Title from "../../../component/Title";

import "../Home.scss";
import CreateProduct from "../product/CreateProduct";
import CreateStaff from "./CreateStaff";

function Staff() {
  var title = [
    { id: 1, title: "Tên nhân viên" },
    { id: 2, title: "Ảnh" },
    { id: 3, title: "Địa chỉ" },
    { id: 4, title: "Ngày sinh" },
    { id: 5, title: "Giới tính" },
    { id: 6, title: "Số điện thoại" },
    { id: 7, title: "Email" },
    { id: 8, title: "Chức vụ" },
    { id: 9, title: "Chức năng" },
  ];
  const [] = useState("");
  const [selectedFile, setSelectedFile] = useState();
  const [nameStaff, setNameStaff] = useState("");
  const [genderStaff, setGenderStaff] = useState("");
  const [dateOfBirthStaff, setDateOfBirthStaff] = useState("");
  const [addressStaff, setAddressStaff] = useState("");
  const [phoneNumberStaff, setPhoneNumberStaff] = useState("");
  const [emailStaff, setEmailStaff] = useState("");
  const [selectedOffice, setSelectedOffice] = useState("");
  const [descriptionOffice, setDescriptionOffice] = useState("");

  const [changeComponent, setChangeComponent] = useState(true);
  const [staff, setStaff] = useState([]);

  function _handleOnClickChangeComponent() {
    setChangeComponent(!changeComponent);
  }
  function _handleOnClickBackComponent() {
    setChangeComponent(!changeComponent);
  }
  useEffect(() => {
    axios.get(`http://localhost:8000/v1/staff`).then((res) => {
      setStaff(res.data);
      console.log(res.data);
    });
  }, []);

  function handleCreateStaff() {
    axios
      .post("http://localhost:8000/v1/staff", {
        name: nameStaff.toString(),
        imageUrl: selectedFile.name.toString(),
        gender: genderStaff.toString(),
        dateOfBirth: dateOfBirthStaff.toString(),
        address: addressStaff.toString(),
        phoneNumber: phoneNumberStaff.toString(),
        email: emailStaff.toString(),
      })
      .then(function (response) {
        console.log(response);
        setStaff([response.data]);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  return (
    <div className="staff">
      <NavBar />
      {changeComponent ? (
        <Main className="mainProduct">
          <Title className="mainProduct__title" title="Danh mục nhân viên" />
          <Card className="mainProduct__cardButton">
            <Button
              name="Thêm nhân viên mới"
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
            className="mainProduct__filterableProductTable"
            title={title}
            staff={staff}
            setStaff={setStaff}
          />
        </Main>
      ) : (
        <CreateStaff
          _handleOnClickChangeComponent={_handleOnClickChangeComponent}
          nameStaff={nameStaff}
          setNameStaff={setNameStaff}
          genderStaff={genderStaff}
          setGenderStaff={setGenderStaff}
          dateOfBirthStaff={dateOfBirthStaff}
          setDateOfBirthStaff={setDateOfBirthStaff}
          addressStaff={addressStaff}
          setAddressStaff={setAddressStaff}
          phoneNumberStaff={phoneNumberStaff}
          setPhoneNumberStaff={setPhoneNumberStaff}
          emailStaff={emailStaff}
          setEmailStaff={setEmailStaff}
          selectedOffice={selectedOffice}
          setSelectedOffice={setSelectedOffice}
          selectedFile={selectedFile}
          setSelectedFile={setSelectedFile}
          onSubmit={handleCreateStaff}
          descriptionOffice={descriptionOffice}
          setDescriptionOffice={setDescriptionOffice}
        />
      )}
    </div>
  );
}

export default Staff;
