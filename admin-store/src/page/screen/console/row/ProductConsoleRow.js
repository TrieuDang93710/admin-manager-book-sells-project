import React from "react";

function ProductConsoleRow({ bookList }) {
  return (
    <tr>
      <td>
        <input type="checkbox" value={bookList.id} />
      </td>
      <td>{bookList.name}</td>
      <td>{bookList.quantity}</td>
      <td>{bookList.status}</td>
    </tr>
  );
}

export default ProductConsoleRow;
