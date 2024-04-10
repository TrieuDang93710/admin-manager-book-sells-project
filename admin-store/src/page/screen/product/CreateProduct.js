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

function CreateProduct({
  supplierDatas,
  _handleOnClickChangeComponent,
  setIdBook,
  setNameBook,
  setQuantityBook,
  setSelectedFile,
  setDescriptionBook,
  setPriceSellBook,
  setPriceDefaultBook,
  setKindBook,
  onSubmit,
  setSelectedAuthor,
  setSelectedSupllier,
  setSelectedField,
  setSelectedStatus,
  postBookData,
}) {
  const [showModal, setShowModal] = useState(null);
  const [text, setText] = useState("");
  const [supplierBook, setSupplierBook] = useState("");
  const [suppliers, setSuppliers] = useState([]);
  const [authors, setAuthors] = useState([]);
  const [fields, setFields] = useState([]);
  const [status, setStatus] = useState([]);
  const [changeEdit, setChangeEdit] = useState(true);

  function _handleShowModal(typeModal) {
    setShowModal(typeModal);
  }
  function _handleCloseModal() {
    setShowModal(null);
  }

  useEffect(() => {
    axios
      .get("http://localhost:8000/v1/supplier")
      .then((res) => {
        setSuppliers(res.data);
        console.log(res);
      })
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    axios
      .get("http://localhost:8000/v1/author")
      .then((res) => {
        setAuthors(res.data);
        console.log(res);
      })
      .catch((error) => console.log(error));
  }, []);
  useEffect(() => {
    axios
      .get("http://localhost:8000/v1/field")
      .then((res) => {
        setFields(res.data);
        console.log(res);
      })
      .catch((error) => console.log(error));
  }, []);
  useEffect(() => {
    axios
      .get("http://localhost:8000/v1/status")
      .then((res) => {
        setStatus(res.data);
        console.log(res);
      })
      .catch((error) => console.log(error));
  }, []);
  return (
    <Main className="createProduct">
      <Title
        className="createProduct__title"
        title="Danh mục sản phẩm/Thêm mới sản phẩm"
      />
      <form>
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
            Tạo sản phẩm mới
          </h3>
          <hr
            style={{
              backgroundColor: "orange",
            }}
          />
          {/* <Card className="createProduct__cardButton">
            <Button
              name="Thêm nhà cung cấp"
              color="#6edc8b"
              iconName={faCartShopping}
              onClickChange={() => _handleShowModal("suppliers")}
            />{" "}
            <Button
              name="Thêm lĩnh vực"
              color="#6edc8b"
              iconName={faCartShopping}
              onClickChange={() => {
                _handleShowModal("field");
              }}
            />{" "}
            <Button
              name="Thêm tác giả"
              color="#6edc8b"
              iconName={faCartShopping}
              onClickChange={() => _handleShowModal("author")}
            />{" "}
            <Button
              name="Thêm tình trạng"
              color="#6edc8b"
              iconName={faCartShopping}
              onClickChange={() => _handleShowModal("status")}
            />
          </Card> */}
          {/* <hr /> */}
          <Card className="createProduct__cardButton _lableTextField">
            <TextLableField
              type="text"
              className="textLableField"
              lableName="Mã sách"
              placeholder="..."
              setText={setIdBook}
              // text={idBook}
            />{" "}
            <TextLableField
              type="text"
              className="textLableField"
              lableName="Tên sách"
              placeholder="..."
              setText={setNameBook}
              // text={nameBook}
            />{" "}
            <OptionLableField
              className="textLableField"
              lableName="Tên tác giả"
              selectName="selectName"
              setSelected={setSelectedAuthor}
              authorList={authors}
            />{" "}
            <TextLableField
              type="text"
              className="textLableField"
              lableName="Thể loại"
              placeholder="..."
              setText={setKindBook}
              // text={kindBook}
            />{" "}
            <OptionLableField
              className="textLableField"
              lableName="Tình trạng"
              selectName="selectName"
              setSelected={setSelectedStatus}
              supplierList={status}
            />{" "}
          </Card>
          <Card className="createProduct__cardButton _lableTextField">
            <OptionLableField
              className="textLableField"
              lableName="Lĩnh vực"
              selectName="selectName"
              fieldList={fields}
              setSelected={setSelectedField}
            />{" "}
            <OptionLableField
              className="textLableField"
              lableName="Nhà cung cấp"
              selectName="selectName"
              supplierList={suppliers}
              setSelected={setSelectedSupllier}
            />
            <TextLableField
              type="number"
              className="textLableField"
              lableName="Số lượng"
              placeholder="..."
              setText={setQuantityBook}
              // text={quantityBook}
            />{" "}
            <TextLableField
              type="number"
              className="textLableField"
              lableName="Giá bán"
              placeholder="..."
              setText={setPriceSellBook}
              // text={pricesellBook}
            />{" "}
            <TextLableField
              type="number"
              className="textLableField"
              lableName="Giá vốn"
              placeholder="..."
              setText={setPriceDefaultBook}
              // text={pricedefaultBook}
            />{" "}
          </Card>
          <Card className="createProduct__cardButton _lableTextField">
            <TextLableField
              type="file"
              className="textLableField"
              lableName="Thêm ảnh sách"
              name="iamge"
              setText={setSelectedFile}
              // text={selectedFile}
              // fileInputRef={fileInputRef}
            />{" "}
          </Card>
          <Card className="createProduct__cardButton _lableTextField">
            <TextLableField
              className="textLableField"
              lableName="Thêm mô tả về sản phẩm(sách)"
              placeholder="..."
              type="textarea"
              setText={setDescriptionBook}
              // text={descriptionBook}
            />{" "}
          </Card>
          <Card className="createProduct__cardButton _buttonField">
            <Button
              name="Lưu lại"
              color="#7fff94"
              type={"submit"}
              onClickChange={onSubmit}
            />{" "}
            <Button
              name="Hủy bỏ"
              color="#ff7d7d"
              onClickChange={_handleOnClickChangeComponent}
            />{" "}
          </Card>
        </Card>
      </form>
      {showModal === "suppliers" && (
        <Modal className="createProduct__modal">
          <Dialog
            onClose={_handleCloseModal}
            setShowModal={setShowModal}
            setText={setText}
            text={text}
          />
        </Modal>
      )}
      {showModal === "field" && (
        <Modal className="createProduct__modal">
          <Dialog
            onClose={_handleCloseModal}
            setShowModal={setShowModal}
            setText={setText}
            text={text}
          />
        </Modal>
      )}
      {showModal === "author" && (
        <Modal className="createProduct__modal">
          <Dialog
            onClose={_handleCloseModal}
            setShowModal={setShowModal}
            setText={setText}
            text={text}
          />
        </Modal>
      )}{" "}
      {showModal === "status" && (
        <Modal className="createProduct__modal">
          <Dialog
            onClose={_handleCloseModal}
            setShowModal={setShowModal}
            setText={setText}
            text={text}
          />
        </Modal>
      )}
    </Main>
  );
}

export default CreateProduct;
