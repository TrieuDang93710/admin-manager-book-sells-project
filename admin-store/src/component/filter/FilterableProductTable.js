import React, { useState } from "react";
import Card from "../Card";
import ProductTable from "./ProductTable";
import QualityProduct from "./QualityProduct";
import Search from "./Search";

function FilterableProductTable({
  className,
  title,
  bookProduct,
  staffList,
  customer,
  setCustomer,
  orderList,
  setId,
  author,
  setBookDatas,
  bookDatas,
  staff,
  setStaff,
  loading,
  setLoading,
}) {
  const [filterText, setFilterText] = useState("");

  return (
    <Card className={className}>
      <Card className="quantityItem">
        <QualityProduct />
        <Search filterText={filterText} onFilterTextChange={setFilterText} />
      </Card>
      <ProductTable
        // books={bookProduct}
        staffList={staffList}
        customer={customer}
        setCustomer={setCustomer}
        orderList={orderList}
        filterText={filterText}
        title={title}
        set={setId}
        authors={author}
        setBookDatas={setBookDatas}
        bookDatas={bookDatas}
        setStaff={setStaff}
        staff={staff}
        loading={loading}
        setLoading={setLoading}
      />
    </Card>
  );
}

export default FilterableProductTable;
