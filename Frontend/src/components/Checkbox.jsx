import { CheckIcon } from "lucide-react";
import React, { useState } from "react";

export default function Checkbox({CheckboxStatus}) {
  const [BoolValue, SetBoolValue] = useState(false);
  return (
    <div
      className="flex font-noto text-sm gap-2 items-center hover:cursor-pointer"
      onClick={() =>{ SetBoolValue(!BoolValue); CheckboxStatus(!BoolValue)} }
    >
      {BoolValue ? (
        <div className="size-6  rounded-sm bg-gray-300 border-2  flex border-black">
          <CheckIcon />
        </div>
      ) : (
        <div className="size-6  rounded-sm bg-gray-300"></div>
      )}
      Optional Question
    </div>
  );
}
