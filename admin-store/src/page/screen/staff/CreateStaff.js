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

function CreateStaff({
  _handleOnClickChangeComponent,
  nameStaff,
  setNameStaff,
  genderStaff,
  setGenderStaff,
  dateOfBirthStaff,
  setDateOfBirthStaff,
  addressStaff,
  setAddressStaff,
  phoneNumberStaff,
  setPhoneNumberStaff,
  emailStaff,
  setEmailStaff,
  setSelectedOffice,
  selectedFile,
  setSelectedFile,
  descriptionOffice,
  setDescriptionOffice,
  onSubmit,
}) {
  const [showModal, setShowModal] = useState(null);
  const [officeData, setOfficeData] = useState([]);

  function _handleShowModal(typeModal) {
    setShowModal(typeModal);
  }
  function _handleCloseModal() {
    setShowModal(null);
  }

  useEffect(() => {
    axios
      .get("http://localhost:8000/v1/office")
      .then((res) => {
        setOfficeData(res.data);
        console.log(res);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <Main className="createProduct">
      <Title
        className="createProduct__title"
        title="Danh mục nhân viên/Thêm mới nhân viên"
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
            lableName="Mã nhân viên"
            placeholder="..."
            setText={setNameStaff}
            text={nameStaff}
          />{" "}
          <TextLableField
            type="text"
            className="textLableField"
            lableName="Tên nhân viên"
            placeholder="..."
            setText={setNameStaff}
            text={nameStaff}
          />{" "}
          <TextLableField
            className="textLableField"
            lableName="Ngày sinh"
            selectName="selectName"
            setText={setDateOfBirthStaff}
            text={dateOfBirthStaff}
          />{" "}
          <TextLableField
            type="text"
            className="textLableField"
            lableName="Giới tính"
            placeholder="..."
            setText={setGenderStaff}
            text={genderStaff}
          />{" "}
        </Card>
        <Card className="createProduct__cardButton _lableTextField">
          <TextLableField
            className="textLableField"
            lableName="Địa chỉ"
            selectName="selectName"
            setText={setAddressStaff}
            text={addressStaff}
          />{" "}
          <TextLableField
            className="textLableField"
            lableName="Số điện thoại"
            selectName="selectName"
            setText={setPhoneNumberStaff}
            text={phoneNumberStaff}
          />{" "}
          <TextLableField
            className="textLableField"
            lableName="Email"
            selectName="selectName"
            setText={setEmailStaff}
            text={emailStaff}
          />
          <OptionLableField
            className="textLableField"
            lableName="Chức vụ"
            selectName="selectName"
            setSelected={setSelectedOffice}
            officeData={officeData}
          />
        </Card>
        <Card className="createProduct__cardButton _lableTextField">
          <TextLableField
            className="textLableField"
            lableName="Thêm mô tả"
            placeholder="..."
            type="textarea"
            setText={setDescriptionOffice}
            text={descriptionOffice}
          />{" "}
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

export default CreateStaff;
