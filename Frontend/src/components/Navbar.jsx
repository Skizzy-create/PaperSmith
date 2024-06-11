import React, { useState } from 'react'
import AccentButton from './AccentButton'
import SmallButton from './SmallButton'
import { Album, Coins, GalleryVerticalEnd, SquareCheck,  Star } from 'lucide-react'
import SmallOptionBtn from './SmallOptionBtn'
import GridandList from './GridandList'

export default function Navbar() {

  const [index, setIndex] = useState(0);

  return (
    <div className='flex flex-col w-[100wh] p-10 font-noto gap-4'>
      <div className='flex justify-between'>
        <div className='flex gap-3'>
            <SmallButton text="Create paper" />
            <SmallOptionBtn />
        </div>

        <div className='flex text-gray-400 items-center gap-2'>
          <Coins size={"16px"} />
          <h1 className='text-[16px] '>500 credits</h1>
        </div>
        </div>
       <div className='flex justify-between items-center'>
         
      <div className='flex gap-4'>
        <div className={`flex gap-1 hover:cursor-pointer items-center ${index == 0 ? "text-[#5278FF]" : "text-black}"}`} onClick={()=>{setIndex(0);}}>
          <GalleryVerticalEnd size={"14px"} />
          <h1 className='font-sm font-noto'>All</h1>

        </div>

        <div className={`flex gap-1 hover:cursor-pointer items-center ${index == 1 ? "text-[#5278FF]" : "text-black}"}`} onClick={()=>{setIndex(1);}}>
          <SquareCheck size={"14px"} />
          <h1 className='font-sm font-noto'>Mcq only</h1>

        </div>

        <div className={`flex gap-1 hover:cursor-pointer items-center ${index == 2 ? "text-[#5278FF]" : "text-black}"}`} onClick={()=>{setIndex(2);}}>
          <Album size={"14px"} />
          <h1 className='font-sm font-noto'>Theroy only</h1>

        </div>

        <div className={`flex gap-1 hover:cursor-pointer items-center ${index == 3 ? "text-[#5278FF]" : "text-black}"}`} onClick={()=>{setIndex(3);}}>
          <Star size={"14px"} />
          <h1 className='font-sm font-noto'>favrouties</h1>

        </div>

      </div>

      <GridandList />

      </div>

    </div>
  )
}
