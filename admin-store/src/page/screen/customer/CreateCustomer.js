import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { useEffect, useState } from "react";
import Button from "../../../component/Button";
import Card from "../../../component/Card";
import Dialog from "../../../component/Dialog";
import Main from "../../../component/Main";
import Modal from "../../../component/Modal";
import OptionLableField from "../../../component/OptionLableField";
import TextLableField from "../../../component/TextLableField";
import Title from "../../../component/Title";

function CreateCustomer({
  supplierDatas,
  _handleOnClickChangeComponent,
  nameCustomer,
  setNameCustomer,
  genderCustomer,
  setGenderCustomer,
  dateOfBirthCustomer,
  setDateOfBirthCustomer,
  addressCustomer,
  setAddressCustomer,
  phoneNumberCustomer,
  setPhoneNumberCustomer,
  emailCustomer,
  setEmailCustomer,
  selectedFile,
  setSelectedFile,
  descriptionCustomer,
  setDescriptionCustomer,
  onSubmit,
}) {
  const [showModal, setShowModal] = useState(null);
  const [supplierData, setSupplierData] = useState([]);

  function _handleShowModal(typeModal) {
    setShowModal(typeModal);
  }
  function _handleCloseModal() {
    setShowModal(null);
  }

  useEffect(() => {
    axios
      .get("http://localhost:8080/supplier")
      .then((res) => {
        setSupplierData(res.data);
        console.log(res);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <Main className="createProduct">
      <Title
        className="createProduct__title"
        title="Danh mục khách hàng/Thêm mới khách hàng"
      />
      <Card className="createProduct__content">
        <h3
          style={{
            marginBlockStart: "0.2em",
            marginBlockEnd: "0.2em",
            marginInlineStart: "1em",
            marginInlineEnd: "1em",
            fontSize: "14px",
          }}
        >
          Tạo khách hàng mới
        </h3>
        <hr
          style={{
            backgroundColor: "orange",
          }}
        />
        <Card className="createProduct__cardButton _lableTextField">
          <TextLableField
            type="text"
            className="textLableField"
            lableName="Mã khách hàng"
            placeholder="..."
          />{" "}
          <TextLableField
            type="text"
            className="textLableField"
            lableName="Tên Khách hàng"
            placeholder="..."
            setText={setNameCustomer}
            text={nameCustomer}
          />{" "}
          <TextLableField
            className="textLableField"
            lableName="Ngày sinh"
            selectName="selectName"
            setText={setDateOfBirthCustomer}
            text={dateOfBirthCustomer}
          />{" "}
          <TextLableField
            type="text"
            className="textLableField"
            lableName="Địa chỉ"
            placeholder="..."
            setText={setAddressCustomer}
            text={addressCustomer}
          />{" "}
        </Card>
        <Card className="createProduct__cardButton _lableTextField">
          <TextLableField
            className="textLableField"
            lableName="Giới tính"
            selectName="selectName"
            setText={setGenderCustomer}
            text={genderCustomer}
          />{" "}
          <TextLableField
            className="textLableField"
            lableName="Số điện thoại"
            selectName="selectName"
            setText={setPhoneNumberCustomer}
            text={phoneNumberCustomer}
          />{" "}
          <TextLableField
            className="textLableField"
            lableName="Email"
            selectName="selectName"
            supplierDatas={supplierData}
            setText={setEmailCustomer}
            text={emailCustomer}
          />
          <TextLableField
            className="textLableField"
            lableName="Thêm mô tả"
            placeholder="..."
            type="textarea"
            setText={setDescriptionCustomer}
            text={descriptionCustomer}
          />{" "}
        </Card>
        <Card className="createProduct__cardButton _lableTextField">
          <TextLableField
            type="file"
            className="textLableField"
            lableName="Thêm ảnh"
            name="iamge"
            setText={setSelectedFile}
            text={selectedFile}
          />{" "}
        </Card>
        <Card className="createProduct__cardButton _buttonField">
          <Button name="Lưu lại" color="#7fff94" onClickChange={onSubmit} />{" "}
          <Button
            name="Hủy bỏ"
            color="#ff7d7d"
            onClickChange={_handleOnClickChangeComponent}
          />{" "}
        </Card>
      </Card>
    </Main>
  );
}

export default CreateCustomer;
