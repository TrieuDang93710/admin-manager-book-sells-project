import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import React, { useState } from "react";
import Button from "../Button";
import Card from "../Card";

function CustomerRowEdit({ customer, setCustomer, onCancel }) {
  const [editingData, setEditingData] = useState(customer);
  console.log(editingData);
  function handleUpdateCustomer(id) {
    // setLoading(true);
    axios
      .put(`http://localhost:8000/v1/customer/${id}`, {
        ...customer,
        name: editingData.name,
        imageUrl: editingData.imageUrl,
        address: editingData.address,
        dateOfBirth: editingData.dateOfBirth,
        gender: editingData.gender,
        phoneNumber: editingData.phoneNumber,
        email: editingData.email,
      })
      .then(function (response) {
        console.log(response);
        // setBookDatas([response.data]);
      })
      .catch(function (error) {
        console.log(error);
      });

    axios.get(`http://localhost:8000/v1/customer`).then((res) => {
      // setBookDatas(res.data);
      console.log(res.data);
      // setLoading(false);
    });
  }
  return (
    <tr>
      <td>
        <input type="checkbox" value={customer.id} />
      </td>
      {/* <td>{customer.name}</td>
      <td>
        <img className="image" src={customer.imageUrl} alt={customer.id} />
      </td>
      <td>{customer.address}</td>
      <td>{customer.dateOfBirth}</td>
      <td>{customer.gender}</td>
      <td>{customer.phoneNumber}</td>
      <td>{customer.email}</td> */}
      <td>
        <input
          type="text"
          value={editingData.name}
          onChange={(e) =>
            setEditingData((item) => ({ ...editingData, name: e.target.value }))
          }
          style={{ width: "80px", height: "20px" }}
        />
      </td>
      <td>
        {/* <img className="image" src={staff.imageUrl} alt={staff.id} /> */}
        <input
          type="text"
          value={editingData.imageUrl}
          onChange={(e) =>
            setEditingData((item) => ({
              ...editingData,
              imageUrl: e.target.value,
            }))
          }
          style={{ width: "80px", height: "20px" }}
        />
      </td>
      <td>
        {/* {staff.address} */}
        <input
          type="text"
          value={editingData.address}
          onChange={(e) =>
            setEditingData((item) => ({
              ...editingData,
              address: e.target.value,
            }))
          }
          style={{ width: "80px", height: "20px" }}
        />
      </td>
      <td>
        {/* {staff.dateOfBirth} */}
        <input
          type="text"
          value={editingData.dateOfBirth}
          onChange={(e) =>
            setEditingData((item) => ({
              ...editingData,
              dateOfBirth: e.target.value,
            }))
          }
          style={{ width: "80px", height: "20px" }}
        />
      </td>
      <td>
        {/* {staff.gender} */}
        <input
          type="text"
          value={editingData.gender}
          onChange={(e) =>
            setEditingData((item) => ({
              ...editingData,
              gender: e.target.value,
            }))
          }
          style={{ width: "80px", height: "20px" }}
        />
      </td>
      <td>
        {/* {staff.phoneNumber} */}
        <input
          type="text"
          value={editingData.phoneNumber}
          onChange={(e) =>
            setEditingData((item) => ({
              ...editingData,
              phoneNumber: e.target.value,
            }))
          }
          style={{ width: "80px", height: "20px" }}
        />
      </td>
      <td>
        {/* {staff.email} */}
        <input
          type="text"
          value={editingData.email}
          onChange={(e) =>
            setEditingData((item) => ({
              ...editingData,
              email: e.target.value,
            }))
          }
          style={{ width: "80px", height: "20px" }}
        />
      </td>

      <td>
        <Card className="action" key={customer.id}>
          <Button
            color="#ff0000ab"
            name={"Save"}
            onClickChange={() => handleUpdateCustomer(editingData._id)}
          />
          <Button color="#ef15ffbe" name={"Hũy"} onClickChange={onCancel} />
        </Card>
      </td>
    </tr>
  );
}

export default CustomerRowEdit;
