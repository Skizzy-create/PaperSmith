import React from 'react'

export default function InputBox(props) {
  return (
    <div className='flex flex-col gap-1 px-16'>
        <h1 className='font-noto text-lg'>{props.text}</h1>
        <input className='font-noto bg-[#EFEFEF] rounded-sm px-4 py-2' placeholder={props.placeholder} />

    </div>
  )
}
