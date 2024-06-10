import React from 'react'

export default function (props) {
  return (
    <div className='font-noto flex text-gray-500 text-[12px] gap-1 m-auto'>
        <div>{props.text}</div>
        <div className='text-[#5278FF] hover:cursor-pointer' onClick={props.onClick}>{props.link}</div>
    </div>
  )
}
