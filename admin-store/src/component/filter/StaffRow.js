import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import React from "react";
import Button from "../Button";
import Card from "../Card";

function StaffRow({ staff, setStaff, handleEditClick }) {
  function handleDeleteStaff(id) {
    axios
      .delete(`http://localhost:8000/v1/staff/${id}`)
      .then(function (response) {
        console.log(response);
        // setBookDatas([...bookDatas, response.data]);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  return (
    <tr>
      <td>
        <input type="checkbox" value={staff.id} />
      </td>
      <td>{staff.name}</td>
      <td>
        <img className="image" src={staff.imageUrl} alt={staff.id} />
      </td>
      <td>{staff.address}</td>
      <td>{staff.dateOfBirth}</td>
      <td>{staff.gender}</td>
      <td>{staff.phoneNumber}</td>
      <td>{staff.email}</td>
      <td>{staff.office}</td>
      <td>
        <Card className="action" key={staff.id}>
          <Button
            color="#ff0000ab"
            name={"Edit"}
            onClickChange={handleEditClick}
          />
          <Button
            color="#ef15ffbe"
            name={"Del"}
            onClickChange={() => {
              handleDeleteStaff(staff._id);
            }}
          />
        </Card>
      </td>
    </tr>
  );
}

export default StaffRow;
