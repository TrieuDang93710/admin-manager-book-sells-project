import React from "react";
import CustomerConsoleRow from "./row/CustomerConsoleRow";
import OrderConsoleRow from "./row/OrderConsoleRow";
import ProductConsoleRow from "./row/ProductConsoleRow";

function TableConsole({ title, bookList, staffList, customerList, orderList }) {
  const rows = [];
  if (orderList != null) {
    orderList.forEach((orderList) => {
      rows.push(<OrderConsoleRow orderList={orderList} />);
    });
  } else {
    if (customerList != null) {
      customerList.forEach((customerList) => {
        rows.push(<CustomerConsoleRow customerList={customerList} />);
      });
    } else {
      if (bookList != null) {
        bookList.forEach((bookList) => {
          rows.push(<ProductConsoleRow bookList={bookList} />);
        });
      } else {
        return;
      }
    }
  }
  let title_th = title.map((th) => <th key={th.id}>{th.title}</th>);
  return (
    <table className="consoleTable">
      <thead>
        <th>
          <input type="checkbox" />
        </th>
        {title_th}
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}

export default TableConsole;
