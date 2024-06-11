import { Plus } from 'lucide-react'
import React from 'react'

export default function SmallButton(props) {
  return (
    <div className='px-3 py-2  bg-[#5278FF] shadow-md  text-white font-noto flex items-center gap-2 rounded-md text-[12px]' onClick={props.onClick}>
        <Plus  size={"14px"}/>
        {props.text}
    </div>
  )
}
