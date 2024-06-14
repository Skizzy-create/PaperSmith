import { Grid, LayoutGrid, Menu } from "lucide-react";
import React, { useState } from "react";

export default function GridandList({ onchng }) {
  const [index, setIndex] = useState(0);

  const onHandleClick = (newIndex)=>{
    setIndex(newIndex);
    onchng(newIndex);

  }
  return (
    <div className="flex bg-gray-200 rounded-sm gap-2  py-1 px-[6px] rounded-md">
      <div
        className={`flex items-center gap-1 font-noto hover:cursor-pointer ${
          index == 0
            ? "bg-white px-2  rounded-sm text-[#5278FF]"
            : "px-2  text-gray-400"
        } `}
        onClick={() => onHandleClick(0)}
      >
        <LayoutGrid size={"16px"} />
        <h1 className="text-base">Grid</h1>
      </div>

      <div
        className={`flex items-center gap-1 font-noto hover:cursor-pointer ${
          index == 1
            ? "bg-white px-2  rounded-sm text-[#5278FF]"
            : "px-2  text-gray-400"
        } `}
        onClick={() => onHandleClick(1)}
      >
        <Menu size={"16px"} />
        <h1 className="text-base">List</h1>
      </div>
    </div>
  );
}
