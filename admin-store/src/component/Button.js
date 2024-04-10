import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { TasksProvider } from "./TasksContext";

function Button({
  name,
  color,
  padding,
  iconName,
  onClickChange,
  onClickModal,
  type,
}) {
  return (
    <button
      type={type}
      className="button"
      onClick={onClickChange}
      style={{
        backgroundColor: color,
        padding: "5px",
        cursor: "pointer",
        color: "#000",
      }}
    >
      <FontAwesomeIcon icon={iconName} className="iconButton" />
      {name}
    </button>
  );
}

export default Button;
