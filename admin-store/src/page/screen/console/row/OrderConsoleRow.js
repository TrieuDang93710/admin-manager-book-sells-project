import React, { useState } from "react";

function OrderConsoleRow({ orderList }) {
  // const [colorStatus, setcolorStatus] = useState("");
  var colorStatus;
  if (
    !(
      orderList.statused
        .toLowerCase()
        .indexOf("Đang vận chuyển".toLocaleLowerCase()) === -1
    )
  ) {
    colorStatus = "orange";
  } else {
    if (
      !(
        orderList.statused
          .toLowerCase()
          .indexOf("Chờ duyệt".toLocaleLowerCase()) === -1
      )
    ) {
      colorStatus = "green";
    } else {
      if (
        !(
          orderList.statused
            .toLowerCase()
            .indexOf("Hoàn Thành".toLocaleLowerCase()) === -1
        )
      ) {
        colorStatus = "gray";
      } else {
        if (
          !(
            orderList.statused
              .toLowerCase()
              .indexOf("Đã hũy".toLocaleLowerCase()) === -1
          )
        ) {
          colorStatus = "red";
        } else {
        }
      }
    }
  }
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
      <td style={{ color: colorStatus, fontWeight: "600" }}>
        {orderList.statused}
      </td>
    </tr>
  );
}

export default OrderConsoleRow;
