import axios from "axios";
import { useEffect, useState } from "react";
import Button from "../../component/Button";
import Card from "../../component/Card";
import Main from "../../component/Main";
import OptionLableField from "../../component/OptionLableField";
import TextLableField from "../../component/TextLableField";
import Title from "../../component/Title";

function CreateOrder({
  supplierDatas,
  _handleOnClickChangeComponent,
  statused,
  setStatused,
  selectedStaff,
  setSelectedStaff,
  selectedBuyer,
  setSelectedBuyer,
  onSubmit,
}) {
  // const [image, setImage] = useState();
  const [showModal, setShowModal] = useState(null);
  const [buyerData, setBuyerrData] = useState([]);

  function _handleShowModal(typeModal) {
    setShowModal(typeModal);
  }
  function _handleCloseModal() {
    setShowModal(null);
  }

  useEffect(() => {
    axios
      .get("http://localhost:8080/buyer")
      .then((res) => {
        setBuyerrData(res.data);
        console.log(res);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <Main className="createProduct">
      <Title
        className="createProduct__title"
        title="Danh mục đơn hàng/Thêm mới đơn hàng"
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
          Tạo đơn hàng mới
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
            lableName="Mã đơn hàng"
            placeholder="..."
          />{" "}
          <OptionLableField
            className="textLableField"
            lableName="Mã nhân viên"
            selectName="selectName"
            setSelected={setSelectedStaff}
            authorList={supplierDatas}
          />{" "}
          <OptionLableField
            className="textLableField"
            lableName="Mã mua hàng"
            selectName="selectName"
            setSelected={setSelectedBuyer}
            buyerData={buyerData}
            // // supplierList={supplierDatas}
          />{" "}
          <TextLableField
            type="text"
            className="textLableField"
            lableName="Trạng thái"
            placeholder="..."
            setText={setStatused}
            text={statused}
          />{" "}
        </Card>
        <Card className="createProduct__cardButton _buttonField">
          <Button name="Lưu lại" color="#7fff94" />{" "}
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

export default CreateOrder;
