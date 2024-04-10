import { useState } from "react";
import Button from "./Button.js";
import TextLableField from "./TextLableField.js";
import { useTasksDispatch } from "./TasksContext.js";

export default function AddTask() {
  const [text, setText] = useState("");
  const dispatch = useTasksDispatch();
  return (
    <>
      <TextLableField
        className="textLableFieldModal"
        lableName="Nhà cung cấp"
        selectName="selectName"
        setText={setText}
      />
      <Button
        name="Lưu lại"
        color="#7fff94"
        onClickChange={() => {
          setText("");
          dispatch({
            type: "added",
            id: nextId++,
            text: text,
          });
        }}
      />
    </>
  );
}

let nextId = 3;
