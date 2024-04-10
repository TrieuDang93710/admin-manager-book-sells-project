import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import Button from "../Button";
import Card from "../Card";

function OrderRow({ orderList }) {
  return (
    <tr>
      <td>
        <input type="checkbox" value={orderList._id} />
      </td>
      <td>{orderList._id}</td>
      <td>{orderList.buyer.customer}</td>
      <td>{orderList.buyer.quantity}</td>
      <td>{orderList.buyer.priceSell}</td>
      <td>{orderList.buyer.quantity * orderList.buyer.priceSell} VND</td>
      <td>{orderList.statused}</td>
      <td>
        <Card className="action" key={orderList.id}>
          <Button color="#ff0000ab" name={"Edit"} />
          <Button color="#ef15ffbe" name={"Del"} />
        </Card>
      </td>
    </tr>
  );
}

export default OrderRow;
