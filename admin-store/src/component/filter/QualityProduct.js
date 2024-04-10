import React from "react";

function QualityProduct() {
  return (
    <div className="qualityProduct">
      <span className="span_title">Hiện</span>
      <select className="qualityProductSel">
        <option value="" key="">All</option>
        <option value="10" key="">10</option>
        <option value="50" key="">50</option>
        <option value="100" key="">100</option>
      </select>
      <span className="span_title">danh mục</span>
    </div>
  );
}

export default QualityProduct;
