import { EllipsisVertical, Plus, Star } from "lucide-react";
import React from "react";
import Tag from "./Tag";
/* Card component to show  */
export default function Card({ title = "Untitled ", btn = false }) {
  return btn == false ? (
    <div className="w-56 h-56 rounded-xl border shadow-md relative border-black border-opacity-10 rounded-sm bg-white flex flex-col">
      <div className="basis-[55%] bg-black rounded-t-xl">
        <Star color="white" className="absolute right-2 top-2 size-4" />
      </div>
      <div className=" p-3 basis-[45%] flex flex-col justify-between">
        <p className="font-noto text-base leading-5 font-medium break-words">
          {title}
        </p>
        <div className="flex justify-between">
          <div className="c">
            <Tag />
          </div>
          <EllipsisVertical className="size-4" />
        </div>
      </div>
    </div>
  ) : (
    <div className="w-56 h-56 rounded-xl border shadow-md relative border-black border-opacity-10 rounded-sm bg-white flex flex-col gap-2 justify-center items-center ">
      <Plus className="size-10 text-[#5278FF]" />
      <h1 className="font-noto">Create New Paper</h1>
    </div>
  );
}
