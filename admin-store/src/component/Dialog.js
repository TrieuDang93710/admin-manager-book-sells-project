import React, { useState } from "react";
import Button from "./Button";
import Card from "./Card";
import TextLableField from "./TextLableField";
function Dialog({ onClose, setText, text }) {
  return (
    <div className="modalDialog">
      <div className="modalTitle">
        <h3>{}</h3>
      </div>
      <TextLableField
        className="textLableFieldModal"
        selectName="selectName"
        text={text}
        setText={setText}
      />
      <Card className="createProduct__cardButton _buttonModal">
        <Button name="Lưu lại" color="#7fff94" />{" "}
        <Button name="Hủy bỏ" color="#ff7d7d" onClickChange={onClose} />{" "}
      </Card>
    </div>
  );
}
export default Dialog;
