import React from "react";

function CustomerConsoleRow({ customerList }) {
  return (
    <tr>
      <td>
        <input type="checkbox" value={customerList.id} />
      </td>
      <td>{customerList.name}</td>
      <td>{customerList.address}</td>
      <td>{customerList.gender}</td>
      <td>{customerList.email}</td>
    </tr>
  );
}

export default CustomerConsoleRow;
