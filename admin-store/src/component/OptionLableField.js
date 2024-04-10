import axios from "axios";
import React from "react";

function OptionLableField({
  className,
  lableName,
  selectName,
  options,
  supplierList,
  authorList,
  fieldList,
  statusList,
  setSelected,
  officeData,
  buyerData,
}) {
  if (supplierList != null) {
    options = supplierList;
  } else {
    if (authorList != null) {
      options = authorList;
    } else {
      if (fieldList != null) {
        options = fieldList;
      } else {
        if (statusList != null) {
          options = statusList;
        } else {
          if (officeData != null) {
            options = officeData;
          } else {
            if (buyerData != null) {
              options = buyerData;
            } else {
              options = [];
            }
          }
        }
      }
    }
  }

  var optionItem = options.map((item) => (
    <option value={item._id} key={item._id}>
      {item.name}
    </option>
  ));
  function handleChange(e) {
    setSelected(e.target.value);
  }

  return (
    <div className={className}>
      <label className="lableField">{lableName}</label>
      <br />
      <select className={selectName} onChange={handleChange}>
        <option value={lableName} key="">
          --Chọn {lableName}--
        </option>
        {optionItem}
      </select>
    </div>
  );
}

export default OptionLableField;
