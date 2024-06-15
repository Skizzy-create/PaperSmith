import { ArrowRight } from "lucide-react";
import React from "react";

export default function FuctionCard() {
  return (
    <div className="w-80 h-96 rounded-xl shadow-sm bg-white border-2  border-black border-opacity-10 flex flex-col ">
      <div className="basis-1/2 bg-contain bg-no-repeat  bg-center  bg-[url('./assets/CardPic.jpg')]"></div>
      <div className="basis-1/2 flex flex-col gap-2 px-4">
        <h1 className="font-noto font-bold text-lg leading-6">Revision test Series for college and school examination </h1>
        <h1 className="max-w-[30ch] font-noto">you provide the books and we help generate theory questions to help practice for exams</h1>
        <div className="flex justify-end ">
        <div className="hover:cursor-pointer"><ArrowRight className="scale-125" /></div>

      </div>
      </div>
      
    </div>
  );
}
