import React, { useState } from "react";
import PaperSmithLogo from "../assets/Logo.svg";
import { Home, Trash, Plus } from "lucide-react";
import Info from "./InfoBox/Info";
import { useNavigate } from "react-router-dom";

export default function Sidebar ({ModalState}) {
  
  const [index, setIndex] = useState(0);

  const onclickhandle = ()=>{
    ModalState(true);

  }
 
  return (
    <div className="bg-white border border-black border-opacity-10 rounded-lg mt-1 h-[99vh] flex flex-col ml-2 w-64 justify-between">
      <div className="flex flex-col">
        <img src={PaperSmithLogo} className="w-auto h-6 mt-6" />

        <div className="flex flex-col gap-2 px-4 mt-16">
          <div
            className={`flex gap-3 hover:cursor-pointer  items-center  ${
              index == 0
                ? "text-white bg-[#5278FF] rounded-sm leading-2"
                : "text-gray-400 hover:bg-gray-200"
            } px-4 py-[5px]`}
            onClick={() => setIndex(0)}
          >
            <Home size={"18px"} />
            <h1 className="text-base font-noto">Home</h1>
          </div>

          <div
            className={`flex gap-3 hover:cursor-pointer items-center  ${
              index == 1
                ? "text-white bg-[#5278FF] rounded-sm leading-2"
                : "text-gray-400 hover:bg-gray-200"
            } px-4 py-[5px]`}
            onClick={() => setIndex(1)}
          >
            <Trash size={"18px"} />
            <h1 className="text-base font-noto">Trash</h1>
          </div>
        </div>

        <div className="flex flex-col px-6">
          <div className="flex items-center mt-4 justify-between">
            <h1 className="font-noto text-sm text-gray-400 font-bold">
              Folders
            </h1>
            <div
              className="bg-white  text-gray-400 border border-black border-opacity-10 rounded-full w-4 h-4 hover:cursor-pointer"
              onClick={onclickhandle}
            >
              <Plus size={"12px"} className="mx-auto my-[1.5px] " />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center gap-4 mb-4 px-2">
        <Info />

        <h1 className="text-sm font-noto text-gray-400">version 0.1</h1>
      </div>
    </div>
  );
}
