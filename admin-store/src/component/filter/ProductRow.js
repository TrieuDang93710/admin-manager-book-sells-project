import React, { useState } from "react";
import Button from "../Button";
import Card from "../Card";

import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

export default function ProductRow({
  bookDatas,
  onDelete,
  setBookDatas,
  className,
  handleOnClick,
  name,
  setName,
  editing,
  handleEditClick,
}) {
  function handleĐeleteBook(id) {
    axios
      .delete(`http://localhost:8000/v1/book/${id}`)
      .then(function (response) {
        console.log(response);
        // setBookDatas([...bookDatas, response.data]);
      })
      .catch(function (error) {
        console.log(error);
      });

    axios.get(`http://localhost:8000/v1/book`).then((res) => {
      // setBookDatas(res.data);
      setBookDatas([...bookDatas, res.data]);
      console.log(res.data);
    });
  }
  
  function handleUpdateBook(id) {
    axios
      .put(`http://localhost:8000/v1/book${id}`, {
        ...bookDatas,
      })
      .then(function (response) {
        console.log(response);
        setBookDatas([response.data]);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  // const [editingData, setEditingData] = useState(bookDatas);
  return (
    <tr className={className}>
      <td>
        <input type="checkbox" />
      </td>
      <td> {bookDatas.name.toString()}</td>
      <td>
        <img className="image" src={bookDatas.imageUrl} alt={bookDatas.id} />
      </td>
      <td>{bookDatas.quantity}</td>
      <td>{bookDatas.status.name}</td>
      <td>{bookDatas.priceSell}</td>
      <td>{bookDatas.field.name}</td>
      <td>{bookDatas.genres[0]}</td>
      <td>{bookDatas.author.name}</td>
      <td>
        <Card className="action" key={bookDatas._id}>
          <Button
            color="#ff0000ab"
            name={"Edit"}
            onClickChange={handleEditClick}
          />
          <Button
            color="#ef15ffbe"
            name={"Del"}
            onClickChange={() => {
              handleĐeleteBook(bookDatas._id);
            }}
          />
        </Card>
      </td>
    </tr>
  );
}
