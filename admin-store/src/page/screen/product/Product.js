/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from "react";
import axios from "axios";
import NavBar from "../../../component/NavBar";
import Title from "../../../component/Title";
import Card from "../../../component/Card";
import Button from "../../../component/Button";
import "../Home.scss";

import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import FilterableProductTable from "../../../component/filter/FilterableProductTable";
import Main from "../../../component/Main";
import CreateProduct from "./CreateProduct";

function Product() {
  var title = [
    { id: 1, title: "Tên sách" },
    { id: 2, title: "Ảnh" },
    { id: 3, title: "Số lượng" },
    { id: 4, title: "Tình trạng" },
    { id: 5, title: "Giá tiền" },
    { id: 6, title: "Lĩnh vực" },
    { id: 7, title: "Thể loại" },
    { id: 8, title: "Tác giả" },
    { id: 9, title: "Chức năng" },
  ];
  const [selectedFile, setSelectedFile] = useState();
  const [] = useState("");
  const [idBook, setIdBook] = useState("");
  const [nameBook, setNameBook] = useState("");
  const [kindBook, setKindBook] = useState("");
  const [quantityBook, setQuantityBook] = useState("");
  const [pricesellBook, setPriceSellBook] = useState("");
  const [pricedefaultBook, setPriceDefaultBook] = useState("");
  const [descriptionBook, setDescriptionBook] = useState("");
  const [selectedAuthor, setSelectedAuthor] = useState("");
  const [selectedSupllier, setSelectedSupllier] = useState("");
  const [selectedField, setSelectedField] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("");

  const [changeComponent, setChangeComponent] = useState(true);
  const [bookDatas, setBookDatas] = useState([]);
  const [author, setAuthor] = useState([]);
  const [loading, setLoading] = useState(false);

  const [id, setId] = useState("");
  const [] = useState([]);

  function _handleOnClickChangeComponent() {
    setChangeComponent(!changeComponent);
  }

  useEffect(() => {
    setLoading(true);
    axios.get(`http://localhost:8000/v1/book`).then((res) => {
      setBookDatas(res.data);
      console.log(res.data);
      setLoading(false);
    });
  }, []);

  function handleCreateBook() {
    setLoading(true);
    axios
      .post("http://localhost:8000/v1/book", {
        name: nameBook.toString(),
        imageUrl: selectedFile.name.toString(),
        publishedDate: "10/02/1990",
        quantity: quantityBook.toString(),
        priceSell: pricesellBook.toString(),
        priceDefault: pricedefaultBook.toString(),
        genres: [kindBook.toString()],
        author: selectedAuthor.toString(),
        supplier: selectedSupllier.toString(),
        field: selectedField.toString(),
        status: selectedStatus.toString(),
      })
      .then(function (response) {
        console.log(response);
        setBookDatas([response.data]);
      })
      .catch(function (error) {
        console.log(error);
      });
    setLoading(false);
  }

  return (
    <div className="product">
      <NavBar />
      {changeComponent ? (
        <Main className="mainProduct">
          <Title className="mainProduct__title" title="Danh mục sản phẩm" />
          <Card className="mainProduct__cardButton">
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
            bookProduct={bookDatas}
            className="mainProduct__filterableProductTable"
            title={title}
            setId={setId}
            author={author}
            setBookDatas={setBookDatas}
            bookDatas={bookDatas}
            loading={loading}
            setLoading={setLoading}
          />
        </Main>
      ) : (
        <CreateProduct
          _handleOnClickChangeComponent={_handleOnClickChangeComponent}
          setIdBook={setIdBook}
          setNameBook={setNameBook}
          setQuantityBook={setQuantityBook}
          setSelectedFile={setSelectedFile}
          setDescriptionBook={setDescriptionBook}
          setPriceSellBook={setPriceSellBook}
          setPriceDefaultBook={setPriceDefaultBook}
          setKindBook={setKindBook}
          onSubmit={handleCreateBook}
          setSelectedAuthor={setSelectedAuthor}
          setSelectedSupllier={setSelectedSupllier}
          setSelectedField={setSelectedField}
          setSelectedStatus={setSelectedStatus}
          // postBookData={handleSubmit}
        />
      )}
    </div>
  );
}
export default Product;
