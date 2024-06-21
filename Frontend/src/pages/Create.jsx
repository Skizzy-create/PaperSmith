import React from "react";
import SmallButton from "../components/SmallButton";
import { Home } from "lucide-react";

import ComingFunctionCard from "../components/ComingFunctionCard";
import FuctionCard from "../components/FuctionCard";
import { useNavigate } from "react-router-dom";

export default function Create() {
  const navigation = useNavigate();
  return (
    <div className="w-[100wh] bg-[#F8F8F8] h-[100vh] flex flex-col gap-12 p-12 ">
      <div
        className="flex w-24 rounded-md justify-center hover:cursor-pointer  py-1 text-white font-noto gap-2 items-center bg-[#5278FF]"
        onClick={() => navigation("/aa/h")}
      >
        <Home size={16} />
        Home
      </div>

      <div className="flex flex-col gap-12">
        <h1 className="font-rozha text-3xl text-center">
          Create Your Practice Sheet
        </h1>
        <div className="flex justify-center items-center gap-12">
          <ComingFunctionCard />
          <FuctionCard  onclick={()=>{navigation("/Create/options")}}/>
          <ComingFunctionCard />
        </div>
      </div>
    </div>
  );
}
