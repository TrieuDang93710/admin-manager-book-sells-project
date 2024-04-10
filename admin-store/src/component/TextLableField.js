import React from "react";

function TextLableField({
  className,
  lableName,
  name,
  id,
  placeholder,
  type,
  text,
  setText,
  fileInputRef,
}) {
  return (
    <div className={className}>
      <label className="lableField lableFieldModal">{lableName}</label>
      <br />
      <input
        className="textField textFieldModal"
        type={type}
        id={id}
        // value={text}
        placeholder={placeholder}
        onChange={(e) => {
          setText(e.target.value);
          if (type === "file") {
            setText(e.target.files[0]);
          }
        }}
      />
      <br />
    </div>
  );
}

export default TextLableField;
