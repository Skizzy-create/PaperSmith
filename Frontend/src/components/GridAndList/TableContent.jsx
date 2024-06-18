import { EllipsisVertical, Star } from "lucide-react";
import React from "react";
import OptionsDropDown from "./OptionsDropDown";

export default function TableContent({
  title = "untilted",
  folder = "none",
  createdOn = "24 jan 1990",
  lastView = "24 jan 1991",
}) {
  return (
    <div className="flex text-gray-400 text-lg gap-2 font-noto items-center w-full">
      <Star size={"18px"} />

      <div className="flex w-full  ">
        <h1 className="basis-1/4 line-clamp-1 ">{title}</h1>

        <h1 className="basis-1/4">{folder}</h1>
        <h1 className="basis-1/4">{createdOn}</h1>
        <h1 className="basis-1/4">{lastView}</h1>
      </div>

      <OptionsDropDown />
    </div>
  );
}
