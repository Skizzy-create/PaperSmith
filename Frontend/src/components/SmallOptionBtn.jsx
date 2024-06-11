import { ChevronDown, Import } from 'lucide-react'
import React from 'react'

export default function SmallOptionBtn() {
  return (
    <div className='bg-white border border-black border-opacity-10 gap-2 shadow-sm flex items-center px-2 rounded-md'>
        <Import size={"14px"} />
        <div className='flex gap-[2px]  items-center'>
        <h1 className='text-sm'>Import</h1>
        <ChevronDown size={"12px"} />

        </div>
        
    </div>
  )
}
