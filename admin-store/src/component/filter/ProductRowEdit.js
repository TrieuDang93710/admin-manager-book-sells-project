import React, { useState } from "react";
import Button from "../Button";
import Card from "../Card";

import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

export default function ProductRowEdit({
  className,
  rowData,
  onCancel,
  setBookDatas,
}) {
  const [editingData, setEditingData] = useState(rowData);
  console.log(editingData);
  function handleUpdateBook(id) {
    // setLoading(true);
    axios
      .put(`http://localhost:8000/v1/book/${id}`, {
        ...rowData,
        name: editingData.name,
        imageUrl: editingData.imageUrl,
        quantity: editingData.quantity,
        status: editingData.status,
        priceSell: editingData.priceSell,
      })
      .then(function (response) {
        if (response.status == 200) {
          alert("Updated successfully!");
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  return (
    <tr className={className}>
      <td style={{ width: "20px" }}>
        <input
          type="checkbox"
          value={editingData._id}
          style={{ width: "20px" }}
        />
      </td>
      <td>
        <input
          type="text"
          value={editingData.name}
          onChange={(e) =>
            setEditingData((item) => ({ ...editingData, name: e.target.value }))
          }
          style={{ width: "100px", height: "20px" }}
        />
      </td>
      <td>
        <input
          type="text"
          value={editingData.imageUrl}
          onChange={(e) =>
            setEditingData((imageUrl) => ({
              ...editingData,
              imageUrl: e.target.value,
            }))
          }
          style={{ width: "100px", height: "20px" }}
        />
      </td>
      <td>
        <input
          type="text"
          value={editingData?.quantity}
          onChange={(e) =>
            setEditingData((quantity) => ({
              ...editingData,
              quantity: e.target.value,
            }))
          }
          style={{ width: "100px", height: "20px" }}
        />
      </td>
      <td>
        <input
          type="text"
          value={editingData?.status.name}
          onChange={(e) =>
            setEditingData((status) => ({
              ...editingData,
              status: e.target.value,
            }))
          }
          style={{ width: "100px", height: "20px" }}
        />
      </td>
      <td>
        <input
          type="text"
          value={editingData?.priceSell}
          onChange={(e) =>
            setEditingData((priceSell) => ({
              ...editingData,
              priceSell: e.target.value,
            }))
          }
          style={{ width: "100px", height: "20px" }}
        />
      </td>
      <td>
        <input
          type="text"
          value={editingData?.field.name}
          onChange={(e) =>
            setEditingData((field) => ({
              ...editingData,
              field: e.target.value,
            }))
          }
          style={{ width: "100px", height: "20px" }}
        />
      </td>
      <td>
        <input
          type="text"
          value={editingData?.genres[0]}
          onChange={(e) =>
            setEditingData((kind) => ({
              ...editingData,
              kind: e.target.value,
            }))
          }
          style={{ width: "100px", height: "20px" }}
        />
      </td>
      <td>
        <input
          type="text"
          value={editingData?.author?.name}
          onChange={(e) =>
            setEditingData((author) => ({
              ...editingData,
              author: e.target.value,
            }))
          }
          style={{ width: "100px", height: "20px" }}
        />
      </td>
      <td>
        <Card className="action" key={editingData._id}>
          <Button
            color="#ff0000ab"
            onClickChange={() => handleUpdateBook(editingData._id)}
            name={"Save"}
          />
          <Button color="#ef15ffbe" name={"Hủy"} onClickChange={onCancel} />
        </Card>
      </td>
    </tr>
  );
}
