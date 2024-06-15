import React from "react";
import InputBox from "./InputBox";
import AccentButton from "./AccentButton";
import SmallButton from "./SmallButton";

export default function Modal() {
  return (
    <div className="px-6 py-6 flex-col gap-4 flex flex-col rounded-sm font-noto bg-white absolute  z-50">
      <h1 className="font-bold text-xl leading-6 max-w-[25ch]">
        Create A Folder to Organize Question Paper
      </h1>
      <div className="flex justify-start gap-4 items-center">
        <InputBox placeholder="Name of Folder" /> 
        <div className="bg-[#5278FF] px-8 py-2 font-noto text-white rounded-sm mt-1 text-center hover:cursor-pointer" onClick={""}>Create</div>
      </div>
    </div>
  );
}
