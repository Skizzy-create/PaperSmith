import React from "react";

export default function ComingFunctionCard() {
  return (
    <div className="bg-white border-2 gap-6 shadow-sm  border-black border-opacity-10 w-64 rounded-xl h-72 flex flex-col text-center pt-16">
      <div className="flex flex-col">
        <h1 className="font-noto text-lg">More Feature</h1>
        <h1 className="font-rozha text-3xl">Coming Soon</h1>
      </div>

      <div className="flex relative justify-center gap-2">
        <div className="bg-[#D9D9D9] left-16 top-2   w-[54px] h-[70px] -rotate-12 rounded-lg flex flex-col justify-center absolute z-0">
          <div className="bg-white scale-75 mx-auto my-auto flex justify-center text-center rounded-full  w-6 font-rozha ">
            ?
          </div>
        </div>

        <div className="bg-[#0038FF] w-[54px] h-[70px]  rounded-lg flex flex-col justify-center absolute z-10 ">
          <div className="bg-white scale-75 mx-auto my-auto flex justify-center text-center rounded-full  w-6 font-rozha ">
            ?
          </div>
        </div>

        <div className="bg-[#5278FF] left-36 top-3  w-[54px] h-[70px] rotate-12 rounded-lg flex flex-col justify-center absolute z-20 ">
          <div className="bg-white scale-75 mx-auto my-auto flex justify-center text-center rounded-full  w-6 font-rozha ">
            ?
          </div>
        </div>
      </div>
    </div>
  );
}
