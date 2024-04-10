import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import React from "react";
import Button from "../Button";
import Card from "../Card";

function CustomerRow({ customer, setCustomer, handleEditClick }) {
  function handleĐeleteCustomer(id) {
    axios
      .delete(`http://localhost:8000/v1/customer/${id}`)
      .then(function (response) {
        console.log(response);
        // setBookDatas([...bookDatas, response.data]);
      })
      .catch(function (error) {
        console.log(error);
      });

    // axios.get(`http://localhost:8000/v1/staff`).then((res) => {
    //   // setBookDatas(res.data);
    //   setStaff([res.data]);
    //   console.log(res.data);
    // });
  }
  return (
    <tr>
      <td>
        <input type="checkbox" value={customer.id} />
      </td>
      <td>{customer.name}</td>
      <td>
        <img className="image" src={customer.imageUrl} alt={customer.id} />
      </td>
      <td>{customer.address}</td>
      <td>{customer.dateOfBirth}</td>
      <td>{customer.gender}</td>
      <td>{customer.phoneNumber}</td>
      <td>{customer.email}</td>
      {/* <td>{}</td> */}
      <td>
        <Card className="action" key={customer.id}>
          <Button
            color="#ff0000ab"
            name={"Edit"}
            onClickChange={handleEditClick}
          />
          <Button
            color="#ef15ffbe"
            name={"Del"}
            onClickChange={() => handleĐeleteCustomer(customer._id)}
          />
        </Card>
      </td>
    </tr>
  );
}

export default CustomerRow;
