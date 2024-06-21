import React, { useState } from "react";

export default function EditableText({setSectionTitle}) {
  const [isEditing, SetisEditing] = useState(false);
  const [Text, SetText] = useState("Section-A");

  const HandleDoubleClick = () => {
    SetisEditing(true);
  };

  const HandleOnChange = (e) => {
    SetText(e.target.value);
    setSectionTitle(e.target.value);
  };

  const HandleOnBlur = (e) => {
    if (e.target.value == "") {
      SetText("Section-A");
    }
    SetisEditing(false);
  };

  return (
    <div className="font-noto text-lg" onDoubleClick={HandleDoubleClick}>
      {isEditing ? (
        <input
          className="bg-transparent w-20"
          value={Text}
          type="text"
          onChange={HandleOnChange}
          onBlur={HandleOnBlur}
        />
      ) : (
        <div className="w-20">{Text}</div>
      )}
    </div>
  );
}
