import React from "react";
import UpgradePlan from "./UpgradePlan";
import { LogOut, Settings } from "lucide-react";

export default function () {
  return (
    <div className="bg-[#EFEFEF] w-60 mx-auto h-40 flex flex-col gap-4 p-3 rounded-md ">
      <div className="flex items-center gap-2 ">
        <div className="bg-pink-400 w-8 h-8 rounded-md mb-1 ">
          <h1 className="text-white font-noto font-medium text-lg text-center">
            S
          </h1>
        </div>
        <div className="flex flex-col relative ">
          <h1 className="font-noto font-medium text-base ">
            Shashwat Shandilya
          </h1>
          <h1 className="font-noto font-medium text-[12px] relative -top-1">
            Freemium
          </h1>
        </div>
      </div>
      <UpgradePlan />
      <div className="flex">
        <div className="flex font-noto text-gray-400 gap-2 text-sm items-center justify-center rounded-sm w-28 h-6 hover:bg-gray-200 hover:cursor-pointer active:bg-gray-300">
          <Settings size={"16px"} />

          <h1>Settings</h1>
        </div>

        <div className="flex font-noto text-gray-400 gap-2 text-sm items-center justify-center rounded-sm w-28 h-6 hover:bg-gray-200 hover:cursor-pointer active:bg-gray-300">
          <LogOut size={"16px"} />

          <h1>logout</h1>
        </div>
      </div>
    </div>
  );
}
