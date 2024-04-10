import { faRecordVinyl } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import React, { useState } from "react";
import CustomerRow from "./CustomerRow";
import CustomerRowEdit from "./CustomerRowEdit";
import OrderRow from "./OrderRow";
import ProductRow from "./ProductRow";
import ProductRowEdit from "./ProductRowEdit";
import StaffRow from "./StaffRow";
import StaffRowEdit from "./StaffRowEdit";

function ProductTable({
  books,
  customer,
  setCustomer,
  orderList,
  filterText,
  title,
  authors,
  set,
  onDelete,
  setBookDatas,
  bookDatas,
  staff,
  setStaff,
  loading,
  setLoading,
}) {
  const rows = [];

  const [name, setName] = useState("");
  const [editing, setEditing] = useState(false);

  const [editingRowId, setEditingRowId] = useState(null);
  // const [editingData, setEditingData] = useState(bookDatas);
  function startEditing(rowId) {
    setEditingRowId(rowId);
  }

  function handleEditClick() {
    setEditing(true);
  }

  if (bookDatas != null) {
    bookDatas.map((row) => {
      if (row.name.toLowerCase().indexOf(filterText.toLowerCase()) === -1) {
        return;
      }

      !editingRowId || editingRowId !== row._id
        ? rows.push(
            <ProductRow
              bookDatas={row}
              setBookDatas={setBookDatas}
              onDelete={onDelete}
              name={name}
              setName={setName}
              editing={editing}
              handleEditClick={() => {
                startEditing(row._id);
              }}
            />
          )
        : rows.push(
            <ProductRowEdit
              key={row._id}
              rowData={row}
              id={row._id}
              setBookDatas={setBookDatas}
              onCancel={() => setEditingRowId(null)}
            />
          );
    });
    // });
  } else {
    if (staff != null) {
      staff.map((row) => {
        if (row.name.toLowerCase().indexOf(filterText.toLowerCase()) === -1) {
          return;
        }
        !editingRowId || editingRowId !== row._id
          ? rows.push(
              <StaffRow
                setStaff={setStaff}
                staff={row}
                handleEditClick={() => {
                  startEditing(row._id);
                }}
              />
            )
          : rows.push(
              <StaffRowEdit
                setStaff={setStaff}
                staff={row}
                id={row._id}
                key={row._id}
                onCancel={() => setEditingRowId(null)}
              />
            );
      });
    } else {
      if (customer != null) {
        customer.map((row) => {
          if (row.name.toLowerCase().indexOf(filterText.toLowerCase()) === -1) {
            return;
          }
          !editingRowId || editingRowId !== row._id
            ? rows.push(
                <CustomerRow
                  setCustomer={setCustomer}
                  customer={row}
                  handleEditClick={() => {
                    startEditing(row._id);
                  }}
                />
              )
            : rows.push(
                <CustomerRowEdit
                  setCustomer={setCustomer}
                  customer={row}
                  id={row._id}
                  key={row._id}
                  onCancel={() => setEditingRowId(null)}
                />
              );
        });
      } else {
        if (orderList != null) {
          orderList.forEach((orderList) => {
            if (
              orderList.statused
                .toLowerCase()
                .indexOf(filterText.toLowerCase()) === -1
            ) {
              return;
            }
            rows.push(<OrderRow orderList={orderList} />);
          });
        } else {
          return;
        }
      }
    }
  }

  let title_th = title.map((th) => <th key={th.id}>{th.title}</th>);
  return (
    <table className="productTable">
      <thead>
        <th>
          <input type="checkbox" />
        </th>
        {title_th}
      </thead>
      {loading && (
        <div className="loader">
          <div className="spinner"></div>
        </div>
      )}
      <tbody>{rows}</tbody>
    </table>
  );
}

export default ProductTable;
